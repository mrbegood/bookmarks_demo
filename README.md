# Тестовое задание на реализацию приложения закладок

Создать минимальное приложение для закладок статей, где пользователь может:
- Добавлять закладку с названием и ссылкой
- Просматривать список сохранённых закладок
- Удалять закладку

## Запуск приложения

### Зависимости

- `docker`, `docker-compose`

Для запуска приложения необходимо установить docker и docker-compose удобным для вас способом


### Запуск приложения

Для запуска приложения, необходимо выполнить следующую команду из корневой директории репозитория

`docker-compose up`

Запущеное приложение будет достпно по адресу http://localhost:3000

## Что можно было бы улучшить/доработать

Вот некоторые функции которые можно было бы реазиловать при дальнейшем развитии приложения:

- функционал редактирования закладок
- фильтрация закладок по названию/url
- привязка хэштегов для категоризации закладок и возможность быстрой фильтрации по ним
- добавить поддержку PWA для установки приложения устройства
- фоновый парсинг содержимого url адресов закладок после добавления и сохранение кэша страниц для последующего доступа
- обработка ошибок HTTP статусов (4xx, 5xx) для graphql запросов
- адаптивный дизайн для мобильных устройств
