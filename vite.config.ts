import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  base: '/JOACHIM-FASTMOVE-CARPENTERS/',
  plugins: [
    react(),
    {
      name: 'dev-mock-lead',
      apply: 'serve',
      configureServer(server) {
        server.middlewares.use('/api/lead', async (req, res, next) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end('Method Not Allowed');
            return;
          }
          const ctype = String(req.headers['content-type'] || '');
          if (ctype.includes('multipart/form-data')) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true, received: 'multipart/form-data' }));
            return;
          }
          let body = '';
          req.on('data', (c) => (body += c));
          req.on('end', () => {
            try {
              const json = body ? JSON.parse(body) : {};
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true, received: json }));
            } catch {
              res.statusCode = 400;
              res.end('Invalid JSON');
            }
          });
        });
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});

