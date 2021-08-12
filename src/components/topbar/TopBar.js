import { Chat, Notifications, Person, Search } from '@material-ui/icons'
import './topbar.css'

function TopBar() {
  return (
    <div className='topbar_container'>
      <div className='topbar_left'>
        <span className='logo'>Lama Social</span>
      </div>
      <div className='topbar_center'>
        <div className='searchbar'>
          <Search className='search_icon' />
          <input placeholder='Search What You Need' className='search_input' />
        </div>
      </div>
      <div className='topbar_right'>
        <div className='topbar_links'>
          <span className='topbar_link'>Homepage</span>
          <span className='topbar_link'>Timeline posts</span>
        </div>
        <div className='topbar_icons'>
          <div className='topbar_icon__item'>
            <Chat />
            <span className='topbar_icon__badge'>1</span>
          </div>
          <div className='topbar_icon__item'>
            <Notifications />
            <span className='topbar_icon__badge'>1</span>
          </div>
          <div className='topbar_icon__item'>
            <Person />
            <span className='topbar_icon__badge'>1</span>
          </div>
        </div>
        <img
          src='/assets/person/1.jpeg'
          alt='profile'
          className='topbar_imag'
        />
      </div>
    </div>
  )
}

export default TopBar
