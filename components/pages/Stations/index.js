import { googleSearch } from '../../../utils/helpers/links'
import { splitByUpperCase } from '../../../utils/helpers/strings'
import cx from 'classnames'
import cls from './Stations.module.scss'

const Stations = ({ stations }) => {
  return (
    <div className={cx(`uk-width-1-2@m uk-width-1-1@s uk-margin-large-top uk-padding-small ${cls.station}`)}>
      {stations?.edges?.map(({ node: { id, name, __typename } }) => (
        <div key={id} className={'uk-card uk-card-hover'}>
          <span>{splitByUpperCase(__typename)}</span>
          &nbsp;-&nbsp;
          <a
            href={googleSearch(`${splitByUpperCase(__typename)} ${name}`)}
            target={'_blank'}
          >
            {name}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Stations
