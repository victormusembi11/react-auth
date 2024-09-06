# React/Next Authentication & Authorization with JWT

This is a simple project to demonstrate how to implement authentication and authorization in a React/Next.js application using JWT.

## Backend

Create a `.env` file in the `backend` directory with the following content:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dbname
JWT_SECRET="your-secret"
```

Then run the following commands:

```bash
cd backend
npm install
npx prisma generate
npm run dev
```

## React Frontend

Create a `.env.local` file in the `frontend` directory with the following content:

```bash
NEXT_PUBLIC_API_URL="http://localhost:5000"
```

Then run the following commands:

```bash
npm install
npm run dev
```

## Next.js Frontend

Create a `.env.local` file in the `nextjs-implementation` directory with the following content:

```bash
NEXT_PUBLIC_API_URL="http://localhost:5000"
```

Then run the following commands:

```bash
cd nextjs-frontend
npm install
npm run dev
```
