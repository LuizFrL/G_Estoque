# Como funciona para rodar a API
asd

## Components

A arquitetura do projeto G Estoque - Back End, envolve 2 componenetes:

### FeedBack

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
vá em [Como funciona para rodar a API](#Como-funciona-para-rodar-a-API).
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
metodos, vá em [Como funciona para rodar a API](#Como-funciona-para-rodar-a-API).
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

### Estoque

---