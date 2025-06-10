<template>
  <div class="todos-container">
    <h3>Todos</h3>
    
    <TodoForm 
      :new-todo-title="newTodoTitle"
      @update:new-todo-title="newTodoTitle = $event"
      @submit="handleAddTodo"
    />

    <TodoList :todos="allTodos" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: "App",
  components: {
    TodoForm,
    TodoList
  },
  data() {
    return {
      newTodoTitle: "",
    };
  },
  computed: {
    ...mapGetters("todos", ["allTodos"]),
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),
    handleAddTodo() {
      if (!this.newTodoTitle.trim()) return;
      this.addTodo(this.newTodoTitle);
      this.newTodoTitle = "";
    },
  },
};
</script>

<style scoped>
.todos-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}
</style>
