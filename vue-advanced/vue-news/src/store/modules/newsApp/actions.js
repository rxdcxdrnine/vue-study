import {
  // fetchAskList,
  // fetchJobsList,
  // fetchNewsList,
  fetchList,
  fetchItemInfo,
  fetchUserInfo,
  fetchListAsync,
} from "../../../api";

export default {
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => commit("SET_ASK", data))
  //     .catch((err) => console.error(err));
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => commit("SET_JOBS", data))
  //     .catch((err) => console.error(err));
  // },
  // FETCH_NEWS({ commit }) {
  //   fetchNewsList()
  //     .then((res) => {
  //       commit("SET_NEWS", res.data);
  //       return res;
  //     })
  //     .catch((err) => console.error(err));
  // },

  // promise
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
      .catch((err) => console.error(err));
  },
  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName)
      .then(({ data }) => commit("SET_USER", data))
      .catch((err) => console.error(err));
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItemInfo(itemId)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((err) => console.error(err));
  },

  // async
  async FETCH_LIST_ASYNC({ commit }, pageName) {
    const { data } = await fetchListAsync(pageName);
    commit("SET_LIST", data);
  },
};
