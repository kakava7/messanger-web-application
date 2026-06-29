# 💬 Messenger Web Application

Веб-мессенджер с поддержкой каналов, поиском пользователей и emoji — дипломный проект.

## 🚀 Возможности

- Регистрация и авторизация пользователей с хешированием паролей (bcrypt)
- Создание, редактирование и удаление каналов
- Отправка сообщений в реальном времени
- Поиск пользователей и каналов
- Поддержка emoji
- Приглашение пользователей в каналы

## 🛠 Стек технологий

**Frontend**
- React 18
- Stream Chat React (UI-компоненты мессенджера)
- Axios
- Universal Cookie

**Backend**
- Node.js + Express
- Stream Chat API (real-time обмен сообщениями)
- bcrypt (хеширование паролей)
- crypto (генерация userId)
- dotenv, cors

## 📁 Структура проекта

```
messenger-web-application/
├── client/               # React-приложение
│   └── src/
│       ├── components/   # Auth, ChannelContainer, ChannelSearch, CreateChannel и др.
│       └── App.jsx
└── server/               # Node.js + Express API
    ├── controllers/
    │   └── auth.js       # Логика регистрации и входа
    ├── routes/
    │   └── auth.js
    └── index.js
```

## ⚙️ Запуск локально

### Требования
- Node.js 16+
- Аккаунт [Stream Chat](https://getstream.io/)

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/kakava7/messanger-web-application.git
cd messanger-web-application
```

**Сервер:**
```bash
cd server
npm install
```

Создать файл `.env` в папке `server`:
```
STREAM_API_KEY=your_api_key
STREAM_API_SECRET=your_api_secret
STREAM_APP_ID=your_app_id
```

```bash
npm run dev
```

**Клиент:**
```bash
cd client
npm install
npm start
```

Приложение откроется на `http://localhost:3000`

## 📸 Скриншоты

> *(можно добавить скриншоты интерфейса)*

## 👤 Автор

**Седунов Иван** — [GitHub](https://github.com/kakava7)
