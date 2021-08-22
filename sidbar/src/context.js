import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({children})=>{
const [isSidebarOpen,setIsSidebarOpen]=useState(false)
const [isModalOpen,setIsModalOpen]=useState(false)

const openSidbar=()=>{
    setIsSidebarOpen(true)
}
const openModal=()=>{
    setIsModalOpen(true)
}
const closeSidbart=()=>{
    setIsSidebarOpen(false)
}
const closeModal=()=>{
    setIsModalOpen(false)
}



return <AppContext.Provider value={{isSidebarOpen,isModalOpen,openSidbar,closeSidbart,openModal,closeModal}}>{children}</AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}
