<template>
<div class="">
    <h3>Todos</h3>
    <div class="todos">
        <div class="todo" v-for="todo in allTodos" :key="todo.id">{{ todo.title }}</div>
    </div>
</div>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "TodosComponent",
    computed: mapGetters(['allTodos'])
}
</script>

<style>

</style>