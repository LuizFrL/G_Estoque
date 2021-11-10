# Front End - G Estoque

---

## Como rodar?
Para rodar tanto o front-end como o back-end é necessário ter o docker instalado.
Dê o clone no repositório e certifique-se de estar dentro de `public`, 
estando dentro de `public`, basta rodar o comando abaixo:

`docker-compose up -d`

Isso ira subir o front-end na porta `3002` e o back-end ná `8000`, ambos com o prefixo 
`http://localhost:`, logo, caso queira acessar o template `estoque` da aplicação, deve-se
acessar `http://localhost:3002/estoque`.

A tecnologia docker Volume esta ativa, ou seja, toda a alteração que fizer no código
ira refletir no front-end.
---