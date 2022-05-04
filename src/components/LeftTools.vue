<script setup>
import { ref,  } from 'vue'
import { activeData } from '../compositionAPI/global';
const compontentsArr = ref([{
  name: 'ef-layout',
  childrens: ['test text'],
  class: [],
  props: [],
  events: [],
  styles: []
},
{
  name: 'ef-layout',
  childrens: ['test text'],
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
    :key="item.name"
    :is="item.name"
    :class="item.class"
    :styles="item.styles"
    :childrens="item.childrens"
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
  background-color: rgb(146, 145, 145);
  // background-color: rgb(34, 95, 72);
  color: rgb(0, 0, 0);
}
</style>
