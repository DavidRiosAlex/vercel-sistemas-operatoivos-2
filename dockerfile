# Use the official Node.js 20 runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json package-lock.json ./

# Install dependencies
# Using `--frozen-lockfile` will ensure reproducibility.
RUN npm ci

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Define the command to run your app using Node.js
CMD ["npm", "run", "dev"]