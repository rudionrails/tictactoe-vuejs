<style scoped>
.Board {
}
</style>

<template>
  <div>
    <Field
      v-for="(field, fieldId) in fields"
      :player="field"
      @click.prevent="selectField(fieldId)"
    />
  </div>
</template>

<script>
  import Field from '../molecules/Field';

  export default {
    components: {
      Field,
    },

    computed: {
      fields() {
        return this.$store.state.fields;
      },
    },

    methods: {
      selectField(fieldId) {
        this.$store.dispatch('selectField', fieldId);
      },
    },
  };
</script>
