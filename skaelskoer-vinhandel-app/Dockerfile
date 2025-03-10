# pull base image
FROM node:22.14.0-slim

# set our node environment, either development or production
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# default ports for Expo
ARG PORT=8081
ENV PORT $PORT
# Expose common Expo ports
EXPOSE 8081 19000 19001 19002 19006

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest

# Create app directory
RUN mkdir -p /opt/skaelskoer-vinhandel-app
WORKDIR /opt/skaelskoer-vinhandel-app

# Copy package files first for better caching
COPY ./package.json ./package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Install and verify required dependencies
RUN npm install --save-dev jest

# Create necessary directories for Expo
RUN mkdir -p node_modules/.cache

# For mobile development, set appropriate host
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
ENV REACT_NATIVE_PACKAGER_HOSTNAME=192.168.1.33

# Enable Watchman for file watching
ENV WATCHMAN_SOCKFILE=/tmp/watchman.sock
ENV EXPO_FORCE_WATCHMAN=true

# Start expo with development settings
ENTRYPOINT ["npx", "expo"]
CMD ["start", "--port", "8081", "--host", "lan", "--clear"]