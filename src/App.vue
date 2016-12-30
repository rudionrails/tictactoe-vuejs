<style lang="sass">
  @import '~bootstrap/scss/bootstrap';

  $enable-flex: true;
</style>

<template>
  <div>
    <header>
      <Navigation></Navigation>
    </header>

    <div class="container-fluid">
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
