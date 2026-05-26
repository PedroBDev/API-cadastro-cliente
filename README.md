# API Cadastro de Clientes

Projeto backend desenvolvido com NestJS e Prisma para gerenciamento de cadastro de clientes e seus endereços.

**Resumo:**
- **Stack:** Node.js, NestJS, TypeScript, Prisma, PostgreSQL
- **Localização do código:** pasta [api-cadastro-cliente](api-cadastro-cliente)

**Funcionalidades principais**
- CRUD de clientes (`Cliente`) com dados básicos (nome, email, telefone, idade)
- Associação opcional de `Endereco` com relação 1:1 ao `Cliente`

**Estrutura do projeto (resumida)**
- [api-cadastro-cliente](api-cadastro-cliente): código-fonte do backend
  - `src/cliente` - controller, módulo, serviço e DTOs
  - `src/endereco` - DTOs para endereço
  - `src/prisma` - provider do Prisma (`prisma.module.ts`, `prisma.service.ts`)
  - `prisma/schema.prisma` - modelo do banco e provider (PostgreSQL)
  - `prisma/migrations` - histórico de migrations geradas

**Pré-requisitos**
- Node.js (recomenda-se v18+)
- npm ou pnpm/yarn
- PostgreSQL acessível (local ou remoto)
- `DATABASE_URL` configurada em `.env` (ex.: `postgresql://user:password@host:port/database`)

Exemplo de `.env` (não comitar em repositórios públicos):

DATABASE_URL=postgresql://postgres:senha@localhost:5432/cadastro_clientes

Observação: o projeto usa Prisma com provider `postgresql` (veja `api-cadastro-cliente/prisma/schema.prisma`).

Instalação e execução (desenvolvimento)

1. Instalar dependências

```bash
cd api-cadastro-cliente
npm install
```

2. Gerar client do Prisma e aplicar migrations (desenvolvimento)

```bash
npx prisma generate
npx prisma migrate dev --name init
```

3. Rodar em modo desenvolvimento

```bash
npm run start:dev
```

Comandos úteis (disponíveis em `api-cadastro-cliente/package.json`)
- `npm run start` — inicia a aplicação (modo padrão)
- `npm run start:dev` — inicia com watcher (desenvolvimento)
- `npm run build` — compila TypeScript para `dist/`
- `npm run start:prod` — executa `node dist/main` (após build)
- `npm run test` — executa testes unitários com Jest
- `npm run test:e2e` — executa testes end-to-end
- `npm run lint` — roda ESLint e aplica correções automáticas

Banco de dados e Prisma
- Arquivo do schema: `api-cadastro-cliente/prisma/schema.prisma`
- Migrations: `api-cadastro-cliente/prisma/migrations/`
- Gerar client: `npx prisma generate`
- Criar/aplicar migrations (dev): `npx prisma migrate dev`
- Executar migrations em produção: `npx prisma migrate deploy`

Deploy
- Build: `npm run build`
- Start em produção: configurar `DATABASE_URL` no ambiente, garantir que migrations foram aplicadas (`prisma migrate deploy`) e rodar `npm run start:prod`.

Testes
- Unitários e E2E com Jest. Executar:

```bash
cd api-cadastro-cliente
npm test
```

Observações e boas práticas
- Mantenha o arquivo `.env` fora do controle de versão.
- Ao alterar modelos Prisma, gere uma nova migration e execute `prisma generate`.
- Use linters e formatadores (`npm run lint`, `npm run format`).

Contribuição
- Abra uma issue descrevendo a sugestão ou bug.
- Para mudanças maiores, crie uma branch com nome claro e envie um PR com descrição e testes quando aplicável.

Licença
- Arquivo `package.json` declara `UNLICENSED`. Ajuste se desejar uma licença explícita.

Contato
- Mantido pelo autor do repositório. Para dúvidas, abra uma issue.
