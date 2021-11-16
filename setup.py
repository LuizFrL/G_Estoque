from setuptools import setup, find_packages

setup(
    name='G Estoque app',
    packages=find_packages(),
    install_requires=[
        'asgiref==3.4.1',
        'certifi==2021.10.8',
        'charset-normalizer==2.0.7',
        'Django==3.2.7',
        'django-cors-headers==3.8.0',
        'django-filter==21.1',
        'djangorestframework==3.12.4',
        'djangorestframework-simplejwt==5.0.0',
        'idna==3.3',
        'PyJWT==2.3.0',
        'pytz==2021.1',
        'requests==2.26.0',
        'sqlparse==0.4.2',
        'urllib3==1.26.7',
        'drf-yasg==1.20.0'
    ],
    author='Luiz Fernando Rodrigues Lemos',
    author_email='luizfernandorole@sempreceub.com'
)
