<template>
  <div
    class="Board"
    :class="cssClass"
  >
    <Field
      v-for="(selected, id) in fields"
      :selected="selected"
      @click="selectField(id)"
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
      cssClass() {
        const list = [];

        if (this.$store.getters.isWinnerPresent) {
          list.push('is-winner');
        }

        return list;
      },

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

<style scoped>
.Board {
  width: 100%;
  height: 100%;
}

.Board.is-winner .Field {
  animation: winner 1.3s infinite ease-in-out;

  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.1s; }
  &:nth-child(5) { animation-delay: 0.2s; }
  &:nth-child(6) { animation-delay: 0.3s; }
  &:nth-child(7) { animation-delay: 0s; }
  &:nth-child(8) { animation-delay: 0.1s; }
  &:nth-child(9) { animation-delay: 0.2s; }
}

@keyframes winner {
  0%, 70%, 100% {
    transform: scale(.9, .9);
  } 35% {
    transform: scale(0, 0);
  }
}
</style>
