import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

  const onClick = () => {
    alert('Clickeddd')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'TTask TTracker'
}

//to make code robust and catch error before it happens
Header.propTypes = {
  title:PropTypes.string.isRequired,
}


//CSS in JS
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'green' 
// }

export default Header

// <header>
//       <h1>{title}</h1>
//       { <h1 style={ headingStyle }>{title}</h1> }
//       { <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1> }
//       { <h1>{props.title}</h1> }
//     </header>