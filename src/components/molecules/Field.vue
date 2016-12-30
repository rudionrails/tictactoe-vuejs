<style scoped>
.Field {
  cursor: pointer;
}
</style>

<template>
  <div class="Field" @click="$emit('click', $event)">
    <i class="material-icons">{{ icon }}</i>
  </div>
</template>

<script>
  export default {
    props: {
      player: {
        type: Number,
        required: false,
      },
    },

    computed: {
      icon() {
        if (this.player === 0) return 'lock';
        if (this.player === 1) return 'pets';

        return 'report_problem';
      },
    },
  };
</script>
