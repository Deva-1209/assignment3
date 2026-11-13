
# Use Node.js 20
FROM node:20-bookworm-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application files
COPY . .

# Application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
