<script setup>

defineProps({
  childrens: Array,
  value: String,
  styles: Object 
})
// const styles = ref({
//   color: 'red'
// });
</script>

<template>
  <div class="layout">
    {{value}}
    <Component
      v-for="item in childrens"
      :key="item.value"
      :is="item.name"
      :class="item.class"
      :styles="item.styles"
      :childrens="item.childrens"
      :value="item.value"
      draggable="true"
      @dragstart="dragstartHandler($event, item)"
    >
    </Component>
    </div>
</template>

<style scoped>
.layout {
  color: v-bind('styles?.color');
}
</style>
