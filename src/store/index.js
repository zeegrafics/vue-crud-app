import Vue from 'vue'
import Vuex from 'vuex'

import { suppCollection, catCollection, prodCollection, custCollection, smCollection, salesCollection, discCollection, taxCollection, promCollection } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: null,
    userInfo: null,
    suppliers: [],
    product: []
  },
  getters: {
    loggedInUser: state => {
      return state.login
    },
    suppliers: state => {
      return state.suppliers
    },
    products: state => {
      return state.product
    }
  },
  mutations: { 
    saveSuppliers(state, payload) {
        state.suppliers = payload;
    },
    saveProduct(state, payload) {
        state.product.push(payload);
    },
    saveLogin(state, payload){
        state.login = payload;
        localStorage.setItem('jwt', payload);
    },
    saveUserInfo(state, payload){
        state.userInfo = payload
    },
    saveLogout(state){
      state.login = null;
      localStorage.removeItem('jwt');
    },
  },
  actions: {
    login({commit}, payload){
      //console.log('Login with credentials', payload.user.email);
      commit('saveLogin', payload.data.email);
      commit('saveUserInfo', payload);
    },
    loadSuppliers({ commit }) {
        let suppliers = [];
        suppCollection
        //.orderBy("name")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                suppliers.push({
                    "id": doc.id,
                    "data": doc.data()
                })
            });
            commit('saveSuppliers', suppliers);
            return suppliers;
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    },
    addSupplier(_, payload) {
      // Add a new document in collection "cities"
      suppCollection.doc().set({
        address: payload.address,
        name: payload.name,
        email: payload.email,
        phone: payload.phone
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
      //console.log(payload);
    },
    loadCategories(_) {
        let categories = [];
        return catCollection
        //.orderBy("name")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                categories.push({
                    "id": doc.id,
                    "data": doc.data()
                })
            });
            return categories
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    },
    addCategory(_, payload) {
      // Add a new document in collection "cities"
      return catCollection.doc().set({
        parent_id: payload.parent_id,
        name: payload.name,
        description: payload.description,
        discount_id: payload.discount_id,
        tax_id: payload.tax_id,
        promotion_id: payload.promotion_id
      })
      .then(function() {
        return true
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
      //console.log(payload);
    },
    addProduct(_, payload) {
      return prodCollection.doc().set({
        category_id: payload.category,
        sku: payload.sku,
        name: payload.name,
        description: payload.description,
        buying_price: payload.buyingPrice,
        selling_price: payload.sellingPrice,
        quantity: payload.quantity,
        notify_quantity: payload.notifyQuantity,
        discount_id: payload.discount,
        tax_id: payload.tax,
        promotion_id: payload.promotion
      })
      .then(function() {
        return true
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    },
    loadProducts(_) {
        let products = [];
        return prodCollection
        //.orderBy("name")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                products.push({
                    "id": doc.id,
                    "data": doc.data()
                })
            });
            return products
        })
        .catch(function(error) {
            console.log("Error getting products: ", error);
        });
    },
    loadCustomers(_) {
        let customers = [];
        return custCollection
        //.orderBy("name")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                customers.push({
                    "id": doc.id,
                    "data": doc.data()
                })
            });
            return customers
        })
        .catch(function(error) {
            console.log("Error getting customers: ", error);
        });
    },
    loadSalesmen(_) {
        let salesmen = [];
        return smCollection
        //.orderBy("name")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                salesmen.push({
                    "id": doc.id,
                    "data": doc.data()
                })
            });
            return salesmen
        })
        .catch(function(error) {
            console.log("Error getting salesmen: ", error);
        });
    },
    loadDiscounts(_) {
        let discounts = [];
        return discCollection
        //.orderBy("name")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                discounts.push({
                    "id": doc.id,
                    "data": doc.data()
                })
            });
            return discounts
        })
        .catch(function(error) {
            console.log("Error getting discounts: ", error);
        });
    },
    loadTaxes(_) {
        let taxes = [];
        return taxCollection
        //.orderBy("name")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                taxes.push({
                    "id": doc.id,
                    "data": doc.data()
                })
            });
            return taxes
        })
        .catch(function(error) {
            console.log("Error getting taxes: ", error);
        });
    }
  },
  modules: {
  }
})
