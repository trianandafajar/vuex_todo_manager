<template>
  <div class="todo-list">
    <div v-if="todos.length === 0" class="empty-state">
      Belum ada todo. Tambahkan todo baru!
    </div>
    <div v-else class="todos">
      <div 
        v-for="todo in todos" 
        :key="todo.id"
        class="todo-item"
      >
        <span class="todo-title">{{ todo.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.todo-list {
  margin-top: 1rem;
}

.empty-state {
  text-align: center;
  color: #666;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 6px;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.todo-item {
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.todo-item:hover {
  transform: translateY(-2px);
}

.todo-title {
  font-size: 1rem;
  color: #2c3e50;
}
</style> 