import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () => {
    alert('What do you want to add khatee?')
  }

  return (
    <header className='header'>
      <h2>{title}</h2>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'LLIFEs TTask TTracker 3Gs'
}

Header.propTypes = {
  title:PropTypes.string.isRequired,
}

export default Header
