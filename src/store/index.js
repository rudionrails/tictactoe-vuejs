import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
* Initial state
*/
const EMPTY_FIELD = 0b000000000;
const WINNER_FIELDS = [
  // horizontal
  0b000000111,
  0b000111000,
  0b111000000,

  // vertical
  0b001001001,
  0b010010010,
  0b100100100,

  // diagonal
  0b100010001,
  0b001010100,
];

/**
* Returns blank state
*/
function reset() {
  return {
    // The players
    players: Array(2).fill(EMPTY_FIELD),

    // The current player
    current: 0,

    // The game fields
    fields: Array(9).fill(),
  };
}

/**
* Is the provided player bit a winner match
*/
function isWinner(player) {
  // eslint-disable-next-line no-bitwise
  return WINNER_FIELDS.some(win => (player & win) === win);
}

/**
* Is the field already taken
*/
function isTaken(field) {
  return field !== undefined;
}

/* eslint-disable no-new */
export default new Vuex.Store({
  state: reset(),

  getters: {
    /**
    * The winning player
    *
    * @returns [undefined, 0, 1] The id of the winner or undefined
    */
    winner(state) {
      return [0, 1].find(playerId => isWinner(state.players[playerId]));
    },

    /**
    * If store has a winner
    *
    * @returns [Booleam] true or false
    */
    isWinnerPresent(_, getters) {
      return typeof getters.winner === 'number';
    },

    /**
    * Returns true when winner or all fields taken
    *
    * @returns [Boolean] true or false
    */
    isGameOver(state, getters) {
      const isAllTaken = state.fields.every(field => isTaken(field));
      return isAllTaken || getters.isWinnerPresent;
    },
  },

  mutations: {
    /**
    * Select the current player on the provided field
    */
    selectField(state, fieldId) {
      // eslint-disable-next-line no-bitwise
      const matrix = state.players[state.current] | (2 ** fieldId);

      // update the current player matrix
      Vue.set(state.players, state.current, matrix);

      // set the field
      Vue.set(state.fields, fieldId, state.current);
    },

    /**
    * Switch the current player
    */
    switchPlayer(state) {
      Vue.set(state, 'current', Math.abs(state.current - 1));
    },
  },

  actions: {
    /**
    * Select a field and pass the current player
    */
    selectField({ commit, state, getters }, fieldId) {
      if (getters.isGameOver || isTaken(state.fields[fieldId])) return;

      commit('selectField', fieldId);

      if (!getters.isWinnerPresent) {
        commit('switchPlayer');
      }
    },

    /**
    * Reset the board
    */
    reset({ commit, state }) {
      const newState = reset();

      Vue.set(state, 'players', newState.players);
      Vue.set(state, 'fields', newState.fields);

      commit('switchPlayer');
    },
  },
});
