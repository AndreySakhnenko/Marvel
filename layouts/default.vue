<template>
  <div>
     <!-- <Preloader v-if="loading" /> -->
    <Header />
    <div class="wrapper">
      <template v-if="isHomePage">
        <transition name="fade" mode="out-in">
          <div class="content_pages content_home__page">
            <Nuxt />
          </div>
        </transition>
      </template>
      <template v-else>
        <Navbar />
        <transition name="fade" mode="out-in">
          <div class="content_pages">
            <Nuxt />
          </div>
        </transition>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "@/components/layout/app-header.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Header,
  },
  data(){
    return{
      loading: true as boolean,
    }
  },
  mounted() {
    this.loading = false;
  },
  computed: {
    isHomePage() {
       return this.$route.path === '/';
    },
  },
});
</script>

<style scoped>

</style>
