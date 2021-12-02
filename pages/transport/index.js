import { useEffect } from 'react'
import MainLayout from '../../layout/Main'
import { GET_STATIONS_QUERY } from './queries'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { routesMap } from '../../utils/helpers/links'
import { withIronSessionSsr } from 'iron-session/next'
import Coordinates from '../../components/pages/Coordinates'
import Stations from '../../components/pages/Stations'
import { useFormik } from 'formik'

export default function TransportPage({ user, stations }) {
  const router = useRouter()
  const { query } = router
  const [getData, { data, loading }] = useLazyQuery(GET_STATIONS_QUERY, {
    fetchPolicy: 'cache-and-network'
  })

  const { handleSubmit, handleChange, values } = useFormik({
    enableReinitialize: true,
    initialValues: { latitude: query.latitude || '', longitude: query.longitude || '' },
    onSubmit: () => {
      const { latitude, longitude } = values

      getData({ latitude: Number(latitude), longitude: Number(longitude) })
      router.push({ query: { latitude, longitude } })
    }
  })

  useEffect(() => !user && router.push(routesMap.homepage), [user])
  if (!user) return null

  return (
    <MainLayout
      title={'Transport page'}
      description={'This page represents transport api'}
      isAuthorized={user?.isAuthorized}
    >
      <div className={'uk-flex uk-flex-between uk-flex-wrap'}>
        <Coordinates
          userEmail={user?.email}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          loading={loading}
          values={values}
        />
        <Stations stations={data?.stations || stations} />
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, query }) {
    try {
      // const { data } = await client.query({
      //   query: GET_STATIONS_QUERY,
      //   skip: true,
      //   variables: {
      //     latitude: Number(query.latitude),
      //     longitude: Number(query.longitude)
      //   }
      // })

      if (req.session.user) {
        return {
          props: { user: req.session.user }
        }
      }

      return { props: {} }
    } catch (e) {
      console.log('e', e)
    }
  },
  {
    cookieName: 'MYSITECOOKIE',
    password: process.env.COOKIE_PASSWORD
  }
)