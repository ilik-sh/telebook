const { Op } = require("sequelize");
const { Sequelize } = require("../db");
const { Entry, Employee } = require("../models/models");

const getEntriesForEmployeeByDate = async (employeeId, date) => {
  const entryList = await Entry.findAll({
    where: {
      employeeId: employeeId,
      date: date,
    },
  });
};

const getEntriesForEmployeeByMonth = async (employeeId, month, year) => {
  const entryList = await Entry.findAll({
    include: { model: Employee, attributes: ["name"] },
    where: {
      employeeId: employeeId,
      [Op.and]: [
        Sequelize.where(
          Sequelize.fn("date_part", "month", Sequelize.col("date")),
          month
        ),
        Sequelize.where(
          Sequelize.fn("date_part", "year", Sequelize.col("date")),
          year
        ),
      ],
    },
    order: [["date", "ASC"]],
  });
  return entryList;
};

module.exports = {
  getEntriesForEmployeeByMonth,
  getEntriesForEmployeeByDate,
};
