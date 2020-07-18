<template>
    <b-container fluid>
        <b-row class="my-1">
        <b-col sm="3">
            <label :for="s-name">Supplier Name</label>
        </b-col>
        <b-col sm="9">
            <b-form-input :id="s-name" :type="text"></b-form-input>
        </b-col>
        </b-row>
        <b-row class="my-1">
        <b-col sm="3">
            <label :for="s-name">Supplier Email</label>
        </b-col>
        <b-col sm="9">
            <b-form-input :id="s-name" :type="text"></b-form-input>
        </b-col>
        </b-row>
        <b-row class="my-1">
        <b-col sm="3">
            <label :for="s-name">Supplier Address</label>
        </b-col>
        <b-col sm="9">
            <b-form-input :id="s-name" :type="text"></b-form-input>
        </b-col>
        </b-row>
        <b-row class="my-1">
        <b-col sm="3">
            <label :for="s-name">Supplier Number</label>
        </b-col>
        <b-col sm="9">
            <b-form-input :id="s-name" :type="text"></b-form-input>
        </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: 'AddSupplier'    
}
</script>
<style lang="scss" scoped>

</style>