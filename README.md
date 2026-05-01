# JS-1 Academy — Website Bimbingan Belajar

Website resmi JS-1 Academy dengan backend Node.js + Express + MySQL.

## Struktur Project

```
├── backend/          # Backend API (Node.js + Express + MySQL)
├── Artikel/          # Gambar artikel
├── Pengajar/         # Gambar pengajar
├── Program/          # Gambar program
├── Tentang Kami/     # Gambar halaman tentang kami
├── index.html
├── about.html
├── blog.html
├── contact.html
├── faq.html
├── programs.html
├── teachers.html
└── style.css
```

## Tech Stack

- **Frontend:** HTML, CSS (Vanilla)
- **Backend:** Node.js, Express.js
- **Database:** MySQL (Sequelize ORM)
- **Auth:** JWT (JSON Web Token)

## Cara Menjalankan Backend

### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Setup database
Buat database MySQL bernama `js1academy`, lalu sesuaikan file `.env`:
```bash
cp .env.example .env
```

### 3. Jalankan seeder (isi data awal)
```bash
npm run seed
```

### 4. Jalankan server
```bash
npm start
```

Server berjalan di `http://localhost:3000`

## API Endpoints

### Public
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | /api/articles | Semua artikel |
| GET | /api/articles/:id | Detail artikel |
| GET | /api/teachers | Semua pengajar |
| GET | /api/programs | Semua program |
| GET | /api/programs/:id | Detail program |
| GET | /api/faqs | Semua FAQ |
| GET | /api/testimonials | Semua testimonial |
| POST | /api/contacts | Kirim pesan kontak |
| POST | /api/subscriptions | Daftar newsletter |

### Admin (butuh JWT token)
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| POST | /api/auth/login | Login admin |
| POST | /api/articles | Tambah artikel |
| PUT | /api/articles/:id | Edit artikel |
| DELETE | /api/articles/:id | Hapus artikel |
| POST | /api/teachers | Tambah pengajar |
| PUT | /api/teachers/:id | Edit pengajar |
| DELETE | /api/teachers/:id | Hapus pengajar |
| GET | /api/contacts | Lihat semua pesan masuk |

## Pembagian Tugas

| Orang | Branch | Tugas |
|-------|--------|-------|
| 1 | `feature/setup-auth` | Setup project, database, autentikasi admin |
| 2 | `feature/articles` | CRUD artikel + integrasi blog.html |
| 3 | `feature/teachers-programs-faq` | CRUD pengajar, program, FAQ + integrasi HTML |
| 4 | `feature/contact-testimonials` | CRUD kontak, testimonial, subscripsi + upload gambar |

## Akun Admin Default (setelah seed)

- **Email:** admin@js1academy.com
- **Password:** admin123
