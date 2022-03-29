### Pré-requisitos

Antes de começar, é preciso ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySQL](https://www.mysql.com/) ou através de container MySQL [DOCKER](https://hub.docker.com/_/mysql) e [INSOMNIA](https://insomnia.rest/download).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Exemplo de consumo da Endpoint /api/auth (POST)
```bash
{
	"email":"marcos@marcos.com",
	"password": "1234"
}
```

### Exemplo de consumo da Endpoint /api/usuarios (POST)
```bash
{
	"name": "marcos",
	"email": "marcos@marcos.com.br",
	"password": "1234"
}
```

### Exemplo de consumo da Endpoint /api/usuarios/:idUsuario (PUT)
```bash
{
	"name": "teste",
	"email": "teste@teste.com.br",
	"password": "12245"
}
```

### Exemplo de consumo da Endpoint /api/usuarios/:idUsuario/produtos (POST)
```bash
{
	"titulo" : "Iphone 12",
	"descricao": "Iphone 23 Pro max 512gb",
	"preco": 13221.23,
	"categoria": "123"
}
```


### Exemplo de consumo da Endpoint /api/usuarios/:idUsuario/produtos/:idProduto (PUT)
```bash
{
	"titulo" : "Iphone 12",
	"descricao": "Iphone 23 Pro max 512gb",
	"preco": 13221.23,
	"categoria": "celular"
}
```

### 🎲 Rodando a aplicação

```bash

# Instale as dependências
$ docker-compose up --build 

# O servidor inciará na porta:3000 - acesse http://localhost:3000 
```

No projeto possui o arquivo .xml do insomnia. Caso queira, poderá importar e ter todas as rotas já.

O token gerado no auth será utilizado no bearer token.