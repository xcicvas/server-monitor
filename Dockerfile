FROM node:22-alpine

WORKDIR /app

# 安装依赖（分离 package.json 单独复制以利用 Docker 缓存）
COPY package*.json ./
RUN npm ci --omit=dev

# 复制 Agent 代码
COPY api ./api

# 创建数据目录（审计日志、历史数据、用户文件）
RUN mkdir -p /app/data

# 环境变量
ENV NODE_ENV=production
ENV AGENT_PORT=7001

# 暴露端口
EXPOSE 7001

# 启动 Agent
CMD ["node", "api/agent.js"]
