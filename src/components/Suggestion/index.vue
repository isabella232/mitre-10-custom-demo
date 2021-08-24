<template>
  <div class="suggestion">
    <div class="title">
      <h1>Our flagship products</h1>
    </div>
    <div class="content">
      <ais-index index-name="products_price_desc">
        <ais-configure :hits-per-page.camel="6" />
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
      </ais-index>
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
  width: 20%;
  .content {
    border: none;
    height: 20%;
    margin: 2em 0;
    li {
      border: none;
      padding: 0;
      margin: 1rem 0;
      width: 95% !important;
      border: #f2f2f2 solid 1px;
      margin: 1.2rem;
      padding: 1rem;
      height: 79%;
      cursor: pointer;
    }
  }
}
</style>
