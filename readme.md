Кулинарная книга:

Клонируем репозитарий https://github.com/kizaleks/foodbook_F4.git

Установка и запуск среды разработки backend Django
Переходим в папку backend
Запускаем команду pip install -r requirements.txt

В консоли переходим в директорию проекта cookbook и стартуем проект:
python manage.py runserver

API проекта будет доступно по адресам:
+ http://127.0.0.1:8000/swagger/  swagger
+ http://127.0.0.1:8000/redoc/ redoc
+ http://127.0.0.1:8000/json/ Пример json (компонент swagger)
+ http://127.0.0.1:8000/admin/  Вход в админку для добавления блюд и категорий


Установка и запуск среды разработки frontend 

+ Перейти в папку Frontend
+ Восстановить модули: npm install
+ Запуск СЕРВЕРА DevServer: npm start

