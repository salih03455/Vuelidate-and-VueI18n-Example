<template>
  <div class="hello">
    <div class="form">
      <input type="text" v-model="v$.firstName.$model">
      <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@/utils/i18n-validators'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const state = reactive({
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    })
    const rules = computed(() => {
      const localRules = {
        firstName: { required, email, minLength}
      }
      return localRules
    })
    
    const v$ = useVuelidate(rules, state)

    return { v$ }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
