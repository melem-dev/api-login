# api-login

Descrição: Uma API de autenticação utilizando banco de dados e jsonwebtoken

### Lista de tarefas e atualizações

- [x] Instalar dependências.
  - [x] Express
  - [x] Cors
  - [x] Mongoose
  - [x] Dotenv
  - [x] jsonwebtoken
- [x] Inicializar servidor express
- [ ] Conexão com o Mongodb cloud
- [x] Utils
  - [x] JsonWebToken
- [x] Middlewares
  - [x] Auth
- [x] Roteamento
  - [x] GET /registry
  - [x] GET /login
  - [x] GET /validate
  - [x] GET /recovery
  - [x] PUT /recovery
- [x] Modelos
  - [x] User
    - Username
    - Password
    - Email
    - Token
- [ ] Controladores
  - [ ] Auth
    - [ ] Login
    - [ ] Validate
    - [ ] GetRecovery
    - [ ] SetRecovery
  - [ ] User
    - [ ] Create