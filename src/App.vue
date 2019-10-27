<template>
  <div id="app">
    <Time :blink="true" :displaySeconds="true" />
  </div>
</template>

<script>
import Time from './components/Time'

export default {
  name: 'App',
  components: {
    Time
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.clock {
  background-color: #263238;
  color: #eceff1;
  padding: 0.3rem 0.6rem;
  font-size: 3rem;
  font-family: "Menlo", monospace;
}
</style>
