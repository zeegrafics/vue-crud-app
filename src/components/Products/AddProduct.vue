<template>
    <b-container fluid>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Product Category</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="product.category" :options="categoryOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Product SKU/ID</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="product.sku"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Product Name</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="product.name"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Product Description</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="product.description"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Buying Price</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="product.buyingPrice"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Selling Price</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="product.sellingPrice"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Quantity</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="product.quantity"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Notify Quantity</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="product.notifyQuantity"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Discount</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="product.discount" :options="discountOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Tax</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="product.tax" :options="taxOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Promotion</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="product.promotion" :options="promotionOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
            <b-col class="d-flex">
                <b-btn variant="info" class="ml-auto">Reset</b-btn>
                <b-btn variant="success" class="ml-1" @click="addNewProduct()">Save</b-btn>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AddProduct',
    data() {
      return {
        product: {
          sku: null,
          name: null,
          description: null,
          buyingPrice: null,
          sellingPrice: null,
          quantity: null,
          notifyQuantity: null,
          discount: null,
          tax: null,
          promotion: null,
        },
        categoryOptions: [],
        discountOptions: [
          { value: null, text: 'Please select an option' }
        ],
        taxOptions: [
          { value: null, text: 'Please select an option' }
        ],
        promotionOptions: [
          { value: null, text: 'Please select an option' }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'suppliers',
        'products'
      ]),
    },
    watch:{
    },
    mounted(){
    },
    methods: {
      ...mapActions([
        'addProduct'
      ]),
      addNewProduct(){
          this.addProduct({
            "name": this.product.name,
            "buyingPrice": this.product.buyingPrice,
            "sellingPrice": this.product.sellingPrice,
            "quantity": this.product.quantity
          })
          .then(() => {
              //console.log(this.products);
          });
      }
    }    
}
</script>
<style lang="scss" scoped>
.form-row{
  padding: 5px;
  margin: 5px 0;
  background: #efefef;
  label{
    margin:0;
    padding: 0;
  }
}
</style>