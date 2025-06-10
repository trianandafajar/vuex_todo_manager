<template>
  <div class="todo-filter">
    <button
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('filter', filter.value)"
      :class="['filter-button', { active: currentFilter === filter.value }]"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoFilter',
  props: {
    currentFilter: {
      type: String,
      required: true,
      validator: value => ['all', 'active', 'completed'].includes(value)
    }
  },
  data() {
    return {
      filters: [
        { label: 'Semua', value: 'all' },
        { label: 'Aktif', value: 'active' },
        { label: 'Selesai', value: 'completed' }
      ]
    }
  }
}
</script>

<style scoped>
.todo-filter {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  justify-content: center;
}

.filter-button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  background-color: var(--white);
  border-radius: 4px;
  color: var(--text-color);
  transition: all 0.2s ease;
}

.filter-button:hover {
  background-color: var(--background-color);
}

.filter-button.active {
  background-color: var(--primary-color);
  color: var(--white);
  border-color: var(--primary-color);
}
</style> 