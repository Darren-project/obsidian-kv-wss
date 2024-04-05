# obsidian-kv-wss
WSS Echo Server for the obsidian-kv plugin

# Setting Up

# Docker
1. Run this command to build the image
   ```sh
   docker build . -t kv-wss
   ```
2. Run this to start the container
   ```sh
   docker run --name kv-wss --background --restart unless-stopped -p 8080:8080 kv-wss
   ```

# Systemd
1. Run this command to install all deps
   ```sh
   npm i
   ```

2. Set up systemd or whatever manager for it.
   
