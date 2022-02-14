<template>
  <header>
    <i18n-t keypath="title" tag="h1">
      <template #vuelidate>
        <a href="https://vuelidate-next.netlify.app/" target="_blank">Vuelidate</a>
      </template>
      <template #vuei18n>
        <a href="https://vue-i18n.intlify.dev/" target="_blank">Vue I18n</a>
      </template>
    </i18n-t>
    <p>{{ $t('description') }} 🎉🎉🎉</p>
  </header>
</template>
<script>
export default {
  name: 'Header',
  setup() {}
}
</script>
<style scoped>
  header {
    text-align: center;
    max-width: 960px;
    padding: 0 10px;
    margin: 0 auto 50px;
  }
  header h1 a {
    color: #42b983;
    text-decoration: none;
  }
  header h1 a:hover {
    text-decoration: underline;
  }
  header p {
    font-size: 18px;
    color: #666;
  }
</style>