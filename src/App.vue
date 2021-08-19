<template>
  <div>
    <ais-instant-search
      :search-client="searchClient"
      index-name="products_with_postcodes"
    >
      <Header @showFederatedSearch="showFederatedSearchMethod" />
      <HomePage v-if="!getCatOne && !getCatTwo" />
      <CatOne v-if="getCatOne" />
      <CatTwo v-if="getCatTwo" />
      <Modal v-if="getShowModal" />
    </ais-instant-search>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "@/components/HomePage";
import Modal from "@/components/Modal";
import CatOne from "@/components/CatOne";
import CatTwo from "@/components/CatTwo";
import { mapGetters } from "vuex";
import algoliasearch from "algoliasearch/lite";

export default {
  components: {
    Header,
    HomePage,
    Modal,
    CatOne,
    CatTwo,
  },
  data() {
    return {
      showFederatedSearch: true,
      searchClient: algoliasearch(
        "L2A9XHB3DS",
        "fef9f6782afb37dde429edf39f555a1b"
      ),
    };
  },
  methods: {
    showFederatedSearchMethod(value) {
      this.showFederatedSearch = value;
    },
  },
  computed: {
    ...mapGetters("HeaderModule", [
      "getShowFederatedSearch",
      "getShowModal",
      "getCatTwo",
      "getCatOne",
    ]),
  },
};
</script>

<style lang="scss">
body{
  background-color: #F7F7F7;
}
</style>
