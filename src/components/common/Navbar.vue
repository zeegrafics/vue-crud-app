<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    
    <!--<b-button variant="light" v-b-toggle.sidebar-no-header><b-icon-list></b-icon-list></b-button>-->
    <b-navbar-brand href="#" class="ml-2">IMS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Suppliers">
          <b-dropdown-item><router-link to="/addsupplier">Add Supplier</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/suppliers">Suppliers List</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Products">
          <b-dropdown-item><router-link to="/addcategory">Add Category</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/categories">Category List</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/addproduct">Add Product</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/products">Products List</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Purchase">
          <b-dropdown-item><router-link to="/">Add Purchase</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/">Purchase History</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Sale">
          <b-dropdown-item><router-link to="/addsale">Add Sale</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/">Sales History</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Reports">
          <b-dropdown-item><router-link to="/">Purchase Report</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/">Sales Report</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/">Inventory Report</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      
      <b-navbar-nav class="ml-auto">
        <!--<b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>-->

        <b-nav-item-dropdown right>
          
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item>
            <router-link to="/login" v-if="loggedInUser === null">Login</router-link>
            <b-button v-else @click="logout()" variant="outline">LogOut</b-button>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
const fb = require('../../firebase')
export default {
  name: 'Navbar',
  computed:{
    ...mapGetters([
      'loggedInUser'
    ])
  },
  methods:{
    ...mapMutations([
      'saveLogout'
    ]),
    logout(){
      fb.auth.signOut().then(function(res) {
        // Sign-out successful.
        console.log(res);
        this.saveLogout();
        this.$router.push('/login');
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
