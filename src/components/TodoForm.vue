<template>
  <form class="todo-form" @submit.prevent="$emit('submit')">
    <input
      :value="newTodoTitle"
      @input="$emit('update:new-todo-title', $event.target.value)"
      placeholder="Tambahkan todo baru"
      class="todo-input"
    />
    <button type="submit" class="todo-button">Tambah Todo</button>
  </form>
</template>

<script>
export default {
  name: 'TodoForm',
  props: {
    newTodoTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.todo-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.todo-input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.todo-input:focus {
  outline: none;
  border-color: #4CAF50;
}

.todo-button {
  padding: 0.75rem 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.todo-button:hover {
  background-color: #45a049;
}
</style> 