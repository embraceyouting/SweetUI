<script setup lang="ts">
</script>

<template>
  <main>
    <div>
      <SweetButton
            :background-color="'#ffcbd9'"
            :border-color="'#ff99b1'"
            @click="()=>{console.log(111)}"
        >
            Disabled Button
        </SweetButton>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;

  div {
    &:nth-child(1) {
      width: 100px;
      height: 100px;
    }

    &:nth-child(2) {
      width: 100px;
      height: 100px;
    }

    &:nth-child(3) {
      width: 100px;
      height: 100px;
    }

    &:nth-child(4) {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
