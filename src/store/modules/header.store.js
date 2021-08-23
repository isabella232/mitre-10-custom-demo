const HeaderModule = {
  namespaced: true,
  state: {
    catOne: false,
    searchVisible: false,
    catTwo: false,
    showFederatedSearch: false,
    showModal: false,
    reset: false,
  },
  getters: {
    getShowFederatedSearch(state) {
      return state.showFederatedSearch;
    },
    getShowModal(state) {
      return state.showModal;
    },
    getCatOne(state) {
      return state.catOne;
    },
    getCatTwo(state) {
      return state.catTwo;
    },
    getReset(state){
      return state.reset
    }
  },
  actions: {
    logoFunction({ commit }) {
      commit("LOGO_FUNCTION");
    },
    catTwoFunction({ commit }) {
      commit("CAT_TWO_FUNCTION");
    },
    catOneFunction({ commit }) {
      commit("CAT_ONE_FUNCTION");
    },
    svgClick({ commit }) {
      commit("SVG_CLICK");
    },
    searchNewQuery({ commit }) {
      commit("SEARCH_NEW_QUERY");
    },
    closeModal({ commit }) {
      commit("CLOSE_MODAL");
    },
  },
  mutations: {
    LOGO_FUNCTION(state) {
      state.catOne = false;
      state.searchVisible = false;
      state.catTwo = false;
      state.showModal = false;
      state.showFederatedSearch = false;
      state.reset = true;
    },
    CAT_TWO_FUNCTION(state) {
      state.catOne = false;
      state.searchVisible = false;
      state.catTwo = true;
      state.showFederatedSearch = false;
      state.showModal = false;
      state.reset = false;
    },
    SVG_CLICK(state) {
      state.showFederatedSearch = !state.showFederatedSearch;
      state.catTwo = false;
      state.catOne = false;
      state.showModal = !state.showModal;
      state.reset = false;
    },
    CAT_ONE_FUNCTION(state) {
      state.catOne = true;
      state.searchVisible = false;
      state.catTwo = false;
      state.showFederatedSearch = false;
      state.showModal = false;
      state.reset = false;
    },
    SEARCH_NEW_QUERY(state) {
      state.showFederatedSearch = !state.showFederatedSearch;
      state.showModal = !state.showModal;
      state.catTwo = false;
      state.catOne = true;
      state.reset = false;
    },
    CLOSE_MODAL(state) {
      state.showFederatedSearch = false;
      state.showModal = false;
    },
  },
};

export default HeaderModule;
