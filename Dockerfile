# --- Build Stage ---
    FROM node:18 AS builder

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm ci  # Better for reproducible builds
    
    COPY . .
    RUN npm run build
    
    # --- Production Stage ---
    FROM node:18-slim
    
    WORKDIR /app
    
    COPY --from=builder /app ./
    
    RUN npm ci --omit=dev  # Install only production dependencies
    
    EXPOSE 3000
    
    CMD ["npm", "start"]
    