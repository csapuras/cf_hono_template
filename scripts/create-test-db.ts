import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const createTestDB = () => {
  const sqlite = new Database("test.sqlite");
  const db = drizzle(sqlite);
  migrate(db, { migrationsFolder: "./src/server/db/migtrations" });
  console.log("Test database created and migrated");
};

createTestDB();
