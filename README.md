## eryazilim-saas

Minimal NestJS service that exposes a health endpoint and a simple database connectivity check through Prisma.

## Prerequisites

- Node.js 20+
- npm 10+
- A reachable PostgreSQL database

## Environment

Create an `.env` file in the project root with your database connection string:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public"
```

> The Prisma schema expects a PostgreSQL database. You can swap providers or connection parameters as needed.

## Installation

```bash
npm install
```

## Database

Generate the Prisma client and run migrations (if you add models):

```bash
npx prisma generate
npx prisma migrate deploy
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production build + run
npm run build
npm run start:prod
```

Once the server is up, the following routes are available:

- `GET /` — returns `"Hello World!"`
- `GET /test-db` — attempts a `SELECT NOW()` against the configured database

## Testing

```bash
npm test
```

The unit tests mock Prisma, so no database is required.

## Troubleshooting

- Ensure `DATABASE_URL` is set before launching the app; otherwise the Prisma client will fail to connect.
- When using a remote database, verify that your IP has access and that SSL requirements are satisfied (add `?sslmode=require` if necessary).

## License

MIT
