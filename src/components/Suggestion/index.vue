<template>
  <div class="suggestion">
    <div class="title">
      <h1>Our Categories</h1>
    </div>
    <div class="content">
      <ais-refinement-list
        v-if="!showGender"
        attribute="categories.lvl0"
        searchable
        show-more
      >
        <div slot-scope="{ items, isFromSearch, createURL }">
          <ul>
            <li v-if="isFromSearch && !items.length">No results.</li>
            <li v-for="item in items" :key="item.value" class="filter-list">
              <a
                class="button-filter"
                :href="createURL(item)"
                :style="{
                  border: item.isRefined ? '1px solid #1f1f24' : '',
                }"
              >
                <ais-highlight attribute="item" :hit="item" />
              </a>
            </li>
          </ul>
        </div>
      </ais-refinement-list>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Suggestion",
  methods: { ...mapActions("SearchModule", ["modifQuery"]) },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables/variables.scss";
.suggestion {
  padding: 0 1.2em;
  width: 25%;
  .content {
    border: none;
    height: 20%;
    margin: 2em 0;
    li {
      border: none;
      padding: 0;
      margin: 0.8rem 0;
      width: 95% !important;
      border: #f2f2f2 solid 1px;
      /* margin: 1.2rem; */
      padding: 1rem;
      height: 79%;
      cursor: default;
    }
  }
}
</style>
