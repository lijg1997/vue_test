export default {
  get(name, def) {
    let oldListArr = JSON.parse(localStorage.getItem(name));
    return oldListArr ? oldListArr : def;
  },
  set(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }
};
