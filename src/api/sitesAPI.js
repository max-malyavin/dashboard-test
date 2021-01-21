import istance from "./instanceAPI";

export const sitesAPI = {
  get() {
    return istance.get(`sites`);
  },
};
