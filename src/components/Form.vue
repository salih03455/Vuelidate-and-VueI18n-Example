<template>
  <div class="form">
    <div class="select-lang">
      <div>{{ $t('selectLang') }}</div>
      <select v-model="$i18n.locale" @change="setLang($event)">
        <option
          v-for="(lang, i) in languages"
          :key="`lang${i}`"
          :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
    <div class="form-content">
      <div class="form-item">
        <label for="firstName">{{ $t('firstName') }}</label>
        <input type="text" id="firstName" v-model="v$.firstName.$model">
        <div
          class="input-errors"
          v-for="error of v$.firstName.$errors"
          :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-item">
        <label for="lastName">{{ $t('lastName') }}</label>
        <input type="text" id="lastName" v-model="v$.lastName.$model">
        <div
          class="input-errors"
          v-for="error of v$.lastName.$errors"
          :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-item">
        <label for="email">{{ $t('email') }}</label>
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
import { useStore } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@/utils/i18n-validators'
import { languages } from '@/i18n'

export default {
  name: 'Form',
  setup() {
    const store = useStore()
    const state = reactive({
      firstName: '',
      lastName: '',
      email: store.state.email
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
    const setLang = event => {
      store.dispatch('changeLocale', event.target.value)
    }

    return {
      v$,
      languages,
      setLang
    }
  }
}
</script>

<style scoped>
.select-lang {
  display: flex;
  justify-content: space-between;
  border-bottom: 5px solid #ddd;
  margin-bottom: 30px;
  box-shadow: 0px 15px 7px 0px #ccc;
  padding: 10px;
}
.select-lang div {
  font-weight: bold;
  padding-right: 15px;
  font-size: 15px;
}
.select-lang select {
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 4px;
  padding-left: 4px;
}
a {
  color: #42b983;
}
label {
  display: block;
}
.form {
  width: 400px;
  max-width: calc(100% - 20px);
  margin: auto;
}
.form-item {
  margin-bottom: 15px;
}
input {
  padding: 10px;
  border: 1px solid #ddd;
  outline: none;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  color: #000;
  margin-bottom: 5px;
}
label {
  font-size: 14px;
  margin-bottom: 5px;
}
input:focus {
  border-color: #42b983;
}
.error-msg {
  color: #ff0000;
  font-size: 13px;
}
</style>
