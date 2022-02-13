<template>
  <Header />
  <Form />
</template>

<script>
import Form from './components/Form.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Form,
    Header
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
