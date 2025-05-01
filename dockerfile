# ---- Stage 1: Build the Vite React app ----
    FROM node:18-alpine AS build

    # Set working directory
    WORKDIR /app
    
    # Copy package.json and lock file (if exists)
    COPY package.json ./
    COPY package-lock.json* ./
    
    # Install dependencies
    RUN npm install
    
    # Copy all files
    COPY . .
    
    # Build the Vite app
    RUN npm run build
    
    # ---- Stage 2: Serve with Nginx ----
    FROM nginx:alpine
    
    # Remove default nginx website
    RUN rm -rf /usr/share/nginx/html/*
    
    # Copy built project from previous stage
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Expose port 80
    EXPOSE 80
    
    # Start nginx server
    CMD ["nginx", "-g", "daemon off;"]
    
