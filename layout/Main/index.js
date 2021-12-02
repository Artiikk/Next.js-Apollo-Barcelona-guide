import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CustomHead from '../../components/Head'
import cls from './Main.module.scss'

function MainLayout({ 
  children, 
  title = 'Rozetka main page', 
  description,
  isAuthorized
}) {
  return (
    <>
      <CustomHead title={title} description={description} />

      <div className={cls.layout}>
        <Header isAuthorized={isAuthorized} />
        <div className={'container'}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout