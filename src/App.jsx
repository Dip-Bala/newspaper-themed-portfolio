import React from 'react'
import Header from './components/header/Header'
import LatestNews from './container/LatestNews'
import Contacts from './container/Contacts'
import ProjectComponenet from './components/projects/ProjectComponent'

export default function App(){
  return(
    <div>
      <Header/>
      <LatestNews />
      <ProjectComponenet />
      <Contacts />
    </div>
  )
}