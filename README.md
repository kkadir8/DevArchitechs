# SmartScheduler

> AI Destekli Akıllı Ders Programı Oluşturucu

**Ekip:** DevArchitechs | **Ders:** Yazılım Projesi Geliştirme 2025-2026 Bahar | **Metodoloji:** Scrum (4 Sprint)

---

## Hızlı Başlangıç

### Backend (ASP.NET Core 9)
```bash
cd SmartScheduler.API
dotnet run
# → http://localhost:5000 (Swagger UI)
```

### Frontend (Next.js 14)
```bash
cd smartscheduler-frontend
npm install
npm run dev
# → http://localhost:3000
```

---

## Sayfalar

| Route | Açıklama |
|-------|----------|
| `/dashboard` | Genel bakış — metrikler, sprint durumu, ekip |
| `/courses` | Ders kataloğu — arama, sıralama |
| `/instructors` | Öğretim görevlileri |
| `/classrooms` | Derslikler ve kapasite |
| `/schedule` | Program oluşturucu (Sprint 3) |

---

## API Endpoint'leri

```
GET  /api/health         → Sistem durumu
GET  /api/courses        → Ders listesi
GET  /api/instructors    → Hoca listesi
GET  /api/classrooms     → Sınıf listesi
```

---

## Teknoloji Stack

**Frontend:** Next.js 14 · TypeScript · Tailwind CSS · Lucide React  
**Backend:** ASP.NET Core 9 · C# · Entity Framework Core  
**Veritabanı:** PostgreSQL 16 (Sprint 2'den itibaren)  
**DevOps:** Docker · GitHub Actions · Vercel · Railway

---

## Ekip

| Kişi | Rol | Alan |
|------|-----|------|
| Abdulkadir Gedik | Product Owner | Algoritma & koordinasyon |
| Yunus Emre Edizer | Scrum Master | Backend Lead (.NET) |
| Emin Akif Erzurumlu | Developer | Frontend Lead (Next.js) |
| Hamza Hakverir | Developer | Veritabanı & DAL |
| Burak Kürkçü | Developer | DevOps & Test |

---

## Dokümantasyon

- [Mimari Tasarım](docs/ARCHITECTURE.md)
- [Veritabanı Şeması](docs/DATABASE_SCHEMA.md)

---

## Sprint Durumu

| Sprint | Hedef | Durum |
|--------|-------|-------|
| Sunum 1 | Planlama & Scrum | ✅ Bitti |
| Sprint 1 | Kurulum & API | 🔄 Devam ediyor |
| Sprint 2 | Algoritma + CRUD + Auth | ⏳ Yaklaşan |
| Sprint 3 | Dashboard & Takvim | ⏳ Yaklaşan |
| Sprint 4 | Test & Deploy | ⏳ Yaklaşan |
