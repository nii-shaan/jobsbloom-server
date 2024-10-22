import { Sequelize } from "sequelize";

function connectDatabase() {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "postgres"
    }
  )
  return sequelize;
}

export { connectDatabase }
