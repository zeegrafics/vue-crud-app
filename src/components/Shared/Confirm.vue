<template>
<div>
  <b-card
    title="Card Title"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      The status of this page is {{ status }}
    </b-card-text>

    <b-button @click="updateStatus" variant="primary">Change</b-button>
  </b-card>
</div>
</template>
<script>
export default {
    name: 'Confirm',
    props: {
        status: Boolean
    },
    data() {
      return {
      }
    },
    methods: {
        updateStatus() {
            this.status = !this.status
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