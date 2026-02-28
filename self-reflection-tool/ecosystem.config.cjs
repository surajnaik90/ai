// PM2 Ecosystem Configuration
// This file defines how PM2 should run the self-reflection tool
// Both the backend server and frontend client are managed as separate processes

module.exports = {
  apps: [
    {
      name: 'self-reflection-server',
      script: './server/index.js',
      cwd: 'c:\\Code\\ai\\self-reflection-tool',
      instances: 1,
      autorestart: true,              // Automatically restart if the app crashes
      watch: false,                   // Don't restart on file changes
      max_memory_restart: '1G',       // Restart if memory exceeds 1GB
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    },
    {
      name: 'self-reflection-client',
      script: 'node_modules/vite/bin/vite.js',
      cwd: 'c:\\Code\\ai\\self-reflection-tool\\client',
      instances: 1,
      autorestart: true,              // Automatically restart if the app crashes
      watch: false,                   // Don't restart on file changes
      max_memory_restart: '1G',       // Restart if memory exceeds 1GB
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};
