import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
} from "../api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        console.log(response.data);
        context.commit("SET_NEWS", response.data);
        // state.news=response.data;
      })
      .catch(console.error());
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch(console.error());
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch(console.error());
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch(console.error());
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch(console.error());
  },
};
