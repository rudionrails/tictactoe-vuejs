<template>
  <div
    class="Result"
    @click="$emit('click', $event)"
  >
    <div class="is-left"></div>
    <div class="is-right"></div>

    <div class="message">
      <div :class="winnerClass">
        {{message}}
      </div>
    </div>

    <div class="hint">
      Click anywhere to restart
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
@keyframes resultIn {
  to {
    transform: translateX(0);
  }
}

.Result {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.is-left,
.is-right {
  animation: resultIn 0.2s forwards ease;

  background: rgba(255, 255, 255, 0.7);
  bottom: 0;
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

/*
* Winner message
*/
@keyframes messageIn {
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

.message {
  animation: messageIn 2s forwards 0.2s;
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

.message > div {
  background: #333;
  color: #fff;

  padding: 2rem 5rem;
}

.message > .is-player-0 {
  background: #64CEAA;
}
.message > .is-player-1 {
  background: #FD6C6C;
}

/*
* Reset hint
*/
@keyframes hintIn {
}

.hint {
  align-self: flex-end;
}
</style>
