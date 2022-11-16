<template>
  <section class="wrapper">
    <div class="container" ref="container"></div>

    <div class="button-wrap" v-if="sdk" transition="fade">
      <label>
        <span>Horizontal rotation</span>
        <input type="number" v-model="horizontal" />
      </label>
      <label>
        <span>Vertical rotation</span>
        <input type="number" v-model="vertical" />
      </label>
      <button @click="rotate">Rotate</button>
    </div>
  </section>
</template>

<script>
import { setupSdk } from "@matterport/sdk";

export default {
  data() {
    return {
      horizontal: 45,
      vertical: 15,
      sdk: null,
    };
  },
  async mounted() {
    this.sdk = await setupSdk("YOUR_SDK_KEY", {
      container: this.$refs.container,
      space: "j4RZx7ZGM6T",
      iframeQueryParams: { qs: 1 },
    });
  },
  methods: {
    rotate() {
      this.sdk?.Camera.rotate(this.horizontal, this.vertical);
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  font-family: sans-serif;

  .container {
    position: relative;
    width: 100%;
    height: 50vh;
  }
  .button-wrap {
    display: grid;
    row-gap: 10px;
    margin: 20px auto 0;
    max-width: 150px;
    justify-content: center;
  }

  .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
}
</style>
