// import axios from 'axios';

const state = {
  todos: [
    {
      id: 1,
      title: "Todo One",
    },
    {
      id: 2,
      title: "Todo Two",
    },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  addTodo({ commit }, title) {
    const newTodo = {
      id: Date.now(), // pakai timestamp sebagai id
      title,
    };
    commit("ADD_TODO", newTodo);
  },
};

const mutations = {
  ADD_TODO(state, todo) {
    state.todos.push(todo);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
