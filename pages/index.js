import { useState } from 'react'
import MainLayout from '@/layout/Main'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { withIronSessionSsr } from 'iron-session/next'
import { routesMap } from '@/utils/helpers/links'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import Link from 'next/link'
import cls from './index.module.scss'

export default function Home({ user }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      const { email, password } = values

      setLoading(true)

      await fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })

      setLoading(false)
      router.push(routesMap.transport)
    }
  })

  return (
    <MainLayout
      title={'Home page'}
      description={'Login and Password'}
      isAuthorized={user?.isAuthorized}
    >
      <div className={cls.loginWrapper}>
        {user && (
          <>
            <h1>You are logged in as: <b>{user.email}</b></h1>
            <p>Please visit <Link href={routesMap.transport}><a>Transport</a></Link> link to see more details</p>
          </>
        )}
        {!user && (
          <form className={cls.form} onSubmit={handleSubmit}>
            <TextField
              label={'Email'}
              type={'email'}
              name={'email'}
              onChange={handleChange}
              value={values.email}
            />
            <TextField
              label={'Password'}
              type={'password'}
              name={'password'}
              onChange={handleChange}
              value={values.password}
            />
            <Button 
              variant={'uk-button-primary'} 
              type={'submit'}
              isLoading={loading}
              disabled={!values.email || !values.password}
            >
              Submit
            </Button>
          </form>
        )}
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    try {
      if (req.session.user) {
        return {
          props: { user: req.session.user }
        }
      }
  
      return { props: {} }
    } catch(e) {
      console.log('e', e)
    }
  },
  {
    cookieName: 'MYSITECOOKIE',
    password: process.env.COOKIE_PASSWORD
  }
)