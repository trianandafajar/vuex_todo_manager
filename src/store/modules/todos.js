// import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos,
  completedTodos: state => state.todos.filter(todo => todo.completed),
  activeTodos: state => state.todos.filter(todo => !todo.completed)
};

const actions = {
  addTodo({ commit }, title) {
    const todo = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString()
    };
    commit('ADD_TODO', todo);
  },
  
  toggleTodo({ commit }, id) {
    commit('TOGGLE_TODO', id);
  },
  
  deleteTodo({ commit }, id) {
    commit('DELETE_TODO', id);
  }
};

const mutations = {
  ADD_TODO(state, todo) {
    state.todos.unshift(todo);
  },
  
  TOGGLE_TODO(state, id) {
    const todo = state.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  },
  
  DELETE_TODO(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
