# Como funciona para rodar a API
## Instalação
Os recursos da G Estoque podem ser adquiridos de 2 formas, uma pelo proprio git e outra pelo 
docker, sinceramente, a parte de uso pelo docker é a mais **recomendada**.

--- 

### Usando o GIT
A forma usada para rodar a API localmente pelo git é a seguinte, deve-se primeiramente
clonar o repositorio localmente, desta forma.

`git clone https://github.com/LuizFrL/G_Estoque.git`

Após a clonagem do repositorio, se direcione para a pasta contendo os itens da api,
no caso, no mesmo diretorio que deu o comando de cima, dê o seguinte comando:

`cd G_Estoque`

Esse comando fara com que entre dentro da pasta onde contem a API.

É recomendado que crie um ambiente virtual para poder rodar a api, 
assim seu projeto fica separado dos residentes em seu python root. Para isso
acesse o tutorial [aqui](https://docs.python.org/pt-br/3/tutorial/venv.html).

Apos ativar seu ambiente virtual no terminal, você precisa instalar as dependencias do
projeto, para fazer isso, vamos usar o arquivo `setup.py` que contem todas as 
versões das bibliotecas do projeto, para realizar esse feito, certifique-se de 2 coisas
- 1º Esteja com seu ambiente virtual ativado.
- 2º Esteja no mesmo diretorio que o arquivo `setup.py`.

Depois de verificar as condições mencionadas a cima, voce deve executar o comando para 
instalar as dependencias do projeto, no caso:

`pip install -e .`

Pronto, dessa forma o projeto G_Estoque esta pronto para rodar localmente no seu computador,
so temos que rodar um comando agora, para subir a API localmente:

`python manage.py runserver`


Novamente, é necessario estar no mesmo diretorio em que o arquivo `setup.py`
se encontra.

Caso voce não queira instalar a aplicação ou achou o processo um tanto quanto complicado, dentro 
do root do projeto, você pode executar o comando:

`docker-compose run -d` 

Caso tenha o docker instalado na sua máquina, esse comando é equivalente aos comandos 
listados a baixo.

---
### Usando Docker

Para rodar usando o Docker, certifique-se de que o Docker esteja corretamente instalado no
seu computador.

A API esta na imagem do DockerHub, 983515929/g_estoque.

Para rodar localmente, use o comando:

`docker run -d -p 8000:8000 983515929/g_estoque`

E pronto, a API na versão mais recente e estável ja esta rodando na sua máquina.

---

## Funcionamento

Acessar a rota base da aplicação (`/`) para ter acesso à documentação da
API. 