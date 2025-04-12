<template>
  <div class="todos-wrapper">
    <h3>📝 Daftar Todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodosComponent",
  computed: mapGetters(["allTodos"]),
};
</script>

<style scoped>
.todos-wrapper {
  max-width: 600px;
  margin: 20px auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

h3 {
  margin-bottom: 1rem;
  color: #333;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.todo {
  padding: 10px 15px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 16px;
  color: #444;
}
</style>
