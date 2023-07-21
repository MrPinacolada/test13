<template>
  <main>
    <div class="table">
      <DataTable
        paginator
        :rows="10"
        :value="tableData"
        tableStyle="min-width: 50rem;font-size:0.9em"
        v-model:filters="store.$state.filter"
        :globalFilterFields="['title', 'body']"
        sortMode="multiple"
        removableSort
      >
        <Column
          v-for="col of columns"
          :key="col.field"
          :field="col.field"
          :header="col.header"
          sortable
        ></Column>
      </DataTable>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import { Store } from '@/stores/pinia'

const store = Store()

const tableData = ref()

const columns = [
  { field: 'id', header: 'ID' },
  { field: 'title', header: 'Заголовок' },
  { field: 'body', header: 'Описание' }
]

onMounted(async () => {
  await watchEffect(async () => {
    tableData.value = await store.$state.data
  })
})
</script>

<style scoped>
.table {
  margin-top: 20px;
}
:deep(.p-column-header-content) {
  justify-content: center !important;
}
:deep(.p-datatable-tbody > tr > td) {
  padding: 0.5rem 0.5rem !important;
  text-align: left !important;
}
</style>
