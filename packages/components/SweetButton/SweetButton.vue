<template>
    <button
        class="sweet-button"
        :disabled="disabled"
        @click="onClick"
        :style="buttonStyle"
    >
        <slot>{{ label }}</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
    name: "SweetButton",
    props: {
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        label: {
            type: String as PropType<string>,
            default: 'Click Me'
        },
        onClick: {
            type: Function as PropType<() => void>,
            required: true
        },
        backgroundColor: {
            type: String as PropType<string>,
            default: '#ffcbd9' // 默认粉色
        },
        borderColor: {
            type: String as PropType<string>,
            default: '#ff99b1' // 默认粉色边框
        },
        borderWidth: {
            type: String as PropType<string>,
            default: '1px' // 默认边框宽度
        },
        borderRadius: {
            type: String as PropType<string>,
            default: '4px' // 默认边框半径
        }
    },
    setup(props) {
        // 计算按钮的样式
        const buttonStyle = computed(() => ({
            backgroundColor: props.disabled ? '#ddd' : props.backgroundColor,
            borderColor: props.disabled ? '#ccc' : props.borderColor,
            borderWidth: props.borderWidth,
            borderRadius: props.borderRadius,
            cursor: props.disabled ? 'not-allowed' : 'pointer'
        }));

        return {
            buttonStyle
        };
    }
});
</script>

<style scoped>
.sweet-button {
    padding: 8px 16px;
    color: white;
    border: none;
    outline: none;
    white-space: nowrap;
    font-size: 14px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}
</style>