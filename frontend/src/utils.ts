import type { ApiError } from "./client"
import useCustomToast from "./hooks/useCustomToast"

export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "Invalid email address",
}

export const namePattern = {
  value: /^[A-Za-z\s\u00C0-\u017F]{1,30}$/,
  message: "Invalid name",
}

type ValidationRules = {
  [key: string]: {
    value?: string | number | RegExp
    message?: string
    validate?: (value: string) => boolean | string
    required?: string
  }
}

export const passwordRules = (isRequired = true): ValidationRules => {
  const rules: ValidationRules = {
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
  }

  if (isRequired) {
    rules.required = "Password is required"
  }

  return rules
}

export const confirmPasswordRules = (
  getValues: () => any,
  isRequired = true,
): ValidationRules => {
  const rules: ValidationRules = {
    validate: (value: string) => {
      const password = getValues().password || getValues().new_password
      return value === password ? true : "The passwords do not match"
    },
  }

  if (isRequired) {
    rules.required = "Password confirmation is required"
  }

  return rules
}

type ApiErrorBody = {
  detail?: string | { msg: string }[]
}

export const handleError = (err: ApiError) => {
  const { showErrorToast } = useCustomToast()
  const errDetail = (err.body as ApiErrorBody)?.detail
  let errorMessage = "Something went wrong."
  if (typeof errDetail === "string") {
    errorMessage = errDetail
  } else if (Array.isArray(errDetail) && errDetail.length > 0) {
    errorMessage = errDetail[0].msg
  }
  showErrorToast(errorMessage)
}