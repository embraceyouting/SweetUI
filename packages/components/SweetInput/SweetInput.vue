<template>
    <input class="sweet-input" v-bind="$attrs" />
</template>

<script lang="ts">
export default {
    name: "SweetInput",
};
</script>

<style scoped>
.sweet-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>