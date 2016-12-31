<template>
  <div
    class="Field"
    :class="cssClass"
    @click="$emit('click', $event)">
  </div>
</template>

<script>
  export default {
    props: {
      selected: {
        type: Number,
        required: false,
      },
    },

    computed: {
      cssClass() {
        const list = [];

        if (typeof this.selected === 'number') {
          list.push(`is-player-${this.selected}`);
        } else {
          list.push('pulsate');
        }

        return list;
      },
    },
  };
</script>


<style scoped>
.Field {
  width: 33%;
  height: 33%;
  float: left;

  transform: scale(.95, .95);
  background: #333;

  &:hover {
    animation: pulsate infinite .8s ease-in-out;
  }

  &.is-selected {
    transform: scale(.9, .9);
  }

  &.is-player-0 {
    background: #64CEAA;
  }

  &.is-player-1 {
    background: #FD6C6C;
  }
}

@keyframes pulsate {
  0%, 100% {
    transform: scale(.9, .9);
  } 50% {
    transform: scale(.8, .8);
  }
}
</style>
