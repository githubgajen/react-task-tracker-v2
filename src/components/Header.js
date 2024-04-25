import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () => {
    alert('What do you want to add masale?')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'TTask TTracker 3Gs'
}

Header.propTypes = {
  title:PropTypes.string.isRequired,
}

export default Header
