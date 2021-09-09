import './home.css'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/topbar/TopBar'

function Home() {
  return (
    <div>
      <TopBar />
      <div className='homeContainer'>
        <SideBar className='classnamesidebar' />
        <Feed />
        <RightBar />
      </div>
    </div>
  )
}

export default Home
