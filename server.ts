import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import type { Request, Response } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// Serve assets specifically
app.use('/assets', express.static(join(__dirname, 'dist/assets')));

// Handle client-side routing
app.get('*', (req: Request, res: Response) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});