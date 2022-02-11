<template>
  <div class="hello">
    <div class="form">
      <div class="form-item">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model="v$.firstName.$model">
        <div
          class="input-errors"
          v-for="error of v$.firstName.$errors"
          :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-item">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model="v$.lastName.$model">
        <div
          class="input-errors"
          v-for="error of v$.lastName.$errors"
          :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-item">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="v$.email.$model">
        <div
          class="input-errors"
          v-for="error of v$.email.$errors"
          :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@/utils/i18n-validators'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const state = reactive({
      firstName: '',
      lastName: '',
      email: ''
    })
    const rules = computed(() => {
      const localRules = {
        firstName: { required, minLength: minLength(3), maxLength },
        lastName: { required, minLength: minLength(3), maxLength },
        email: { required, email, minLength: minLength(6), maxLength },
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
label {
  display: block;
}
</style>
