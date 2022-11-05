import React from 'react'

const JournalEntry = ({num}) => {
  return (
    <div className='journal__entry pointer'>

        <div 
        className='journal__entry-picture'
        style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-9CoqniS11cI%2FV_ZpfAF8g4I%2FAAAAAAAAXB4%2FaMV_XzRLg2M_LPfKoTSAqX8gU5rhxR99QCLcB%2Fs1600%2Fespectaculares-vistas-paisajes-naturales_05.jpg&f=1&nofb=1&ipt=685008e1fa4678f5c481f18b730178711a7733f1cb85fd78c98a436c054fce4d&ipo=images)'
        }}
        >
        </div>

        <div 
        className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo dia
            </p>

            <p className='journal__entry-content'>
                lorem ipsum mdasdm asdmasdm asmdasmn nd ndadn dshd s bhsa basddba bahdb hdabhd lorem ipsum mdasdm asdmasdm asmdasmn
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Mon</span>
            <h4>30</h4>
        </div>
    </div>
  )
}

export default JournalEntry