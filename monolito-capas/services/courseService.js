const coursesRepo = require("../repositories/coursesRepo");

const create = (data) => {
  return coursesRepo.save(data);
};

const list = () => {
  return coursesRepo.getAll();
};

module.exports = { create, list };