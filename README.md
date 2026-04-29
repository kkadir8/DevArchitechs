# SmartScheduler Backend

> AI Destekli Akıllı Ders Programı Oluşturucu — Backend API

[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4)](https://dotnet.microsoft.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Status](https://img.shields.io/badge/status-Sprint%201-orange)]()

## 📋 Proje Hakkında

SmartScheduler, üniversitelerde ders programı oluşturma sürecini otomatikleştiren, **genetik algoritma tabanlı** bir optimizasyon platformudur. Bu repo, projenin backend API katmanını içerir.

## 🏗️ Mimari

Çok katmanlı (N-Tier) mimari kullanılmaktadır:

```
┌─────────────────────────────────────────┐
│   Presentation Layer (Next.js 14)       │
└─────────────────┬───────────────────────┘
                  │ REST API (HTTPS/JSON)
┌─────────────────▼───────────────────────┐
│   API Layer (ASP.NET Core 8)            │
│   - Controllers, Middleware, JWT Auth   │
└─────────────────┬───────────────────────┘
┌─────────────────▼───────────────────────┐
│   Business Logic Layer                  │
│   - Genetic Algorithm Engine            │
│   - Constraint Engine                   │
│   - Domain Services                     │
└─────────────────┬───────────────────────┘
┌─────────────────▼───────────────────────┐
│   Data Access Layer (EF Core)           │
│   - Repository Pattern                  │
└─────────────────┬───────────────────────┘
┌─────────────────▼───────────────────────┐
│   Database (PostgreSQL 16)              │
└─────────────────────────────────────────┘
```

## 🛠️ Teknoloji Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | ASP.NET Core 8 Web API |
| Dil | C# 12 |
| ORM | Entity Framework Core 8 |
| Veritabanı | PostgreSQL 16 |
| Authentication | JWT Bearer Token |
| API Dokümantasyon | Swagger / OpenAPI |
| Container | Docker + Docker Compose |
| CI/CD | GitHub Actions |
| Test | xUnit, Moq |

## 📂 Klasör Yapısı

```
smartscheduler-backend/
├── src/
│   ├── SmartScheduler.API/          # Web API katmanı
│   │   ├── Controllers/
│   │   ├── Middleware/
│   │   └── Program.cs
│   ├── SmartScheduler.Domain/       # Entity'ler, value objects
│   ├── SmartScheduler.Application/  # Business logic, services
│   │   └── Algorithm/               # Genetic Algorithm engine
│   └── SmartScheduler.Infrastructure/ # EF Core, repositories
├── tests/
│   ├── SmartScheduler.UnitTests/
│   └── SmartScheduler.IntegrationTests/
├── docs/
│   ├── ARCHITECTURE.md
│   └── DATABASE_SCHEMA.md
├── docker-compose.yml
└── README.md
```

## 🚀 Kurulum

### Ön Gereksinimler
- .NET 8 SDK
- Docker & Docker Compose
- PostgreSQL 16 (veya Docker üzerinden)

### Adımlar

```bash
# Repo'yu klonla
git clone https://github.com/DevArchitechs/smartscheduler-backend.git
cd smartscheduler-backend

# Docker ile veritabanı + API'yi ayağa kaldır
docker-compose up -d

# API: http://localhost:5000
# Swagger UI: http://localhost:5000/swagger
```

## 📊 Proje Durumu

**Şu anki Sprint:** Sprint 1 — Kurulum & Mimari (Hafta 1/8)

### Sprint 1 Hedefleri
- [x] Mimari tasarım ve dokümantasyon
- [x] Veritabanı ER diyagramı
- [x] GitHub repo ve klasör yapısı
- [ ] ASP.NET Core 8 API iskelet kurulumu
- [ ] PostgreSQL + EF Core entegrasyonu
- [ ] Docker Compose setup
- [ ] İlk health-check endpoint'i

## 👥 Ekip — DevArchitechs

| İsim | Rol |
|------|-----|
| Abdulkadir Gedik | Product Owner & Algorithm Lead |
| Yunus Emre Edizer | Scrum Master & Backend Lead |
| Emin Akif Erzurumlu | Frontend Developer |
| Hamza Hakverir | Database & DAL Developer |
| Burak Kürkçü | DevOps & QA Engineer |

## 📅 Geliştirme Süreci

- **Metodoloji:** Scrum (Agile)
- **Sprint Süresi:** 1 hafta
- **Toplam Süre:** 8 sprint (8 hafta)
- **Görev Takibi:** [Trello Board](https://trello.com/b/Ephz3yhd/smartscheduler-devarchitechs)
- **Daily Standup:** Her gün 10:00 (Discord)

## 📚 Dokümantasyon

- [Mimari Tasarım](docs/ARCHITECTURE.md)
- [Veritabanı Şeması](docs/DATABASE_SCHEMA.md)
- [API Dokümantasyonu](http://localhost:5000/swagger) (uygulama çalışırken)

## 📝 Lisans

MIT License — Eğitim amaçlı geliştirilmiştir.

---

**SmartScheduler** by **DevArchitechs** • Yazılım Projesi Geliştirme • 2025-2026 Bahar
