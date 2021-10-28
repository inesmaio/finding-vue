import { createStore } from "vuex";

interface User {
  address: {
    city: String,
    geo: {
      lat: String,
      lng: String,
    },
    street: String,
    zipcode: String,
  },
  company: {
    bs: String,
    catchPhrase: String,
    name: String
  },
  email: String,
  id: number,
  name: string,
  phone: String,
  username: String,
  website: String
}
interface State {
  users: User[],
  user?: User,
  loading: boolean,
}

export default createStore<State>({
  state: {
    users: [],
    user: undefined,
    loading: true,
  },
  mutations: {
    setUsers(state, users: User[]) {
      state.users = users;
    },
    setUser(state, user: User) {
      state.user = user;
    },
    setLoading(state, loading: boolean) {
      state.loading = loading;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      commit("setLoading", true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonRes = await res.json();
        console.log(jsonRes);
        commit("setUsers", jsonRes);
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchUser({ commit }, id) {
      commit("setLoading", true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const jsonRes = await res.json();
        commit("setUser", jsonRes);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    locations: (state) => {
      return state.users.map((user) => [
        user.address.city,
        parseFloat(`${user.address.geo.lat}`),
        parseFloat(`${user.address.geo.lng}`),
      ]);
    },
    location: (state) => {
      if (!state.user) return [];
      return [
        [
          state.user.address.city,
          parseFloat(`${state.user.address.geo.lat}`),
          parseFloat(`${state.user.address.geo.lng}`),
        ],
      ];
    },
  },
});
