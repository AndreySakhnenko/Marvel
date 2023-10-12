<template>
  <div>
    <nuxt-child />
    <h1>{{ $t("order") }}</h1>
    <p>{{ hash }}</p>
    <p>{{ url }}</p>
    <p>{{ comicsData }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "IndexPage",

  data() {
    return {
      hash: "",
      url: '',
      comicsData: null,
      public_key: "89947e38e34bce74644e0bb71ab74252",
      private_key: "77ada3389e1cd5b16602186bf06ff3e139884de8",
      endpoint: "http://gateway.marvel.com/v1/public/comics",
      endpoint1: "http://gateway.marvel.com/v1/public/characters",
      endpoint2: "http://gateway.marvel.com/v1/public/events",
      endpoint3: "http://gateway.marvel.com/v1/public/stories",
    };
  },

  created() {
    this.makeRequest();
  },

  methods: {
    generateHash(ts: string) {
      const hashInput = ts + this.private_key + this.public_key;
      return this.md5(hashInput);
    },

    makeRequest() {
      const ts = new Date().getTime().toString();
      this.hash = this.generateHash(ts);
      // this.url = `${this.endpoint}?ts=${ts}&apikey=${this.public_key}&hash=${this.hash}`;
      // this.url = `${this.endpoint1}?ts=${ts}&apikey=${this.public_key}&hash=${this.hash}`;
      // this.url = `${this.endpoint2}?ts=${ts}&apikey=${this.public_key}&hash=${this.hash}`;
      this.url = `${this.endpoint3}?ts=${ts}&apikey=${this.public_key}&hash=${this.hash}`;

      axios
        .get(this.url)
        .then((response) => {
          this.comicsData = response.data;
          console.log(this.url)
          console.log(response.data.data.results)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    md5(input: string) {
      // Импортируем CryptoJS только на клиентской стороне
      const CryptoJS = require("crypto-js");
      return CryptoJS.MD5(input).toString();
    },
  },
});
</script>
