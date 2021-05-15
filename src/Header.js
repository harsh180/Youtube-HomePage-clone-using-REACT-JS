import React ,{useState} from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
function Header() {
    const [inputSearch,setInputSearch] = useState("");
    return (
        <div className="Header">
            <div className="right">
         <MenuIcon/>
         <Link to="/">
         <img src="yt.png" className="logoyt"/> 
         </Link>
           </div>
           <div className="middle">   
           <input  onChange={(e) => setInputSearch(e.target.value)}
             value={inputSearch}
              type ="text"
               placeholder="Search"/>
               <Link to={`/Search/${inputSearch}`}>
               <SearchSharpIcon className="header__inputButton"/>
               </Link>
           </div>
           <div className="left">
          <VideoCallIcon className="Header_icons"/>
           <AppsIcon className="Header_icons"/>
           <NotificationsRoundedIcon className="Header_icons"/>
           <Avatar/>
           </div>
        </div>
    )
}

export default Header
