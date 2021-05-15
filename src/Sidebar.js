import React from 'react'
import Sidebar1 from './Sidebar1.js';
import './Sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar () {
    return (
        <div className="sidebar">
           <Sidebar1 selected Icon={HomeIcon} title="Home"/>
           <Sidebar1  Icon={WhatshotIcon} title="Trending"/>
           <Sidebar1  Icon={SubscriptionsIcon} title="Suscription"/>
           <hr></hr>
           <Sidebar1 Icon={VideoLibraryIcon} title="Library"/>
           <Sidebar1 Icon={HistoryIcon} title="History"/>
           <Sidebar1 Icon={ OndemandVideoIcon} title="Your videos"/>
           <Sidebar1 Icon={ WatchLaterIcon} title="Watch later"/>
           <Sidebar1 Icon={ThumbUpAltIcon} title="Liked videos"/>
           <Sidebar1 Icon={ExpandMoreIcon} title="Show more"/>
        </div>
    )
}

export default Sidebar 
