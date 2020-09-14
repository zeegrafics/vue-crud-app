<template>
    <b-container fluid>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Parent Category</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="category.parent" :options="parentOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Category Name</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="category.name"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Category Description</label>
          </b-col>
          <b-col sm="9">
              <b-form-input v-model="category.description"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row" v-if="isDiscount">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Discount</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="category.discount" :options="discountOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Tax</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="category.tax" :options="taxOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
          <b-col sm="3" class="d-flex flex-start align-self-center">
              <label>Promotion</label>
          </b-col>
          <b-col sm="9">
              <b-form-select v-model="category.promotion" :options="promotionOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="m-1 form-row">
            <b-col class="d-flex">
                <b-btn variant="info" class="ml-auto">Reset</b-btn>
                <b-btn variant="success" class="ml-1" @click="addNewCategory()">Save</b-btn>
            </b-col>
        </b-row>
        <b-toast id="category-post-toast" title="Operation Successfull" autoHideDelay="2000">
        Category Has been saved Successfully!
        </b-toast>
    </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AddCategory',
    components: {
    },
    data() {
      return {
        category: {
          parent: null,
          name: null,
          description: null,
          discount: null,
          tax: null,
          promotion: null,
        },
        parentOptions: [],
        discountOptions: [
          { value: null, text: 'Please select an option' }
        ],
        taxOptions: [
          { value: null, text: 'Please select an option' }
        ],
        promotionOptions: [
          { value: null, text: 'Please select an option' }
        ],
        isDiscount: true
      }
    },
    computed: {
      ...mapGetters([
      ]),
    },
    watch:{
      isDiscount(newValue){
        console.log(newValue);
      }
    },
    mounted(){
      this.getCategories();    
    },
    methods: {
      ...mapActions([
        'addCategory',
        'loadCategories'
      ]),
      resetForm(){
        this.category.parent = null;
        this.category.name = null;
        this.category.description = null;
        this.category.discount = null;
        this.category.tax = null;
        this.category.promotion = null;
        this.parentOptions = [];
      },
      getCategories(){
        this.loadCategories().then(res => {
            res.forEach(cat => {
                this.parentOptions.push({
                    value: cat.id,
                    text: cat.data.name
                })
            });
        })
      },
      addNewCategory(){
          this.addCategory({
            "parent_id": this.category.parent,
            "name": this.category.name,
            "description": this.category.description,
            "discount_id": this.category.discount,
            "tax_id": this.category.tax,
            "promotion_id": this.category.promotion
          })
          .then((res) => {
              if(res){
                this.$bvToast.show('category-post-toast');
                this.resetForm();
                this.getCategories();
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