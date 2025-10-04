let students = [];

const save = (data) => {
  students.push(data);
  return data;
};

const getAll = () => {
  return students;
};

module.exports = { save, getAll };
