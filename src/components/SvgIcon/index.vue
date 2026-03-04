<template>
    <svg :class="svgClass" :style="sizeStyle" aria-hidden="true">
        <use :xlink:href="iconName" :fill="color"/>
    </svg>
</template>

<script setup>
// <SvgIcon iconClass="nodata" width="122" height="99"/>
import { computed } from 'vue'

const props = defineProps({
    iconClass: {
        type: String,
        required: true
    },
    className: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: ''
    }
})

const iconName = computed(() => {
    return `#icon-${props.iconClass}`
})
const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`
    }
    return 'svg-icon'
})
const sizeStyle = computed(() => {
    const width = props.width || props.size;
    const height = props.height || props.size;
    return `width: ${width}px;height: ${height}px`
})

</script>