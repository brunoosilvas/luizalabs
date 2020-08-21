# Desafio Luizalabs

## Primeiro desafio

### Estratégia

Adotei as seguintes tecnologias para a solucionar o problema proposto:

- Desenvolvi uma API REST em [nodejs](https://nodejs.org/en/) para o **backend** utilizando [express](https://expressjs.com/)
- Para o **frontend** a escolha foi o [angular](https://angular.io/) utilizando a biblioteca de componentes [primeng](https://www.primefaces.org/primeng/)
- E o [docker](https://www.docker.com/) para executar as aplicações

### Fundamentos

Utilizei a arquitetura API Rest, beneficiando de padrões como Repository e DI (Dependency Injection), baseando-se na metodologia TDD (Test-Driven Development) e utilização de SPA (Single-Page Application) para a camada de apresentação.

### Testes e validação do modelo

Foi utilizado o [mocha](https://mochajs.org/)  para fazer a cobertura de testes na API. O código pode ser encontrado aqui:

```
api/tests/CepsTest.js
```

Os testes contemplam:
- CEP válido e inválido
- Busca de todos os CEPS
- Busca de CEP específico
- Busca de CEP com profundidade, substituindo zero da direita para esquerda até sua localização na base

A API só pode ser executada se toda a cobertura de testes for concluída com sucesso.

### Executando as aplicações

É necessário que as portas **80** e **81** estejam disponíveis.

- Instale o [git](https://git-scm.com/downloads)
- Instale o [docker](https://docs.docker.com/docker-for-windows/install/)

Clone o repositório do **git** para seu local:

```bash
git clone https://github.com/brunoosilvas/luizalabs.git
```

Execute os containers utilizando **docker-compose**

```bash
docker-compose up --build -d
```

Endereço para o acesso da camada de apresentação

```
http://localhost
```

Endereço para o acesso da API

```
http://localhost:81
http://localhost:81/ceps
http://localhost:81/ceps/:cep
```

## Segundo desafio

De maneira sucinta o protocolo HTTP funciona através de requisição e resposta. Quando no browser é requisitado uma URL, é aberta uma conexão utilizando os protocolos TCP/IP para direcionar a solicitação ao servidor, que por sua vez recebe a requisição, processa e devolve uma resposta para o cliente.

O processo é realizado da seguinte maneira:

1. A requisição é composta por linha de pedido, cabeçalhos e mensagem:
   - O pedido possui metódos (ações), URI do recurso e versão do protocolo
   - O cabeçalho é utilizado para informações adicionais, alguns desses cabeçalhos pode definir o comportamento de resposta do servidor
   - Por último a mensagem da requisição (dados de formulários)

2. A resposta é composta por linha de status, cabeçalhos e mensagem:
   - versão do protocolo, código do status e o texto do status
   - Assim como na requisição o servidor também envia cabeçalhos de respostas
   - Por último a mensagem da resposta (html, imagem, pdf e etc)

Podemos destacar algumas informações citadas acima, os metódos que são utilizados para a requisição e o código de status. Através dessas informações podemos direcionar o fluxo de nossas aplicações.

Assim fechamos o ciclo de uma requisição e resposta utilizando o protocolo HTTP. Podemos considerar que o protocolo prioriza a semântica de seus recursos, e as applicações podem se beneficiar dos recursos disponíveis da especificação.
