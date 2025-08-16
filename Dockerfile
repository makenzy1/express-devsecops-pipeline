# FROM node:18-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci --omit=dev
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]

FROM node:18-alpine

WORKDIR /app

# Copy package manifests
COPY package*.json ./

# Force fresh dependency install (ensures patched packages)
RUN npm ci --prefer-online --force --omit=dev

# Copy application source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
