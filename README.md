# NOTTE AZZURA 

## 📦 1. Clone Project

```bash
git clone https://github.com/Brenda116/UAS_FrontendProgramming_Kelompok-3.git
cd UAS_FrontendProgramming_Kelompok-3
````


## 🛠 2. Install Dependencies

```
npm install
```


## 🔧 3. Setup Environment (.env)

Buat file `.env` di root:

```
DATABASE_URL="file:./dev.db"
JWT_SECRET="super-secret-key"
```

* `DATABASE_URL` → prisma otomatis membuat database SQLite bernama `dev.db`
* `JWT_SECRET` → dipakai untuk signing JWT


## 🗄 4. Setup Prisma + SQLite

### 4.1 Generate Prisma Client

```bash
npx prisma generate
```

### 4.2 Buat Database & Apply Migration

```bash
npx prisma migrate dev --name init
```

Prisma akan:

* Membuat file `dev.db`
* Membuat tabel sesuai `schema.prisma`
* Generate Prisma Client



## 🖥 5. Menjalankan Aplikasi

```bash
npm run dev
```

Akses di:

```
http://localhost:3000
```