import Sequelize from "sequelize";

export const sequelize = new Sequelize("marconflex", "postgres", "9014", {
  host: "localhost",
  dialect: "postgres",
});
