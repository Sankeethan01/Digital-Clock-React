import profilepic from './assets/profilepic.jpg'
import './Card.css'

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={profilepic} alt="" />
      <h2 className='card-name'>Sankeethan</h2>
      <p className='card-about'>Passionate Software Engineer</p>
    </div>
  )
}

export default Card
