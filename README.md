# Todo List App with React & Redux Toolkit

Деплой на [GitHub Pages](https://robertd2000.github.io/todo-redux/) для теста.

Простое и функциональное приложение для управления задачами с возможностью перетаскивания.

## 🚀 Основные возможности

- Добавление новых задач
- Отметка задач как выполненных
- Удаление задач
- Редактирование текста задач
- Drag-and-Drop для изменения порядка
- Автосохранение в LocalStorage
- Фильтрация по статусу (все/активные/завершенные)

## 🛠 Технологии

- **React** (v18+)
- **TypeScript**
- **Redux Toolkit** (управление состоянием)
- **React DnD** (перетаскивание)
- **Feature-Sliced Design** (архитектура)
- **Vite** (сборка)

## 📂 Структура проекта (FSD)

```
src/
├── app/ # Инициализация приложения
│ ├── store.ts # Redux store
│ └── providers.tsx # Провайдеры
│
├── features/ # Фичи приложения
│ └── todos/ # Фича задач
│ ├── model/ # Redux логика
│ ├── lib/ # Вспомогательные функции
│ └── ui/ # UI компоненты
│
├── widgets/ # Переиспользуемые виджеты
│ └── TodoItem/ # Компонент задачи
│ ├── DraggableTodo.tsx
│ └── TodoItem.tsx
│
├── shared/ # Общие модули
│ ├── ui/ # UI-кит (кнопки, инпуты)
│ └── lib/ # Утилиты
│
└── pages/ # Страницы
└── HomePage/ # Главная страница
```

## 🖥 Установка и запуск

Клонировать репозиторий:

```bash
git clone https://github.com/robertd2000/todo-redux.git
cd todo-redux

```

Установить зависимости:

```bash
npm install
```

Запустить development сервер:

```bash
npm run dev
```

Собрать production версию:

```bash
npm run build
```
