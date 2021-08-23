<template>
  <dropdown
    class="my-dropdown-toggle"
    :options="arrayOfObjects"
    :selected="object"
    v-on:updateOption="methodToRunOnSelect"
    :placeholder="'Select your postal code'"
    :closeOnOutsideClick="true"
  >
  </dropdown>
</template>

<script>
import dropdown from "vue-dropdowns";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      arrayOfObjects: [{ name: "110" }, { name: "112" }, { name: "114" }],
      object: {
        name: "Postal Code",
      },
    };
  },

  components: {
    dropdown: dropdown,
  },

  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
      this.sendPersonnaSelected(payload.name);
      this.selectedPersonna();
      this.$emit("selectedPersonna", true);
    },
    ...mapActions("PersonnaModule", [
      "sendPersonnaSelected",
      "selectedPersonna",
    ]),
  },
  computed: {
    ...mapGetters("HeaderModule", ["getReset"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
.my-dropdown-toggle {
  border-radius: 5px;

  ::v-deep .dropdown-toggle {
    color: $fourth-color;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 8px 20px 8px 20px;
  }

  ::v-deep .dropdown-toggle-placeholder {
    color: $main-color;
  }

  ::v-deep .dropdown-toggle:hover {
    background: #6DCFF6;
  }
  ::v-deep .dropdown-menu {
    li {
      width: 90%;
      margin: 0 auto;
      border-radius: 8px;
      text-align: center;
      a:hover {
        color: white;
        background: #6DCFF6;
      }
    }
  }
}
</style>
