import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'


// show-sidebar

const Sidebar = () => {
    const {isSidebarOpen,closeSidbart}=useGlobalContext()
 return (
     <aside className={`${isSidebarOpen ?"sidebar show-sidebar":"sidebar"}`} >
         <div className="sidebar-header">
            <img src={logo} alt='coding addict' />
            <button className='close-btn' onClick={closeSidbart}>
                <FaTimes/>
            </button>
        </div>
        <ul className='links' >
            {links.map((link)=>{
                const {id,url,text,icon}=link
                return <li key={id}>
            <a href={url}>
            {icon}
            {text}
            </a>
                    </li>
                })}
         </ul>  
         <ul className='social-icons'>
            {social.map((link)=>{
                const {id,url,icon}=link
                return(
                <li key={id}>
                    <a href={url}>{icon}</a>
                </li>
                )
            })}
        </ul> 
    </aside>      
 )
}

export default Sidebar