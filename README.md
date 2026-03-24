# Todo API

## 1. Deskripsi Project
API sederhana untuk manajemen To-Do List dengan fitur CRUD menggunakan Node.js dan Express.

---

## 2. Dokumentasi API

### Endpoint:
- GET /todos
- POST /todos
- PUT /todos/:id
- DELETE /todos/:id

### Response Success:
{
  "success": true,
  "data": {
    "id": 123,
    "task": "Ngerjain tugas PPL"
  }
}

### Response Error:
{
  "success": false,
  "message": "Not found"
}

---

## 3. Panduan Instalasi

Jalankan:
docker compose up --build

Port:
- Host: 3000
- Container: 3000

---

## 4. Alur Git
Branch:
- main
- develop
- feature

Contoh commit:
- feat: add API
- fix: bug fix

---

## 5. Automasi
- CI: menjalankan unit test
- CS: security scan dengan npm audit
