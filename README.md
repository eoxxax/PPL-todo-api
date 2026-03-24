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
```json
{
  "success": true,
  "data": {
    "id": 123,
    "task": "Ngerjain tugas PPL"
  }
}
```

### Response Error:
```json
{
  "success": false,
  "message": "Not found"
}
```

---

## 3. Panduan Instalasi (Docker)

### Menjalankan aplikasi:
```bash
docker compose up --build
```

### Port:
- Host: 3000  
- Container: 3000  

---

## 4. Alur Kerja Git

### Branch:
- main
- develop
- feature

### Conventional Commits:
- feat: add API
- fix: bug fix

---

## 5. Status Automasi (GitHub Actions)

- CI: menjalankan unit test secara otomatis saat push atau pull request
- CS: melakukan security scan menggunakan npm audit

### Badge:
![CI](https://github.com/eoxxax/PPL-todo-api/actions/workflows/ci.yml/badge.svg)
