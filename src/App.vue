<template>
  <div class="todos-container">
    <h3>Todos</h3>
    
    <!-- Form untuk menambah Todo -->
    <form @submit.prevent="addTodo">
      <input v-model="newTodoTitle" placeholder="Add a new todo" />
      <button type="submit">Add Todo</button>
    </form>

    <!-- Daftar Todo -->
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodosComponent",
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
    addTodo() {
      if (this.newTodoTitle.trim() === "") return; // prevent empty todo
      this.addTodo(this.newTodoTitle);
      this.newTodoTitle = ""; // Reset input field after submit
    },
  },
};
</script>

<style scoped>
.todos-container {
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.todos {
  margin-top: 20px;
}

.todo {
  background-color: #ffffff;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

input {
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
