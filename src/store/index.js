import Vue from 'vue'
import Vuex from 'vuex'

import { suppCollection } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    suppliers: [],
  },
  getters: {
    suppliers: state => {
      return state.suppliers
    }
  },
  mutations: { 
    saveSuppliers(state, payload) {
        state.suppliers = payload;
    },
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
    }
  },
  modules: {
  }
})
