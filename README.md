# App deployed on below given link

Link => [https://fitflex.site](https://fitflex.site)

![FitEats Banner Image](https://raw.githubusercontent.com/dasarwarshubham/gym-ecommerce-website/master/public/fitflex-og-card.png)

***

## To run this project on localhost follow the given commands

1. Clone this repository

2. Install
    | Software      | Version       |
    | ------------- |:-------------:|
    | Python        | v3.10.12      |
    | NodeJS        | v12.22.9      |
    | PostgresSQL   | v14.9         |
    | Redis Server  | v6.0.16       |


3. Install required python libraries and node modules from requirements.txt and package.json respectively

4. Add .env file at root of your project and add he below settings to it.
    ```
    DJANGO_APP_URL=http://127.0.0.1:8000
    REACT_APP_URL=http://127.0.0.1:3000
    DJANGO_ADMIN_URL_SECRET=[any random uuid for secret admin url]
    DJANGO_SETTINGS_MODULE=backend.settings.dev
    DJANGO_LOG_LEVEL=DEBUG
    SECRET_KEY=[secret key for django app]
    DATABASE=django.db.backends.postgresql_psycopg2
    DATABASE_NAME=[your database name]
    DATABASE_USER=[your postgres username]
    DATABASE_PASSWORD=[your postgres user password]
    DATABASE_HOST=127.0.0.1
    DATABASE_PORT=5432
    HOST_EMAIL=[host email id]
    HOST_PASSWORD=[host email password]
    REDIS_DB_URL=redis://127.0.0.1:6379
    ```

5. To run django app, Open new terminal and run this command 
    
    ```
    python manage.py makemigration accounts core
    python manage.py migrate
    python manage.py createsuperuser
    python manage.py runserver
    ```
    goto => http://127.0.0.1:8000/

6. To run react app, Open new terminal and run this command

    and goto => http://127.0.0.1:3000/ OR https://127.0.0.1:3000/

    ```
    npm start
    ```

    OR
    ```
    npm run secure-start
    ```

    for react app on https, add 'frontend.crt' and 'frontend.key' and store it in 'certs' folder at the root.

    ([Click here](https://create-react-app.dev/docs/using-https-in-development/)) to read about HTTPS in development mode in react.

    ([Follow this tutorial to generate ssl certificate](https://www.baeldung.com/linux/crt-key-files))

7. open two or more terminal and run each command in separate terminal to make multiple celery worker

    ```
    celery -A backend worker --loglevel=INFO -n worker1 -E
    celery -A backend worker --loglevel=INFO -n worker2 -E
    celery -A backend worker --loglevel=INFO -n worker3 -E
    ```
    For Task Scheduling and task monitoring
    1. celery beat process (task scheduling)
        ```
        celery -A backend beat --loglevel=info
        ```

    2. celery monitoring (http://localhost:5555)
        ```
        celery -A backend flower
        ```

8. For server load testing use locust
    ```
    locust -f  locustfiles\browse_products.py
    ```

***
## For any queries regarding this project or running locally or project deployment on vps server you can email me at *dasarwarshubham01@gmail.com*