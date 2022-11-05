import React from 'react'
import NoteDetail from '../components/note/NoteDetail'
// import NothingSelected from '../components/NothingSelected'
import SideBar from '../components/SideBar'

const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
      
      <SideBar/>
      <main>
        {/* <NothingSelected/> */}
        <NoteDetail/>
      </main>
    </div>
  )
}

export default JournalScreen