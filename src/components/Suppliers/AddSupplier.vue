<template>
    <b-container fluid>
        <b-row class="my-1">
        <b-col sm="3">
            <label>Supplier Name</label>
        </b-col>
        <b-col sm="9">
            <b-form-input v-model="supplier.name"></b-form-input>
        </b-col>
        </b-row>
        <b-row class="my-1">
        <b-col sm="3">
            <label>Supplier Email</label>
        </b-col>
        <b-col sm="9">
            <b-form-input v-model="supplier.email"></b-form-input>
        </b-col>
        </b-row>
        <b-row class="my-1">
        <b-col sm="3">
            <label>Supplier Address</label>
        </b-col>
        <b-col sm="9">
            <b-form-input v-model="supplier.address"></b-form-input>
        </b-col>
        </b-row>
        <b-row class="my-1">
        <b-col sm="3">
            <label>Supplier Number</label>
        </b-col>
        <b-col sm="9">
            <b-form-input v-model="supplier.phone"></b-form-input>
        </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-btn variant="info" @click="addNewSupplier()">Save</b-btn>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'AddSupplier',
    data() {
      return {
        supplier: {
          address: "some adrress",
          name: "",
          email: "",
          phone: ""
        }
      }
    },
    computed: {
    },
    watch:{
    },
    mounted(){
    },
    methods: {
      ...mapActions([
        'addSupplier'
      ]),
      addNewSupplier(){
          this.addSupplier({
            "address": this.supplier.address,
            "name": this.supplier.name,
            "email": this.supplier.email,
            "phone": this.supplier.phone
          })
      }
    }    
}
</script>
<style lang="scss" scoped>

</style>