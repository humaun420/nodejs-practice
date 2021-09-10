import { MoreVert } from '@material-ui/icons'
import './post.css'

function Posts() {
  return (
    <div className='post'>
      <div className='post-wrapper'>
        <div className='post-top'>
          <div className='post-top-left'>
            <img
              src='/assets/person/5.jpeg'
              alt='post-profile-omg'
              className='post-profile-img'
            />
            <span className='post-profole-name'>Humaun Kabir</span>
            <span className='post-time'>5 minute ago</span>
          </div>
          <div className='post-top-righr'>
            <MoreVert />
          </div>
        </div>
        <div className='post-center'>
          <span className='post-text'>Hey ! this is my first post</span>
          <img src='/assets/post/7.jpeg' alt='post-img' className='post-img' />
        </div>
        <div className='post-bottom'>
          <div className='post-bottom-left'>
            <img src='/assets/like.png' alt='like' className='reaction' />
            <img src='/assets/heart.png' alt='love' className='reaction' />
            <span className='like-count'>32 people like it</span>
          </div>
          <div className='post-bottom-right'>
            <span className='post-comment'>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
