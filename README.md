# Full-Stack Vite Boilerplate

A clean, ready-to-go full-stack boilerplate with Express.js backend, React frontend, and Drizzle ORM ready for both development (in-memory) and production (PostgreSQL).

## 🚀 Features

- **Express.js** server running on port 3000
- **React** frontend with Vite for fast development
- **Drizzle ORM** with PostgreSQL support (Neon)
- **In-memory database** for development (no setup required)
- **TypeScript** throughout the stack
- **Tailwind CSS** with shadcn/ui components
- **API-first design** with `/api` endpoints
- **Hot reload** for both frontend and backend
- **Ready to extend** - Add your schemas and routes easily

## 📁 Project Structure

```
├── src/                    # React frontend
│   ├── components/         # UI components
│   ├── pages/             # Page components
│   └── ...
├── server/                # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes/            # Modular API routes
│   │   ├── index.ts       # Route registry
│   │   ├── health.ts      # Health/status endpoints
│   │   ├── tasks.ts       # Task CRUD operations
│   │   └── ...            # Add new route modules here
│   ├── storage.ts         # Database layer
│   └── vite.ts           # Vite integration
├── shared/                # Shared types/schemas
│   └── schema.ts         # Drizzle schema definitions (add yours here)
└── drizzle.config.ts     # Drizzle configuration
```

## 🛠 Development

### Prerequisites
- Node.js 18+
- pnpm (recommended)

### Quick Start

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```

3. **Access your application**
   - Frontend: http://localhost:3000
   - API: http://localhost:3000/api/*

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Type check
- `pnpm db:push` - Push database schema (requires DATABASE_URL)

## 🗄 Database

### Development (In-Memory)
- No setup required
- Add your own data structures in `server/storage.ts`
- Data is reset on server restart

### Production (PostgreSQL)
1. Add your schemas in `shared/schema.ts`
2. Set `DATABASE_URL` environment variable
3. Run `pnpm db:push` to create tables
4. Server automatically switches to PostgreSQL

## 🌐 API Endpoints

### Built-in Endpoints
- `GET /api/health` - Server health check
- `GET /api/status` - Database status

### Add Your Own
Create new route modules in `server/routes/` and register them in `server/routes/index.ts`.

Your API endpoints will be available at `http://localhost:3000/api/*` once you create them.

## 🚀 Deployment

### Environment Variables

- `PORT` - Server port (default: 3000)
- `DATABASE_URL` - PostgreSQL connection string (optional for development)
- `NODE_ENV` - Environment (development/production)

### Production Build

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🧰 Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, TypeScript
- **Database**: Drizzle ORM, PostgreSQL (Neon), In-memory fallback
- **Build**: Vite, esbuild
- **Validation**: Zod
- **Development**: tsx, Hot reload

## 📝 Quick Start Guide

### 1. Add Your First Database Table

Edit `shared/schema.ts`:

```typescript
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Add Zod schemas
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

// Add TypeScript types
export type User = z.infer<typeof selectUserSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
```

### 2. Add Storage Methods

Edit `server/storage.ts`:

```typescript
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

// Uncomment and implement the methods in MemStorage class
```

### 3. Add New Route Module

Create `server/routes/users.ts`:

```typescript
import { Router } from "express";
import { storage, db } from "../storage";

const router = Router();

router.get("/users", async (_req, res) => {
  const users = await storage.getAllUsers();
  res.json(users);
});

router.post("/users", async (req, res) => {
  const userData = insertUserSchema.parse(req.body);
  const user = await storage.createUser(userData);
  res.status(201).json(user);
});

export default router;
```

### 4. Register Your Routes

Add to `server/routes/index.ts`:

```typescript
import userRoutes from "./users";

export async function registerRoutes(app: Express) {
  // ... existing routes
  app.use("/api", userRoutes);
}
```

### 5. For Production with PostgreSQL

```bash
# Set your database URL
export DATABASE_URL="postgresql://user:pass@host:port/dbname"

# Push your schema to the database
pnpm db:push

# Your app automatically switches to PostgreSQL!
```

## 🎯 Perfect for Kulp.AI

This boilerplate is specifically designed for Kulp.AI projects:

- **Free tier**: Uses in-memory database (no external dependencies)
- **Paid tier**: Seamless upgrade to PostgreSQL (just set DATABASE_URL)
- **No code changes required** when upgrading database
- **Modular routes** - AI agents can add features without cluttering files
- **API-first design** ready for AI-generated features
- **Modern stack** with excellent developer experience

---

**Ready to build something amazing!** 🚀

Start by adding your database schemas in `shared/schema.ts` and create new route modules in `server/routes/`.