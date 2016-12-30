<template>
  <nav class="navbar navbar-light bg-faded">
    <a class="navbar-brand" href="#">TicTacToe</a>

    <ul class="nav navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'root' }" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
      </li>
    </ul>
  </nav>
</template>
