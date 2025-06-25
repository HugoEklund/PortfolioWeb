FROM node:24-alpine AS builder

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory
WORKDIR /app

# Set permissions for the app directory
# You can do this before or after creating the directory,
# but it's good to ensure the user owns it before copying files.
# WORKDIR creates the directory if it doesn't exist, owned by root.
# So we change ownership here.
RUN chown appuser:appgroup /app

# Copy package files and change ownership
COPY package.json package-lock.json ./
RUN chown appuser:appgroup package.json package-lock.json

# Switch to the non-root user
USER appuser

# Install dependencies as the non-root user
# Note: We removed the ENV for NPM_CONFIG_CACHE as npm handles caching
# well in user-owned directories by default.
RUN npm install --frozen-lockfile

# Copy the rest of the source code and ensure ownership
# (We switch back to root temporarily to do the copy and chown)
USER root
COPY . .
RUN chown -R appuser:appgroup .

# Switch back to the non-root user for the rest of the build
USER appuser

# Build the application
RUN npm run build