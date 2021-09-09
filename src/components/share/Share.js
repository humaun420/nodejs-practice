import { PermMedia, Room, Label, EmojiEmotions } from '@material-ui/icons'
import './share.css'

function Share() {
  return (
    <div className='share'>
      <div className='share-wrepper'>
        <div className='share-top'>
          <img
            className='share-profile-img'
            src='/assets/person/1.jpeg'
            alt='share-img'
          />
          <input placeholder='Whats In Your Mind' className='share-input' />
        </div>
        <hr className='share-hr' />
        <div className='share-bottom'>
          <div className='share-options'>
            <div className='share-option'>
              <PermMedia htmlColor='tomato' className='share-icon' />
              <span className='share-text'>Photo/Video</span>
            </div>
            <div className='share-option'>
              <Label htmlColor='blue' className='share-icon' />
              <span className='share-text'>TAg</span>
            </div>
            <div className='share-option'>
              <Room htmlColor='green' className='share-icon' />
              <span className='share-text'>Location</span>
            </div>
            <div className='share-option'>
              <EmojiEmotions htmlColor='goldenrod' className='share-icon' />
              <span className='share-text'>Feelings</span>
            </div>
          </div>
          <button className='share-btn'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
