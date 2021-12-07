import { numbersOnlyRegExp } from './regExp'

export const isOnlyNumber = (value) => numbersOnlyRegExp.test(value)

export const handleNumbers = ({ target: { value } }, setField) => {
  if (isNaN(value)) return

  if (isOnlyNumber(value) || value === '') {
    setField(value)
  }
}