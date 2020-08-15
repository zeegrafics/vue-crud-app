import Vue from 'vue'
import Vuex from 'vuex'

import { suppCollection, catCollection, prodCollection } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    suppliers: [],
    product: []
  },
  getters: {
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
    }
  },
  actions: {
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
            return categories;
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
    addProduct({ commit }, payload) {
      commit('saveProduct', payload);
    }
  },
  modules: {
  }
})
