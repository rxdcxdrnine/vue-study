import { createStore } from "vuex";
import newsApp from "./modules/newsApp";

export default createStore({
  modules: {
    newsApp,
  },
});
