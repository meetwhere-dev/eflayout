<script setup>

defineProps({
  childrens: Array,
  styles: Object 
})
// const styles = ref({
//   color: 'red'
// });
</script>

<template>
  <div class="layout">
    {{childrens}}
    <slot></slot>
  </div>
</template>

<style scoped>
.layout {
  color: v-bind('styles?.color');
}
</style>
