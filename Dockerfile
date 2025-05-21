# Stage 1: Build the React app
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --include=dev
COPY . .
RUN npm run build

# Stage 2: Serve with Express
FROM node:22-alpine

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy server and build output
COPY server.js .
COPY --from=builder /app/build ./build

EXPOSE 80
CMD ["node", "server.js"]
