<style scoped>
:root {
  --cell-height: calc(33.33vh - 3.8rem);
  --cell-margin-compensation: calc(var(--margin) * 2 / 3);
  --field-margin-compensation: calc(var(--margin) * 2);
}

.Field {
  cursor: pointer;

	font-size: var(--cell-height);
	height: var(--cell-height);
	max-width: calc(33.33vmin - var(--cell-margin-compensation));
	text-align: center;
	width: calc(33.33vw - var(--cell-margin-compensation));
}
</style>

<template>
  <div
    class="col-xs-4 Field"
    @click="$emit('click', $event)"
  >
    <i class="material-icons" v-if="icon">{{ icon }}</i>
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
