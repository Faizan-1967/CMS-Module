import knex from "knex";
import knexfile from "~/db/knexfile.cjs;

const db = knex(knexfile.development);

export default db;