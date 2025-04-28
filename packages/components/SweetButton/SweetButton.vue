<template>
    <button class="sweet-button">
        <slot>Button</slot>
    </button>
</template>

<script lang="ts">
export default {
    name: "SweetButton",
};
</script>

<style scoped>
.sweet-button {
    padding: 8px 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>