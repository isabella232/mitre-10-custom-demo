<template>
  <div>
    <!-- <SearchBox :hits="hits"/> -->
    <h3 class="federated-title">Products</h3>
    <div class="sort-and-stat">
      <ais-stats />
    </div>
    <ais-configure :hits-per-page.camel="12" />
    <ais-hits>
      <div
        class="hits-wrapper"
        slot="item"
        slot-scope="{ item }"
        @click="selectedProduct(item)"
      >
        <div class="image-wrapper">
          <img :src="item['img-Mitre10-300x300']" alt="" />
        </div>
        <div class="infos">
          <ais-highlight attribute="name" :hit="item" />
          <p v-if="item.nationalPrice">$ {{ item.nationalPrice }}</p>
          <p v-else>Minimum Amount: ${{ item.minAmount }}</p>
        </div>
      </div>
    </ais-hits>
  </div>
</template>
<script>
// import SearchBox from "@/components/SearchBox";
import { mapActions } from "vuex";
export default {
  name: "SearchPage",
  props: ["hits"],
  components: {
    // SearchBox,
  },
  methods: { ...mapActions("SearchModule", ["selectedProduct"]) },
};
</script>
g

<style lang="scss">
@import "@/assets/scss/variables/variables.scss";
@import "@/assets/scss/mixin.scss";
.searchPanel-results {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 3rem auto;
  position: relative;

  .filters-wrapper {
    width: 20%;
    will-change: width;
  }

  .hits-wrapper {
    width: 100%;
  }
}
//SORT BY and STATS

.sort-and-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  /* margin: -1rem auto 2rem auto; */
  .ais-Stats-text {
    color: $sixth-color;
    margin-left: 7em;
  }
}
.ais-SortBy-select {
  @include btn;
  .ais-SortBy-option {
    color: $sixth-color;
    @include title;
  }
}

//SEARCHRESULT
.ais-Hits {
  width: 90%;
  margin: 0 auto;
}
.ais-Hits-list {
  width: 80% !important;
  margin: 0 auto;
  @include hits-list;

  /* .ais-Hits-list {
    @include hit-list;
  } */
}

.ais-Hits-item {
  width: 95% !important;
  @include hit-list;
}

.searchPanel-results {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 3rem auto;
  position: relative;

  .filters-wrapper {
    width: 20%;
    will-change: width;
  }

  .hits-wrapper {
    width: 100%;
  }
}

.federated-title {
  margin-left: 9rem;
  margin-bottom: 1rem;
}
</style>
