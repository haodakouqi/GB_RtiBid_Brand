<script setup>
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


@font-face {
  font-family: 'Montserrat';
  src: url('./assets/font/Montserrat-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat-Medium';
  src: url('./assets/font/Montserrat-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat-Bold';
  src: url('./assets/font/Montserrat-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

html, body {
  //font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;
}


body {
  margin: 0;
  background-color: #ffffff;
  font-family: Montserrat;
}

#app {
  min-height: 100vh;
}

</style>
