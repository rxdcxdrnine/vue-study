import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state: {
    // news: [],
    // jobs: [],
    // ask: [],
    user: {},
    item: {},
    list: [],
  },
  getters: getters,
  actions: actions,
  mutations: mutations,
};
