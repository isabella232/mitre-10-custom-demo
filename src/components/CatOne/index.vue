<template>
  <div class="search-page">
    <div class="hits-page">
      <Filters :showFilter="showFilter" />
      <div class="hits-wrapper">
        <div class="sort-and-stat">
          <ais-stats />
          <ais-configure :filters="filtersMethod()" :hits-per-page.camel="18" />
          <button
            v-if="getPersonnaSelected"
            @click="erraseFunction()"
            class="errase-button"
          >
            See all postal codes
          </button>
          <ais-clear-refinements />
          <ais-sort-by
            :items="[
              {
                value: 'products',
                label: 'Relevancy',
              },
              {
                value: 'products_price_desc',
                label: 'Price Desc',
              },
              {
                value: 'products_price_asc',
                label: 'Price Asc.',
              },
            ]"
          />
        </div>
        <transition name="fade">
          <ais-hits>
            <div
              @click="selectedProduct(item), svgClick()"
              class="hits-wrapper"
              slot="item"
              slot-scope="{ item }"
            >
              <div class="image-wrapper">
                <img :src="item['img-Mitre10-300x300']" alt="" />
              </div>
              <div class="infos">
                <ais-highlight attribute="name" :hit="item" />
                <p v-if="item.nationalPrice">$ {{ item.nationalPrice }}</p>
                <p v-else>Minimum Amount: ${{ item.minAmount }}</p>
                <!-- <p>{{ item.postalCodes[parseInt(getPersonnaSelected)] }}</p> -->
              </div>
            </div>
          </ais-hits>
        </transition>
        <ais-pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "catOne",
  data() {
    return {
      showFilter: true,
    };
  },
  components: {
    Filters,
  },
  methods: {
    showFiltersMethod() {
      this.showFilter = !this.showFilter;
    },
    filtersMethod() {
      if (this.getPersonnaSelected == "110") {
        return "postalCodes.110 > 0";
      }
      if (this.getPersonnaSelected == "112") {
        return "postalCodes.112 > 0";
      }
      if (this.getPersonnaSelected == "114") {
        return "postalCodes.114 > 0";
      }
    },
    erraseFunction() {
      console.log("FONCTION EFFACER");
      this.deletePersonna();
    },
    ...mapActions("SearchModule", ["selectedProduct"]),
    ...mapActions("HeaderModule", ["svgClick"]),
    ...mapActions("PersonnaModule", ["deletePersonna"]),
  },
  computed: {
    ...mapGetters("PersonnaModule", ["getPersonnaSelected"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables/variables.scss";
@import "@/assets/scss/mixin.scss";

.search-page {
  width: 90%;
  margin: 0 auto;
  .hits-page {
    display: flex;
    width: 90%;
    margin: 0 auto;
    .hits-wrapper {
      .sort-and-stat {
        padding: 0 5em;
      }
    }
  }
  .search {
    width: 80%;
    margin: 0 auto;
  }
  .filterBtn {
    width: 50%;
    margin: 0 0 0 5.4em;
    display: -webkit-flex;
    display: flex;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    justify-content: space-between;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
.ais-hits {
  width: 100%;
}
.errase-button {
  background-color: white;
  border: none;
  padding: 1em;
  cursor: pointer;
}
.errase-button:hover {
  background-color: $primary;
  color: $fourth-color;
}
.ais-ClearRefinements-button:disabled {
  background-color: white;
  border: none;
  padding: 1em;
  cursor: pointer;
  color: $seventh-color !important;
  border-radius: 8px;
}
.ais-ClearRefinements-button {
  background-color: white;
  border: none;
  padding: 1em;
  cursor: pointer;
  color: $fourth-color !important;
  background-color: $primary;
  border-radius: 8px;
}
</style>
