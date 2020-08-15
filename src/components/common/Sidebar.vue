<template>
  <div>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template v-slot:default="{ hide }">
        <div class="p-2">
            <b-button v-b-toggle.sidebar-no-header><b-icon-list></b-icon-list></b-button>
            <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis</p>
            <b-button v-b-toggle.collapse-1 sm variant="outline-dark">Suppliers</b-button>
            <b-collapse id="collapse-1" class="mt-2">
                <b-list-group>
                <b-list-group-item></b-list-group-item>
                <b-list-group-item><router-link to="/suppliers">Suppliers List</router-link></b-list-group-item>
                </b-list-group>
            </b-collapse>
            <b-button v-b-toggle.collapse-1 sm variant="outline-dark">Products</b-button>
            <b-collapse id="collapse-1" class="mt-2">
                <b-list-group>
                <b-list-group-item><router-link to="/addproduct">Add Product</router-link></b-list-group-item>
                <b-list-group-item><b-link href="/suppliers">Suppliers List</b-link></b-list-group-item>
                </b-list-group>
            </b-collapse>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
