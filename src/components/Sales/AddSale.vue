<template>
    <b-container fluid>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Customer</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="customer" :options="customerOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Salesman</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="salesman" :options="salesmanOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
            <b-col>
                <b-row>
                <b-col sm="3" class="d-flex flex-start align-self-center">
                    <label>Product</label>
                </b-col>
                <b-col sm="9">
                    <b-form-select v-model="product" :options="productOptions"></b-form-select>
                </b-col>
                </b-row>
            </b-col>
            <b-col>
                <b-row>
                <b-col sm="3" class="d-flex flex-start align-self-center">
                    <label>Quantity</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input v-model="form.qty"></b-form-input>
                </b-col>
                </b-row>
            </b-col>
            <b-col>
                <b-row>
                <b-col sm="6" class="d-flex flex-start align-self-center">
                    <label>Buying Price</label>
                </b-col>
                <b-col sm="6">
                    <b-form-input v-model="form.buying"></b-form-input>
                </b-col>
                </b-row>
            </b-col>
            <b-col>
                <b-row>
                <b-col sm="6" class="d-flex flex-start align-self-center">
                    <label>Selling Price</label>
                </b-col>
                <b-col sm="6">
                    <b-form-input v-model="form.selling"></b-form-input>
                </b-col>
                </b-row>
            </b-col>
            <b-col>
                <b-btn variant="success" class="ml-1" @click="addNewItem()">Add To Order</b-btn>
            </b-col>
        </b-row>
        
        <b-row class="m-1 form-row">
            <b-col v-if="orderItems.items.length > 0">
                <b-table striped hover :items="orderItems.items" :fields="orderItems.fields"></b-table>
            </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Discount</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="discount" :options="discountOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Tax</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="tax" :options="taxOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Promotion</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="promotion" :options="promotionOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
            <b-col cols="2">Net Total: {{ orderTotals.netTotal }}</b-col>
            <b-col cols="2">Discount: {{ orderTotals.discount }}</b-col>
            <b-col cols="2">Tax: {{ orderTotals.tax }}</b-col>
            <b-col cols="2">Promotion: {{ orderTotals.promotion }}</b-col>
            <b-col cols="2">Grand Total: {{ orderTotals.grandTotal }}</b-col>
            <b-col cols="2" class="d-flex">
                <b-btn variant="info" class="ml-auto">Reset</b-btn>
                <b-btn variant="success" class="ml-1" @click="addNewProduct()">Save</b-btn>
            </b-col>
        </b-row>
        <b-toast id="product-post-toast" title="Operation Successfull" autoHideDelay="2000">
        Product saved Successfully!
        </b-toast>
    </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AddSale',
    data() {
      return {
        orderItems: {
            fields: ['product_sku', 'product_name', 'quantity', 'buying_price', 'selling_price', 'discount', 'tax', 'total'],
            items: []
        },
        form: {
          qty: null,
          buying: null,
          selling: null
        },
        products: [],
        selectedProduct: null,
        product: null,
        productOptions: [
          { value: null, text: 'Please select an option' }
        ],
        customer: null,
        customerOptions: [
          { value: null, text: 'Please select an option' }
        ],
        salesman: null,
        salesmanOptions: [
          { value: null, text: 'Please select an option' }
        ],
        discount: null,
        discountOptions: [
          { value: null, text: 'Please select an option' }
        ],
        tax: null,
        taxOptions: [
          { value: null, text: 'Please select an option' }
        ],
        promotion: null,
        promotionOptions: [
          { value: null, text: 'Please select an option' }
        ],
        orderTotals: {
          netTotal: 0,
          discount: 0,
          tax: 0,
          promotion: 0,
          grandTotal: 0
        }
      }
    },
    computed: {
      ...mapGetters([
      ]),
    },
    watch:{
        product(newVal){
            if(newVal !== null){
            this.selectedProduct = this.getProductInfo(newVal);
            this.form.qty = this.selectedProduct.qty;
            this.form.buying = this.selectedProduct.buying;
            this.form.selling = this.selectedProduct.selling;
            }
            else{
            this.form.qty = null;
            this.form.buying = null;
            this.form.selling = null;
            }
        },
        discount(newVal){
          let discount = this.getDiscountInfo(newVal);
          if(discount.type === 'fixed'){
            this.orderTotals.discount = discount.disc
          }
          else{
            this.orderTotals.discount = this.orderTotals.netTotal*(discount.disc/100)
          }
          this.orderTotals.grandTotal = this.orderTotals.netTotal - this.orderTotals.discount + this.orderTotals.tax;
        }
    },
    mounted(){
      this.getCustomers();
      this.getSalesmen();
      this.getProducts();
      this.getDiscounts();
      this.getTaxes();
    },
    methods: {
      ...mapActions([
        'loadCustomers',
        'loadSalesmen',
        'loadProducts',
        'loadDiscounts',
        'loadTaxes'
      ]),
      getCustomers(){
        this.loadCustomers().then((res) => {
          res.forEach(cust => {
              this.customerOptions.push({
                value: cust.id,
                text: cust.data.name
              })
          });
        });
      },
      getSalesmen(){
        this.loadSalesmen().then((res) => {
          res.forEach(sm => {
              this.salesmanOptions.push({
                value: sm.id,
                text: sm.data.name
              })
          });
        });
      },
      getDiscounts(){
        this.loadDiscounts().then((res) => {
          res.forEach(disc => {
              this.discountOptions.push({
                value: disc.id,
                text: disc.data.name,
                type: disc.data.type,
                disc: disc.data.value
              })
          });
        });
      },
      getTaxes(){
        this.loadTaxes().then((res) => {
          res.forEach(tax => {
              this.taxOptions.push({
                value: tax.id,
                text: tax.data.name
              })
          });
        });
      },
      getProducts(){
        this.loadProducts().then((res) => {
          res.forEach(prod => {
              this.productOptions.push({
                value: prod.id,
                text: prod.data.name
              });
              this.products.push({
                  id: prod.id,
                  sku: prod.data.sku,
                  name: prod.data.name,
                  qty: prod.data.quantity,
                  buying: prod.data.buying_price,
                  selling: prod.data.selling_price
              })
          });
        });
      },
      getProductInfo(newVal){
          let product;
          this.products.forEach(prod => {
              if(prod.id === newVal){
                  product = prod
              }
          })
          return product;
      },
      getDiscountInfo(newVal){
          let discount;
          this.discountOptions.forEach(disc => {
              if(disc.value === newVal){
                  discount = disc
              }
          })
          return discount;
      },
      getProductInfo(newVal){
          let product;
          this.products.forEach(prod => {
              if(prod.id === newVal){
                  product = prod
              }
          })
          return product;
      },
      getCategories(){
        this.loadCategories().then((res) => {
          res.forEach(cat => {
              this.categoryOptions.push({
                value: cat.id,
                text: cat.data.name
              })
          });
        });
      },
      addNewItem(){
        this.orderItems.items.push({
          product_sku: this.selectedProduct.sku,
          product_name: this.selectedProduct.name,
          quantity: this.form.qty,
          buying_price: this.selectedProduct.buying,
          selling_price: this.form.selling,
          discount: 0,
          tax: 0,
          total: this.form.qty*this.form.selling
        });
        this.product = null;
        this.selectedProduct = null;
        this.orderItems.items.forEach(item => {
          this.orderTotals.netTotal += item.total
        })
        this.orderTotals.grandTotal = this.orderTotals.netTotal - this.orderTotals.discount + this.orderTotals.tax;
      },
      addNewProduct(){
          this.addProduct({
            category: this.product.category,
            sku: this.product.sku,
            name: this.product.name,
            description: this.product.description,
            buyingPrice: this.product.buyingPrice,
            sellingPrice: this.product.sellingPrice,
            quantity: this.product.quantity,
            notifyQuantity: this.product.notifyQuantity,
            discount: this.product.discount,
            tax: this.product.tax,
            promotion: this.product.promotion,
          })
          .then((res) => {
            if(res){
              this.$bvToast.show('product-post-toast');
              this.resetForm();
            }
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