import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const publicDir = path.join(__dirname, 'metroshuttleservices.com', 'public');

app.use(express.static(publicDir));

const pages = {
  '/': 'index.html',
  '/Bookings': 'bookings.html',
  '/bookings': 'bookings.html',
  '/Fleet': 'fleet.html',
  '/fleet': 'fleet.html',
  '/Contact': 'contact.html',
  '/contact': 'contact.html',
  '/Contact-Metro-Shuttle-Services': 'contact.html'
};

for (const [route, file] of Object.entries(pages)) {
  app.get(route, (_req, res) => res.sendFile(path.join(publicDir, file)));
}

const port = process.env.PORT || 6300;
app.listen(port, () => console.log(`Metro Shuttle site running at http://localhost:${port}`));
