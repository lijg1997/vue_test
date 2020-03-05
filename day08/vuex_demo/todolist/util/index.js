export default {
  get(name, def) {
    let oldData = localStorage.getItem(name);
    return oldData ? JSON.parse(oldData) : def;
  },
  set(name, val) {
    localStorage.setItem(name, JSON.stringify(val));
  }
};
