<script setup>
import Header from './Header.vue';
import LeftTools from './LeftTools.vue';
import RightTools from './RightTools.vue';
import Board from './Board.vue';
</script>

<template>
  <div class="editor">
    <Header />
    <div class="editor_content">
      <LeftTools />
      <Board />
      <RightTools />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.editor_content {
  display: flex;
  height: calc(100vh - 50px);
}
</style>
