import cls from './TextField.module.scss'

const TextField = ({
  label,
  name,
  type = 'text',
  onChange,
  value,
  pattern
}) => {
  return (
    <div className={cls.textField}>
      <label htmlFor={label}>{label}</label>
      <input
        className={'uk-input'}
        id={label}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        pattern={pattern}
      />
    </div>
  )
}

export default TextField
