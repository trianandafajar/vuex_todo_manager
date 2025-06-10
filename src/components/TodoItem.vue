<template>
  <div 
    class="todo-item"
    :class="{ 'is-completed': todo.completed }"
  >
    <div class="todo-content">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('toggle')"
        class="todo-checkbox"
      />
      <span class="todo-title">{{ todo.title }}</span>
    </div>
    <div class="todo-actions">
      <button 
        @click="$emit('delete')"
        class="delete-button"
        aria-label="Hapus todo"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
      validator: todo => {
        return todo.id && todo.title !== undefined
      }
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: var(--shadow);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.todo-item:hover {
  transform: translateY(-2px);
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.todo-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

.todo-title {
  font-size: 1rem;
  color: var(--text-color);
}

.is-completed .todo-title {
  text-decoration: line-through;
  opacity: 0.7;
}

.todo-actions {
  display: flex;
  gap: 0.5rem;
}

.delete-button {
  background: none;
  border: none;
  color: #ff4444;
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.delete-button:hover {
  background-color: rgba(255, 68, 68, 0.1);
}
</style> 