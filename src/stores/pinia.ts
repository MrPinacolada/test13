import { defineStore } from 'pinia'
import axios from 'axios'
import { FilterMatchMode } from 'primevue/api'

export const Store = defineStore('store', {
  state: () => ({
    data: null,
    filter: {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    }
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.data = response.data
      } catch (error) {
        console.error('Error fetch', error)
      }
    }
  }
})
