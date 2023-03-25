import React from 'react'
import Css from './Authors.module.css'
const Authors = () => {
  return (<section>
        <div className={Css.container}>
            <div className={Css.title}>
               <b className={Css.h111}> TUZUVCHILAR HAQIDA MA'LUMOT</b>
            </div>
            <div className={Css.dflex}>
                <div className={Css.col1}>
                    <img src="./Autors.jpg" alt="img" />
                </div>
                <div className={Css.col2}>
                   <div>
                    <b className={Css.h222}>
                        USAROV SIROJIDDIN RAXMATULLAYEVICH
                    </b>
                    <p className={Css.ppp}>
                        Sharof Rashidov nomidagi Samarqand davlat universiteti, Tarix fakulteti, "Jahon tarixi" kafedrasi o'qituvchisi, tarix fanlari bo'yicha falsafa doktori.
                    </p>
                   </div>
                </div>
            </div>
        </div>
    </section>
  

    
  )
}

export default Authors