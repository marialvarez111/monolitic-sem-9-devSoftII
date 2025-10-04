const studentsRepo = require("../repositories/studentsRepo");

const create = (data) => {
  return studentsRepo.save(data);
};

const list = () => {
  return studentsRepo.getAll();
};

module.exports = { create, list };
