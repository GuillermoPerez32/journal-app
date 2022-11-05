import React from 'react'

const NoteAppBar = () => {
  return (
    <div className='notes__appbar'>
        <span> 28 de agosto 2022</span>
        <div>
            <button className='btn'>
                Picture
            </button>

            <button className='btn'>
                Save
            </button>
        </div>
    </div>
  )
}

export default NoteAppBar