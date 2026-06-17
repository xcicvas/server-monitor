export type Protocol = 'http' | 'https' | 'tcp' | 'ping';

const DEFAULT_TIMEOUT = 5000;

export async function probeHttp(url: string, timeout = DEFAULT_TIMEOUT): Promise<number | null> {
  const start = performance.now();
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return performance.now() - start;
  } catch {
    return null;
  }
}

export async function probeTcp(address: string, port: number, timeout = DEFAULT_TIMEOUT): Promise<number | null> {
  return new Promise((resolve) => {
    const start = performance.now();
    let resolved = false;
    let ws: WebSocket | null = null;

    const timer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        ws?.close();
        resolve(null);
      }
    }, timeout);

    try {
      ws = new WebSocket(`ws://${address}:${port}`);

      ws.onopen = () => {
        if (!resolved) {
          resolved = true;
          clearTimeout(timer);
          ws?.close();
          resolve(performance.now() - start);
        }
      };

      ws.onerror = () => {
        if (!resolved) {
          resolved = true;
          clearTimeout(timer);
          ws?.close();
          resolve(null);
        }
      };
    } catch {
      if (!resolved) {
        resolved = true;
        clearTimeout(timer);
        resolve(null);
      }
    }
  });
}

export async function probePing(address: string, timeout = DEFAULT_TIMEOUT): Promise<number | null> {
  const start = performance.now();
  try {
    const pc = new RTCPeerConnection({ iceServers: [] });

    const offer = await new Promise<RTCSessionDescriptionInit>((resolve, reject) => {
      const timer = setTimeout(() => {
        pc.close();
        reject(new Error('timeout'));
      }, timeout);

      pc.createOffer()
        .then(offer => {
          clearTimeout(timer);
          resolve(offer);
        })
        .catch(err => {
          clearTimeout(timer);
          reject(err);
        });
    });

    await pc.setLocalDescription(offer);

    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        pc.close();
        resolve(null);
      }, timeout);

      pc.onicegatheringstatechange = () => {
        if (pc.iceGatheringState === 'complete') {
          clearTimeout(timer);
          pc.close();
          resolve(performance.now() - start);
        }
      };

      setTimeout(() => {
        clearTimeout(timer);
        if (pc.iceGatheringState !== 'complete') {
          pc.close();
          resolve(performance.now() - start);
        }
      }, timeout);
    });
  } catch {
    return null;
  }
}

export async function probe(address: string, port: number, protocol: Protocol, customTimeout?: number): Promise<number | null> {
  switch (protocol) {
    case 'http':
      return probeHttp(`http://${address}:${port}`, customTimeout);
    case 'https':
      return probeHttp(`https://${address}:${port}`, customTimeout);
    case 'tcp':
      return probeTcp(address, port, customTimeout);
    case 'ping':
      return probePing(address, customTimeout);
    default:
      return null;
  }
}
