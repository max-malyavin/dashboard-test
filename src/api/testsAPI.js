import istance from "./instanceAPI";

export const testsAPI = {
  get() {
    return istance.get(`tests`);
  },
  getID(id) {
    return istance.get(`tests/${id}`);
  },
};
