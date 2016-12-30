import Vue, { set } from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
* Initial state
*/
const EMPTY_FIELD = 0b000000000;
const WINNER_FIELDS = [
  0b111000000,
  0b000111000,
  0b000000111,
  0b100100100,
  0b010010010,
  0b001001001,
  0b100010001,
  0b001010100,
];

function isWinner(player) {
  return WINNER_FIELDS.some(win => player === win);
}

/* eslint-disable no-console */
/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    /**
    * The players
    */
    players: Array(2).fill(EMPTY_FIELD),

    /**
    * The current player
    */
    currentPlayerId: 0,

    /**
    * The game fields
    */
    fields: Array(9).fill(),
  },

  getters: {
    /**
    * The winning player
    *
    * @returns [undefined, 0, 1] The id of the winner of undefined
    */
    winner(state) {
      return [0, 1].find(playerId => isWinner(state.players[playerId]));
    },
  },

  mutations: {
    /**
    * Select the current player on the provided field
    */
    selectField(state, fieldId) {
      set(state.fields, fieldId, state.currentPlayerId);
    },

    /**
    * Switch the current player
    */
    switchPlayer(state) {
      set(state, 'currentPlayerId', Math.abs(state.currentPlayerId - 1));
    },
  },

  actions: {
    /**
    * Select a field and pass the current player
    */
    selectField({ commit, state }, fieldId) {
      console.log(`player: ${state.currentPlayerId}`);

      if (state.fields[fieldId] !== undefined) return;

      commit('selectField', fieldId);
      commit('switchPlayer');

      console.log(state.fields);
      console.log(`next player: ${state.currentPlayerId}`);
      console.log(`winner: ${state.winner}`);
    },
  },
});
