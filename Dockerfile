# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy the Next.js build output from the builder stage
COPY --from=builder /app/.next ./.next

# Copy package.json and package-lock.json to install production dependencies
COPY --from=builder /app/package*.json ./

RUN npm install --only=production

CMD ["npm", "start"]
