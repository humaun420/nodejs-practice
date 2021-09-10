import OnlineFriend from './onlineFriend/OnlineFriend'
import './rightbar.css'

function RightBar() {
  return (
    <div className='rightbar'>
      <div className='rightbar-weapper'>
        <div className='birthday-container'>
          <img
            src='/assets/gift.png'
            alt='birthday-img'
            className='birthday-img'
          />
          <span className='birthday-text'>
            <b>apcd</b> and <b>3 other friends </b>hav birthday today
          </span>
        </div>
        <img src='/assets/ad.png' alt='rightbar-ad' className='rightbar-ad' />
        <h4 className='rightbar-title'>Online friends</h4>
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
      </div>
    </div>
  )
}

export default RightBar
