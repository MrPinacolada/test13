<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { Store } from '@/stores/pinia'

const store = Store()
onBeforeMount(() => {
  store.fetchData()
})
</script>

<template>
  <header>
    <div class="flex justify-content-end">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText v-model="store.$state.filter['global'].value" placeholder="Поиск по сообщению" />
      </span>
    </div>
  </header>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  text-decoration: none;
  border: none;
  padding: 30px;
}
</style>
