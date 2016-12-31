<template>
  <div class="Board">
    <Field
      v-for="(selected, id) in fields"
      :selected="selected"
      @click="selectField(id)"
    />

    <div>
      The winner is: {{ winner || 'undefined' }}
    </div>
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

      winner() {
        if (typeof this.$store.getters.winner === 'number') {
          return `Player ${this.$store.getters.winner}`;
        }

        return false;
      },
    },

    methods: {
      selectField(fieldId) {
        this.$store.dispatch('selectField', fieldId);
      },
    },
  };
</script>

<style scoped>
.Board {
  width: 100%;
  height: 100%;
}
</style>
