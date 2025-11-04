import fs from "fs";
import path from "path";

const dbPath = path.resolve("src/config/db.json");

export const readDb = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};

export const writeDb = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};
