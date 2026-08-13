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
  '/bookings': 'bookings.html',
  '/fleet': 'fleet.html',
  '/contact': 'contact.html',
  '/miami-cruise-port-shuttle': 'miami-cruise-port-shuttle.html',
  '/fll-to-miami-cruise-port-shuttle': 'fll-to-miami-cruise-port-shuttle.html',
  '/miami-cruise-port-hotels-shuttle-guide': 'miami-cruise-port-hotels-shuttle-guide.html'
};

const redirects = {
  '/Bookings': '/bookings',
  '/Fleet': '/fleet',
  '/Contact': '/contact',
  '/Contact-Metro-Shuttle-Services': '/contact'
};

app.use((req, res, next) => {
  if (redirects[req.path]) return res.redirect(301, redirects[req.path]);
  next();
});

for (const [route, file] of Object.entries(pages)) {
  app.get(route, (_req, res) => res.sendFile(path.join(publicDir, file)));
}

const port = process.env.PORT || 6300;
app.listen(port, () => console.log(`Metro Shuttle site running at http://localhost:${port}`));