Кулинарная книга:

Установка и запуск среды разработки backend Django

django: 4.2.3

Затем инсталлируем необходимые для работы проекта пакеты:
pip install djangorestframework
pip install django-cors-headers
pip install drf-yasg
pip install pillow

В консоли переходим в директорию проекта и стартуем проект:
python manage.py runserver

API проекта будет доступно по адресам:
http://127.0.0.1:8000/swagger/  swagger
http://127.0.0.1:8000/redoc/ redoc
http://127.0.0.1:8000/json/ Пример json (компонент swagger)
http://127.0.0.1:8000/admin/  Вход в админку для добавления блюд и категорий


Установка и запуск среды разработки frontend React + Webpack
Клонировать репозиторий
Восстановить модули: npm install
Запуск СЕРВЕРА DevServer: npm start

