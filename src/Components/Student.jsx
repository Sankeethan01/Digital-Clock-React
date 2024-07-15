import './Student.css'
import propTypes from 'prop-types'

const Student = (props) => {
 
   const welcomeMsg = <h1>You Logged In {props.username}</h1>

   const promptMsg =  <h1>Logged in First</h1>

  return(
   props.isLoggedIn ?  welcomeMsg:promptMsg
  );

}
Student.propTypes ={
  isLoggedIn:propTypes.bool,
  username:propTypes.string,
}
Student.defaultProps={
 isLoggedIn:false,
 username:"Dina paddu",
}
export default Student