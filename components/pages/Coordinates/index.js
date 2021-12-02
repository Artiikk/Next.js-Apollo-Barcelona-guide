import Button from '../../../components/Button'
import TextField from '../../../components/TextField'
import cls from './Coordinates.module.scss'

const Coordinates = ({
  userEmail,
  handleSubmit,
  handleChange,
  loading,
  values
}) => (
  <div className={'uk-width-1-2@m uk-width-1-1@s'}>
    <h1>You are logged in as: <b>{userEmail}</b></h1>
    <p>Please type the latitude and longitude:</p>
    <form className={cls.form} onSubmit={handleSubmit}>
      <TextField
        label={'Latitude'}
        name={'latitude'}
        onChange={handleChange}
        value={values.latitude}
      />

      <TextField
        label={'Longitude'}
        name={'longitude'}
        onChange={handleChange}
        value={values.longitude}
      />

      <Button
        type={'submit'}
        isLoading={loading}
        disabled={!values.latitude || !values.longitude}
      >
        Search
      </Button>
    </form>
  </div>
)

export default Coordinates
