import React from 'react'
import './DescriptionBox.css';


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Descrition</div>
            <div className='descriptionbox-nav-box fade'>Reviews(8)</div>
        </div>
      <div className='descriptionbox-description'>
        <p>Alimentati-va proiectele creative cu cel mai puternic laptop XPS de pana acum. Beneficiati de procesoare Intel® Core™ de pana la a 13-a generatie, grafica NVIDIA® GeForce RTX™ seria 40 si memorie DDR5, care are o viteza de ceas cu pana la 50% mai mare decat memoria DDR4.
Aplicatia Dell Performance va permite sa personalizati performanta laptopului dvs. cu patru moduri: silentios, ultraperformant, rece sau optimizat. Modul optimizat permite cel mai bun echilibru intre performanta si termic. In modul ultra-performant, este posibil ca sistemul sa functioneze mai cald si ventilatoarele sa fie mai zgomotoase. Modul rece va limita temperatura sau va reduce zgomotul ventilatoarelor, ceea ce poate avea un impact asupra performantei sistemului.</p>
<p>De asemenea, un slot pentru card SD complet face ca XPS 17 sa fie ideal pentru fotografie, deoarece poate importa cu usurinta imagini RAW.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
