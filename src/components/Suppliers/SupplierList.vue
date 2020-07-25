<template>
  <b-container>
    <b-row>
      <b-col cols="3">Name</b-col>
      <b-col cols="3">Email</b-col>
      <b-col cols="3">Address</b-col>
      <b-col cols="3">Phone</b-col>
    </b-row>
    <b-row v-for="item in items" :key="item.email">
      <b-col cols="3">{{ item.name }}</b-col>
      <b-col cols="3" v-bind:style="{ fontSize : emailExists(item.email)+'px' }">{{ item.email !== "" ? item.email : "No Email" }}</b-col>
      <b-col cols="3">{{ item.address }}</b-col>
      <b-col cols="3">{{ item.phone }}</b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'SupplierList',
    data() {
      return {
        items: []
      }
    },
    computed: {
      ...mapGetters([
        'suppliers'
      ]),
    },
    watch:{
      suppliers(newVal){
        this.showSuppliers();
      }
    },
    mounted(){
        this.loadAllSuppliers();
    },
    methods: {
      ...mapActions([
        'loadSuppliers',
        'addSupplier'
      ]),
      loadAllSuppliers(){
        this.loadSuppliers().then(() => {
          //this.showSuppliers();
        })
      },
      showSuppliers(){
        this.suppliers.forEach(supp => {
          this.items.push(supp.data)
        });
      },
      emailExists(email){
        return email===""? 15:13
      }
    }    
}
</script>
<style lang="scss" scoped>
.nodata{
  color:red;
}
</style>