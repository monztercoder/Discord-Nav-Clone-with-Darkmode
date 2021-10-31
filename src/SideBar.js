import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill,BsFillMoonStarsFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import useDarkMode  from './useDarkMode'

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col dark:bg-gray-900 bg-white dark:text-white shadow-lg">
            <SideBarIcon icon={<FaFire size="28" />} />
        
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        
        <SideBarIcon icon={<BsGearFill size="22" />} />
        
        <Button />
        </div>
    )
}

const SideBarIcon = ({icon,text = "ToolTip" }) => {
    
    return (
        <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    )
    
}


const Button = ({text="DarkMode"}) => {

    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
  
    return (
      
     <div onClick={handleMode} className="sidebar-icon group">
         <BsFillMoonStarsFill /> 

         <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
     </div>
      
    )
  }

export default SideBar
