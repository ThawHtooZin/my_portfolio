# My Portfolio

Personal portfolio site (React + Vite + Tailwind). Live: [thawhtoozin.protechmm.com](https://thawhtoozin.protechmm.com)

---

## Deploy to Lightsail

**1. Build**
```bash
npm run build
```

**2. Upload (run from project root)**
```bash
cd dist
scp -r * ubuntu@47.130.251.233:/var/www/my-portfolio/dist/
```

Or from project root in one go:
```bash
scp -r dist/* ubuntu@47.130.251.233:/var/www/my-portfolio/dist/
```

**3. On the server (SSH in first)** – fix permissions so nginx can read:
```bash
sudo chown -R www-data:www-data /var/www/my-portfolio/dist
sudo find /var/www/my-portfolio/dist -type d -exec chmod 755 {} \;
sudo find /var/www/my-portfolio/dist -type f -exec chmod 644 {} \;
sudo systemctl reload nginx
```

---

## Local dev

- `npm run dev` – frontend
- `npm run server` – contact API
- `npm run dev:full` – both
