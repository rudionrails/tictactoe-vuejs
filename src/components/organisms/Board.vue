<template>
  <div class="Board">
    <Field
      v-for="(field, id) in fields"
      :key="id"
      :selected="field"
      @click="selectField(id)"
    />

    <Result
      v-if="isGameOver"
      :winner="winner"
      @click="reset"
    />
  </div>
</template>

<script>
import Field from 'src/components/molecules/Field';
import Result from 'src/components/molecules/Result';

export default {
  components: {
    Field,
    Result,
  },

  computed: {
    fields() {
      return this.$store.state.fields;
    },

    isGameOver() {
      return this.$store.getters.isGameOver;
    },

    winner() {
      return this.$store.getters.winner;
    },
  },

  methods: {
    selectField(fieldId) {
      this.$store.dispatch('selectField', fieldId);
    },

    reset() {
      this.$store.dispatch('reset');
    },
  },
};
</script>

<style scoped>
.Board {
  position: relative;

  width: 100%;
  height: 100%;
}
</style>
