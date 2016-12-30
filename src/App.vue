<style lang="sass">
  $enable-flex: true;

  @import '~bootstrap/scss/bootstrap';
</style>

<template>
  <div>
    <header>
      <Navigation></Navigation>
    </header>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/organisms/Navigation';

  export default {
    components: {
      Navigation,
    },
  };
</script>
