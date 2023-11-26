# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json .

RUN npm install

# Copy the rest of the source files into the image.
COPY . .

RUN npm run build

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run dev
