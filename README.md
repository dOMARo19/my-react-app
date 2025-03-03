# React + Vite

Це проект на React, створений за допомогою Vite.

Структура проекту
Copy
my-react-app/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
│ └── vite.svg
├── README.md
├── src/
│ ├── App.css
│ ├── App.tsx
│ ├── assets/
│ │ └── react.svg
│ ├── DisplayMessage.tsx
│ ├── index.css
│ ├── main.jsx
│ ├── Random.tsx
│ └── randomizer.ts
└── vite.config.js
Встановлення
Перейдіть до директорії проекту:
cd my-react-app

Встановіть залежності:
npm install

Запуск додатку
Щоб запустити сервер розробки, виконайте команду:
npm run dev

Ця команда запустить сервер розробки Vite і відкриє додаток у вашому браузері за замовчуванням.

Збірка додатку
Щоб зібрати додаток для продакшну, виконайте команду:
npm run build

Зібрані файли будуть розміщені в директорії dist.

Лінтінг коду
Щоб перевірити код за допомогою ESLint, виконайте команду:
npm run lint

Компоненти проекту
App.tsx
Головний компонент додатку. Він включає компоненти Random та DisplayMessage.

Random.tsx
Компонент, який генерує та відображає випадкове число. Він використовує функцію randomizer з файлу randomizer.ts.

DisplayMessage.tsx
Компонент без стану, який відображає повідомлення, передане через пропси.

randomizer.ts
Утилітна функція, яка генерує випадкове число від 0 до 100.
