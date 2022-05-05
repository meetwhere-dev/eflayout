<script setup>
import { ref,  } from 'vue'
import { activeData } from '../compositionAPI/global';
const compontentsArr = ref([{
  name: 'ef-layout',
  value: '递归组件-1',
  childrens: [{
    name: 'ef-layout',
    value: '递归组件-1-1',
    childrens: [],
    class: [],
    props: [],
    events: [],
    styles: []
  }],
  class: [],
  props: [],
  events: [],
  styles: []
},
{
  name: 'ef-layout',
  value: '递归组件-2',
  childrens: [{
    name: 'ef-layout',
    value: '递归组件-2-1',
    childrens: [],
    class: [],
    props: [],
    events: [],
    styles: []
  }],
  class: [],
  props: [],
  events: [],
  styles: []
}])



const dragstartHandler = (e, item) => {
  console.log('dragstartHandler', e, item);
  activeData.currentCompontent = item
}
</script>

<template>
  <div class="left">
    <component
    v-for="item in compontentsArr"
    :key="item.value"
    :is="item.name"
    :class="item.class"
    :styles="item.styles"
    :childrens="item.childrens"
    :value="item.value"
    draggable="true"
    @dragstart="dragstartHandler($event, item)"
    >
      {{ item.childrens }}
    </component>
  </div>
</template>

<style lang="scss" scoped>
.left {
  width: 100%;
  display: flex;
  flex: 1;
  max-width: 240px;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(216, 216, 216);
  // background-color: rgb(34, 95, 72);
  color: rgb(0, 0, 0);
}
</style>
