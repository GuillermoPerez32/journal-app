import React from 'react'
import NoteAppBar from './NoteAppBar'

const NoteDetail = () => {
  return (
    <div className='notes__main-content'>
        <NoteAppBar/>
        
        <div className='notes__content'>
          <input
            type={'text'}
            placeholder="Some awesome title"
            className='notes__title-input'
            autoComplete='off'
          />

          <textarea
            placeholder='What happened today'
            className='notes__textarea'
          >
          </textarea>

          <div className='notes__image'>
            <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HM664gtdbHVkOXvWG4X3LAHaE7%26pid%3DApi&f=1&ipt=9635d615324c1930f3fcd87f0b6f73df343a31419f765b22e1ef90ac32233920&ipo=images'
            alt='imagen'
            />
          </div>
        </div>
    </div>
  )
}

export default NoteDetail