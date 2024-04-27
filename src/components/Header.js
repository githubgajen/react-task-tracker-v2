import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd                          }) => {
  // const onClick = () => {
  //   alert('What do you want to add khatee?')
  // }

  return (
    <header className='header'>
      <h2>{title}</h2>
      <Button 
            color={showAdd ? '  ':'green'} 
            text={ showAdd ? 'Close' : 'Add' } 
            onClick={onAdd}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'LIFEs TTask TTracker 3Gs'
}

Header.propTypes = {
  title:PropTypes.string.isRequired,
}

export default Header
