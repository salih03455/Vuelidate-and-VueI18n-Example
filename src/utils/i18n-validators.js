import * as validators from '@vuelidate/validators'
import i18n from "@/i18n"

const { createI18nMessage } = validators
const { t } = i18n.global || i18n


// {property}, {model}, {min} gibi degiskenler kullanabiliyoruz

const messagePath = ({ $validator }) => `validation.${$validator}`

// pass `t` and create your i18n message instance
const withI18nMessage = createI18nMessage({ t, messagePath })

// wrap each validator.
export const required = withI18nMessage(
  validators.required, messagePath
)

export const minLength = withI18nMessage(
  validators.minLength,
  { withArguments: true, messagePath }
)

export const maxLength = withI18nMessage(validators.maxLength(10))

export const email = withI18nMessage(
  validators.email, messagePath
)