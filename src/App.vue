<template>
  <div>
    <header>
      TicTacToe
    </header>

    <div id="main">
      <Board />
    </div>

    <footer>
      &copy; Rudolf Schmidt
    </footer>
  </div>
</template>

<script>
  import Board from './components/organisms/Board';

  export default {
    components: {
      Board,
    },
  };
</script>

<style>
:root {
  --header-height: 4rem;
  --footer-height: 2rem;

  --without-header-footer: var(--header-height) - var(--footer-height);
  --board-size: calc(100vmin - var(--without-header-footer));
}

body {
  margin: 0;
  padding: 0;

  background: #ccc;
}

header {
  line-height: var(--header-height);
  font-size: 3rem;
  text-align: center;
}

footer {
  line-height: var(--footer-height);
  text-align: center;
}

#main {
  display: block;
  margin: 0 auto;

  height: var(--board-size);
  width: var(--board-size);
}
</style>
