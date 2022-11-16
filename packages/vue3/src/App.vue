<template>
  <section class="wrapper">
    <div class="container" ref="container"></div>

    <div class="button-wrap" v-if="sdk">
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

<script setup lang="ts">
import { MpSdk, setupSdk } from "@matterport/sdk";
import { onMounted, ref } from "vue";

const sdk = ref<MpSdk>();
const container = ref<HTMLDivElement>();

const horizontal = ref(45);
const vertical = ref(15);

onMounted(async () => {
  sdk.value = await setupSdk("YOUR_SDK_KEY", {
    container: container.value,
    space: "j4RZx7ZGM6T",
    iframeQueryParams: { qs: 1 },
  });
});

const rotate = () => {
  sdk.value?.Camera.rotate(horizontal.value, vertical.value);
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
}
</style>
