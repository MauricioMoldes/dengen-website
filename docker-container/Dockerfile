# Use an official Node.js 20 runtime as the base image
FROM node:20-buster

# Set the working directory inside the container
WORKDIR /app

# Install git to clone the repo
RUN apt-get update && apt-get install -y git

# Clone the DenGen website repository from GitHub
RUN git clone https://github.com/MauricioMoldes/dengen-website.git /app

# Move to the correct subfolder where the package.json is located
WORKDIR /app/dengen-website

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Build the React app for production
RUN yarn build

# Expose the port the app will run on (change this if your app uses a different port)
EXPOSE 3000

# Start the app in production mode
CMD ["yarn", "start"]

