<template>
  <div
    class="Field"
    @click="$emit('click', $event)"
  >
    <i class="material-icons Field__icon" v-if="icon">{{ icon }}</i>
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
        if (this.player === 0) return 'highlight_off';
        if (this.player === 1) return 'grade';

        return false;
      },
    },
  };
</script>
