import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h2>{title}</h2>
      { location.pathname === '/' && (
      <Button 
            color={showAdd ? '  ':'green'} 
            text={ showAdd ? 'Close' : 'Add' } 
            onClick={onAdd}
      />)}
    </header>
  )
}

Header.defaultProps = {
  title: 'TTask TTracker'
}

Header.propTypes = {
  title:PropTypes.string.isRequired,
}

export default Header
