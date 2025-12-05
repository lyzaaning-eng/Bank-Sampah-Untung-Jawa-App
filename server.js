import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';

// Konfigurasi Environment Variables
dotenv.config();

// Definisi __dirname untuk ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');

// Middleware untuk parsing JSON
app.use(express.json());

// Cek apakah folder build (dist) sudah ada
if (!fs.existsSync(DIST_DIR)) {
  console.warn('\n⚠️  PERINGATAN: Folder "dist" tidak ditemukan!');
  console.warn('👉  Aplikasi Frontend belum di-build. Jalankan perintah berikut di terminal:');
  console.warn('    npm run build\n');
}

// 1. Sajikan File Statis (Frontend hasil build)
app.use(express.static(DIST_DIR));

// 2. API Routes (Contoh Backend)
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'online', 
    message: 'Server Eco Untung Jawa berjalan normal',
    timestamp: new Date()
  });
});

// 3. Handle SPA Routing (Redirect semua request lain ke index.html)
app.get('*', (req, res) => {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send(`
      <div style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h1>404 - Frontend Not Found</h1>
        <p>File <code>index.html</code> tidak ditemukan di folder <code>dist</code>.</p>
        <p>Silakan jalankan perintah <b>npm run build</b> di terminal Anda terlebih dahulu.</p>
      </div>
    `);
  }
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`🚀 Server Eco Untung berjalan di: http://localhost:${PORT}`);
  console.log(`=================================================`);
});