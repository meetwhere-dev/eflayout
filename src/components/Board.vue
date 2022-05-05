<script setup>
import Grid from './Grid.vue'
import { addComponent, userPage } from '../compositionAPI/global';

const dropHandler = e => {
  console.log('dropHandler', e);
  addComponent();
}

const clickHandler = e => {
  console.log('clickHandler', e);
}

const handleDragOver = e => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
}
</script>

<template>
<div class="play_board"
@click="clickHandler"
@drop="dropHandler"
@dragover="handleDragOver"
>
  <Grid />
  <Component
  v-for="item in userPage"
  :key="item.id"
  :is="item.name"
  v-bind="item"
  >
   {{ item.childrens }}
  </Component>
</div>

  
</template>

<style scoped>
.play_board {
  flex: 2;
  display: flex;
  position: relative;
  overflow: auto;
  background-color: rgb(238, 238, 238);
}
</style>
