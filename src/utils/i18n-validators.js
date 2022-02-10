// @/utils/i18n-validators.js
import * as validators from '@vuelidate/validators'
import i18n from "@/i18n"

// or import { createI18nMessage } from '@vuelidate/validators'
const { createI18nMessage } = validators

// extract the `t` helper, should work for both Vue 2 and Vue 3 versions of vue-i18n
const { t } = i18n.global || i18n

const messages = {
  "required": "The field {property} is required.",
  "minLength": "The {property} field has a value of '{model}', but it must have a min length of {min}.",
  "email": "email gireceksin deve!"
}

const messagePath = ({ $validator }) => {
  console.log('validator: ', $validator)
  return `messages.${$validator}`
}

console.log('AAA: ', i18n.global)

// pass `t` and create your i18n message instance
const withI18nMessage = createI18nMessage({ t, messagePath })

// wrap each validator.
export const required = withI18nMessage(validators.required)
// validators that expect a parameter should have `{ withArguments: true }` passed as a second parameter, to annotate they should be wrapped
export const minLength = withI18nMessage(validators.minLength, { withArguments: true })
// or you can provide the param at definition, statically
export const maxLength = withI18nMessage(validators.maxLength(10))
export const email = withI18nMessage(
  validators.email,
  { messagePath: () => messages.email }
)