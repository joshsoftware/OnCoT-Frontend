const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

const getItem = (key) => localStorage.getItem(key);

export default {
  setItem,
  getItem,
};
