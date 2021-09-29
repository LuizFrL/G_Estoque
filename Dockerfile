FROM python:3.9.4
MAINTAINER Luiz Fernando O BRABO

COPY ./ ./api
WORKDIR ./api

RUN pip install -r requirements.txt

ENTRYPOINT python manage.py runserver 0.0.0.0:8000

EXPOSE 8000:8000