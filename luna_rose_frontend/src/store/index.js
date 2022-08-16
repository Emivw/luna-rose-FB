import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    cart: null
  },
  getters: {

  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    clearProduct(state) {
      state.product = null
    },
    setCart(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    async getProducts(context) {
      fetch('https://luna-rose.herokuapp.com/api/products')
        .then((res) => res.json())
        .then((data) => context.state.products = data.results )
    },
    async getProduct(context, id) {
      fetch('https://luna-rose.herokuapp.com/api/products/' + id)
        .then((res) => res.json())
        .then((data) => context.commit('setProduct', data.results))
    },
    async getUsers(context) {
      fetch('https://luna-rose.herokuapp.com/api/users')
        .then((res) => res.json())
        .then((data) => context.state.users = data.results )
    },
    async getUser(context, id) {
      fetch('https://luna-rose.herokuapp.com/api/users/' + id)
        .then((res) => res.json())
        .then((data) => context.commit('setUser', data.results))
    },
    async registerUser(context, payload) {
      fetch('https://luna-rose.herokuapp.com/api/register', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then((res) => res.json())
        .then((data) => console.log(data.results))
    },
    async loginUser(context, payload) {
      fetch('https://luna-rose.herokuapp.com/api/register', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then((res) => res.json())
        .then((data) => console.log(data.results))
    },
    async getUserInfo(context) {
      fetch('https://luna-rose.herokuapp.com/api/users', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token': context.state.user
        }
      })
        .then((res) => res.json())
        .then((data) => console.log(data.token.user))
    },
    async editProduct(context, payload) {
      fetch('https://luna-rose.herokuapp.com/api/products' + payload.id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((res) => res.json())
        .then((data) => context.dispatch('getProducts'));
    },
    async deleteProduct(context, payload) {
      fetch('https://luna-rose.herokuapp.com/api/products' + payload, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => context.dispatch('getProducts'))
    },
    async addProduct(context, payload) {
      fetch('https://luna-rose.herokuapp.com/api/products', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((res) => res.json())
        .then((data) => context.dispatch('getProducts'))
    },
    AddProductToCart(context, payload) {
      fetch('https://luna-rose.herokuapp.com/api/cart', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token': context.state.user
        }
      })
        .then((res) => res.json())
        .then((data) =>
          fetch('https://luna-rose.herokuapp.com/api/login' + data.token.user.id + '/cart', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          })
            .then((res) => res.json())
            .then((data) => context.dispatch('getCart'))
        )
    },
    getCart(context) {
      fetch('https://luna-rose.herokuapp.com/api/login', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-auth-token': context.state.user
        }
      })
        .then((res) => res.json())
        .then((data) =>
          fetch('https://luna-rose.herokuapp.com/api/login' + data.token.user.id + '/cart')
            .then((res) => res.json())
            .then((data) => context.commit('setCart', data.results))
        )
    },
    clearSingleProduct(context) {
      context.commit('clearSingleProduct')
    }
  },

  modules: {

  }
})
