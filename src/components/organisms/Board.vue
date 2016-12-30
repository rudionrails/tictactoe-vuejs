<style scoped>
.Board {
	border: 1px solid black;
}
</style>

<template>
  <div>
    <div class="Board row">
      <Field
        v-for="(field, fieldId) in fields"
        :player="field"
        @click.prevent="selectField(fieldId)"
        />
      </div>

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
