import cx from 'classnames'
import cls from './Button.module.scss'

const Button = ({
  type,
  variant = 'uk-button-primary',
  children,
  isLoading,
  disabled
}) => (
  <button className={cx(cls.button, variant)} type={type} disabled={disabled}>
    {isLoading ? <div className={cls.spinner} data-uk-spinner={''}></div> : children}
  </button> 
)

export default Button
