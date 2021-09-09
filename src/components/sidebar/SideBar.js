import './sidebar.css'
import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledRounded,
  RssFeed,
  School,
  WorkOutline,
} from '@material-ui/icons'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <RssFeed />
            <span className='sidebar-list-item-text'>Feeds</span>
          </li>
          <li className='sidebar-list-item'>
            <Chat />
            <span className='sidebar-list-item-text'>Chats</span>
          </li>
          <li className='sidebar-list-item'>
            <PlayCircleFilledRounded />
            <span className='sidebar-list-item-text'>Videos</span>
          </li>
          <li className='sidebar-list-item'>
            <Group />
            <span className='sidebar-list-item-text'>Groups</span>
          </li>
          <li className='sidebar-list-item'>
            <Bookmark />
            <span className='sidebar-list-item-text'>Bookmarks</span>
          </li>
          <li className='sidebar-list-item'>
            <HelpOutline />
            <span className='sidebar-list-item-text'>Questiions</span>
          </li>
          <li className='sidebar-list-item'>
            <WorkOutline />
            <span className='sidebar-list-item-text'>Jobs</span>
          </li>
          <li className='sidebar-list-item'>
            <Event />
            <span className='sidebar-list-item-text'>Events</span>
          </li>
          <li className='sidebar-list-item'>
            <School />
            <span className='sidebar-list-item-text'>Courses</span>
          </li>
        </ul>
        <button className='sidebar-button'>Show more</button>
        <hr className='sidebar-hr' />
        <ul className='sidebar-friend-list'>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
          <li className='sidbar-friend'>
            <img
              src='/assets/person/3.jpeg'
              alt='sidebar-friend-img'
              className='sidebar-friend-img'
            />
            <span className='sidbar-friend-name'>John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
