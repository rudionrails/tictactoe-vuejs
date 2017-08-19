<template>
  <div
    class="Result"
    @click="$emit('click', $event)"
  >
    <div class="is-left"></div>
    <div class="is-right"></div>

    <div class="Result-message">
      <div :class="winnerClass">
        {{message}}
      </div>
    </div>

    <div class="Result-hint">
      Click to restart
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      winner: {
        type: Number,
        required: false,
      },
    },

    computed: {
      winnerClass() {
        const list = [];

        if (typeof this.winner === 'number') {
          list.push(`is-player-${this.winner}`);
        }

        return list;
      },

      message() {
        switch (this.winner) {
          case 0:
            return 'Player 1 wins';
          case 1:
            return 'Player 2 wins';
          default:
            return 'Draw';
        }
      },
    },
  };
</script>

<style scoped>
@keyframes closeIn {
  to {
    transform: translateX(0);
  }
}

@keyframes bounceDown {
  0% {
    transform: translateY(-100%);
  }
  20% {
    transform: translateY(3rem);
  }
  40%, 100% {
    transform: translateY(0);
  }
}

.Result {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.Result-message {
  animation: bounceDown 2s forwards 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0%;

  text-align: center;
  transform: translateY(-100%);
}

.Result-message > div {
  background: #ccc;
  color: #fff;

  padding: 2rem 5rem;
}

.Result-message > .is-player-0 {
  background: #64CEAA;
}
.Result-message > .is-player-1 {
  background: #FD6C6C;
}


.is-left,
.is-right {
  animation: closeIn 0.2s forwards ease;

  background: #fff;
  bottom: 0;
  opacity: 0.7;
  position: absolute;
  top: 0;
}

.is-left {
  left: 0;
  right: 50%;

  transform: translateX(-100%);
}

.is-right {
  left: 50%;
  right: 0;

  transform: translateX(100%);
}

</style>
