import { routesMap } from '../../utils/helpers/links'
import Link from 'next/link'
import cls from './Header.module.scss'

export default function Header({ isAuthorized }) {
  const navbarData = [
    { location: routesMap.homepage, name: 'Main' }
  ]

  const navbarLoggedInData = [
    { location: routesMap.homepage, name: 'Main' },
    { location: routesMap.transport, name: 'Transport' }
  ]

  const currentNavbarData = isAuthorized ? navbarLoggedInData : navbarData

  return (
    <header className={cls.header}>
      <nav className={'uk-navbar'} uk-navbar={'true'}>
        <ul className={cls.navBarItems}>
          {currentNavbarData.map(({ location, name }) => (
            <li key={name}>
              <Link href={location}><a>{name}</a></Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
