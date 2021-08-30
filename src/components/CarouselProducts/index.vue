<template>
  <div class="carousel-container">
    <h3>Recommandations</h3>
    <ais-configure :hits-per-page.camel="7">
      <HitsCarouselReco />
    </ais-configure>
    <h3>Bought together</h3>
    <ais-instant-search
      :search-client="searchClient"
      index-name="products_price_desc"
    >
      <ais-configure :hits-per-page.camel="7">
        <HitsCarouselBought />
      </ais-configure>
    </ais-instant-search>
  </div>
</template>

<script>
import HitsCarouselReco from "@/components/HitsCarouselReco";
import HitsCarouselBought from "@/components/HitsCarouselBought";
import algoliasearch from "algoliasearch/lite";
export default {
  data() {
    return {
      searchClient: algoliasearch(
        "L2A9XHB3DS",
        "fef9f6782afb37dde429edf39f555a1b"
      ),
    };
  },
  components: {
    HitsCarouselReco,
    HitsCarouselBought,
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 90%;
  margin: 5rem auto;
  h3 {
    font-family: "Oswald", sans-serif;
    color: #000;
    font-size: 2rem;
        margin: 0 1em !important;
  }
}
</style>
