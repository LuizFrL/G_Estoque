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
projeto, para fazer isso, vamos usar o arquivo `requirements.txt` que contem todas as 
versões das bibliotecas do projeto, para realizar esse feito, certifique-se de 2 coisas
- 1º Esteja com seu ambiente virtual ativado.
- 2º Esteja no mesmo diretorio que o arquivo `requirements.txt`.

Depois de verificar as condições mencionadas a cima, voce deve executar o comando para 
instalar as dependencias do projeto, no caso:

`pip install -r .\requirements.txt`

Pronto, dessa forma o projeto G_Estoque esta pronto para rodar localmente no seu computador,
so temos que rodar um comando agora, para subir a API localmente:

`python manage.py runserver`

Novamente, é necessario estar no mesmo diretorio em que o arquivo `requirements.txt`
se encontra.
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
O core da API, depois de ela estar rodando localmente no seu computador na porta 8000
Vamos usar durante o projeto, uma variavel que referencie a nossa URL padrão, no casso
como a nossa URL padrão para acessar a api é `http://localhost:8000`, vamos atribuir esse valor a
`base_url`, portanto, toda vez que ver nessa explicação a menção a `base_url` estamos dizendo 
`http://localhost:8000`.

Tendo isso entendido, vamos dar sequencia aos métodos!

Temos 4 metodos padões na API, `GET`, `POST`, `PUT` e `DEL` onde respectivamente, serverem 
para, ver os dados do endpoint, adicionar dados no endpoint, atualizar dados do endpoint e 
deletar dados do endpoint.

### GET
O metodo `GET` deve ser usado quando temos a necessidade de requisitar os dados do banco
daquele endpoint, por exemplo:
`GET -> base_url/algum_endpoint`

#### Filtros
> **_NOTE:_** Não são todos os endpoints que possuem todas as filtragens, isso vai ser
> especificado no **proprio endpoint**.

O metodo `GET` é o qual temos disponivel a filtragem.

A filtragem é uma das ferramentas mais poderosas da nossa API. 

Para usalas, devem ser especificados a partir de parametros na requisição, e como fazemos 
isso?

É bem fácil, apenas devemos adicionar `?` na nossa requisição e passar os parametros de 
filtragem, como exemplo, temos a seguinte requisição:

`base_url/algum_endpoint?algum_campo=alguma_coisa`

Diante dela, temos as seguintes filtragens.

##### Exact
A padrão de todos os elementos, serve para quando quer ter o retorno de um dado exatamente 
idêntico ao desejado, devemos pegar o nome do campo e simplesmente colocar o `=` e
depois o valor que voce quer, no caso, a requisição ficaria assim:

`base_url/algum_endpoint?nome_do_campo=teste`

essa requisição, retornaria o seguinte codigo em um pseudo endpoint:

````
[
  {
    "id": 1,
    "nome_do_campo": "teste"
  }
]

````

Não se engane, essa requisição pode ser feita tanto para campos numericos tanto para
campos de texto, siga um exemplo de consulta a um campo numerico por exemplo, no caso 
de consultar um numero exato em um campo `valor`:

`base_url/algum_endpoint?valor=34`

Retornara o seguinte resultado:

```
[
  {
    "id": 1,
    "valor": 34
  }
]
```

> **NOTE** O campo pode ser inteiro ou decimal, não faz diferença!
### Components

A arquitetura do projeto G Estoque - Back End, envolve 2 componenetes:

#### FeedBack

Dentro de feedback, possuimos 2 models responsavel pela lógica dos nossos clientes, onde, são elas:
- `FeedbackTypeModel`: Model responsavel apenas por referenciar a chave estrangeira em `FeedbackModel`,
possui 2 campos, `id`, gerado automaticamente pelo django para cada item adicionado e `type`, referente ao 
tipo de feedback que podemos receber, até então, podemos definir alguns tipos de feednacks, são eles: 
    - Opiniao
    - Critica
    - Sugestao
    - Duvida
      - O caminho que referencia essa Model, está em `base_url/feed-type`, possuindo todas as 
operações padrão de uma API Rest: `Get`, `Post`, `Put` e `Del` onde são respectivamente, 
ter o retorno dos `types` do banco, adicionar novos `types` no banco, alterar algum campo 
dentro de `types`(indisponível alterar o campo gerado automaticamente pelo Django, o ID) e 
deletar algum item, para saber como usar esses metodos, 
vá em [Funcionamento](#Funcionamento).
      - Os Objetos retornados pelo get são uma lista `types` -> GET `base_url/feed-type`:
```
[
  {
    "id": 1,
    "type": "duvida"
  },
  {
    "id": 2,
    "type": "sugestao"
  },
  {
    "id": 3,
    "type": "critica"
  },
  {
    "id": 4,
    "type": "opiniao"
  }
]
````
- `FeedbackModel`: Model responsável por armazenar todas as informações necessárias para
termos o Feedback do usuário, no caso, são 4 campos, `id`, gerado automaticamente na criação 
de algum item, `email`, que referencia o email do cliente que reportou o feedback, `feedback`
que em si representa o que o cliente quer nos dizer e por último o `type_id`, que precisa 
existir dentro de `FeedbackTypeModel`, ela serve para dizer qual é o tipo de feedback que 
iremos receber.
  - O caminho que referencia esse endpoint está em `base_url/feedback`,  possuindo 
todas as operações padrão de uma API Rest: `Get`, `Post`, `Put` e `Del` onde são 
respectivamente, ter o retorno dos feedbacks do banco, adicionar novos feedbacks no banco, 
alterar algum campo dentro de feedback (indisponível alterar o campo 
gerado automaticamente pelo Django, o ID) e deletar algum item, para saber como usar esses
metodos, vá em [Funcionamento](#Funcionamento).
  - Os Objetos retornados pelo get são uma lista `feedback` -> GET `base_url/feedback`:
````
[
  {
    "id": 1,
    "email": "Luiz@gmail.com",
    "feedback": "Eu gosto muittooo!",
    "type_id": {
      "id": 4,
      "type": "opiniao"
    }
  },
  {
    "id": 2,
    "email": "Luiz@gmail.com",
    "feedback": "Muito útil isso gostei, mas como faz para resolver o problema de gestao de biblioteca?",
    "type_id": {
      "id": 1,
      "type": "duvida"
    }
  }
]
````
 
---

#### Estoque

---