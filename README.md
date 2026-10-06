# alexey-avdeev.com

Личный сайт Алексея Авдеева — CTO, архитектора, консультанта.

## Стек

- [Eleventy](https://www.11ty.dev/) 3.x (ESM)
- [Tailwind CSS](https://tailwindcss.com/) 4.x
- Nunjucks-шаблоны
- Статический выход в `_site/`

## Команды

```bash
# Установка зависимостей
npm install

# Сборка продакшен-версии
npm run build

# Локальный сервер для разработки
npm start
```

## Структура

- `src/` — исходники сайта
  - `index.njk` — главная
  - `talks.njk` — страница докладов
  - `404.njk` — страница 404
  - `sitemap.njk` — `sitemap.xml`
  - `_includes/` — повторяющиеся блоки
  - `_layouts/` — шаблоны страниц
  - `_data/` — данные (site.js, talks.js)
  - `styles/main.css` — стили
- `_site/` — собранный сайт (не коммитится)

## Деплой

Репозиторий `avdeev/avdeev.github.io` — GitHub Pages user site. `master` публикуется автоматически. Рабочая ветка redesign-итераций — `redesign`.
