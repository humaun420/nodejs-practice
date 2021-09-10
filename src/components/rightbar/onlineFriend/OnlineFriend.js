import './onlinefriend.css'

function OnlineFriend() {
  return (
    <ul className='online-friend-list'>
      <li className='online-friend'>
        <div className='friend-img-container'>
          <img
            src='/assets/person/4.jpeg'
            alt='frirnd-img'
            className='friend-img'
          />
          <span className='online'></span>
        </div>
        <span className='friend-name'>John Doe</span>
      </li>
    </ul>
  )
}

export default OnlineFriend
