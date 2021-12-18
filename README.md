# ORM_nodejs_sequelize

### 💻 Sobre o projeto

ORM_nodejs_sequelize é um projeto que foi realizado ao longo do curso ORM com NodeJS: API com Sequelize e MySQL da alura.

O projeto baseia-se na criação de uma API de escola de inglês.

### Pré-requisitos

Antes de começar, é preciso ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySQL](https://www.mysql.com/) ou através de container MySQL [DOCKER](https://hub.docker.com/_/mysql) e [INSOMNIA](https://insomnia.rest/download).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Exemplo de consumo da Endpoint /pessoas
```bash
{
	"nome": "",
	"ativo": true,
	"email": "",
	"role": ""
}
```

### Exemplo de consumo da Endpoint /niveis
```bash
{
	"descr_nivel": ""
}
```

### Exemplo de consumo da Endpoint /matricula
```bash
{
	"status": "",
	"turma_id": 
}
```

### Exemplo de consumo da Endpoint /turmas
```bash
{
	"data_inicio": "",
	"nivel_id": "",
	"docente_id": "",
}
```

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/Ramos03/ORM_nodejs_sequelize

# Instale as dependências
$ yarn      #yarn
$ npm i     #npm

# Execute as migrações
$ npx sequelize-cli db:migrate

# Execute os seeders
$ npx sequelize-cli db:seed:all

# Execute a aplicação
$ yarn start    #yarn
$ npm start     #npm

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

```