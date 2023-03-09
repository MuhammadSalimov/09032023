import React from "react";
import "./cover.css";
const Cover = () => {

  const Show = ()=>{
    const start = document.querySelector('.start')
    const authors = document.querySelector('.authors')
    start.classList.toggle('show')
    authors.classList.toggle('show')


  }

  return <>
      <div className='Cover'>
      <div className='div' >
      <p> E </p>
      <p> L</p>
      <p>E</p>
      <p>E</p>
      <p>K</p>
      <p>T</p>
      <p>R</p>
      <p>O</p>
      <p>N</p>
      <p className='LLL'>L</p>
      <p className='LLL'>U</p>
      <p className='LLL'>G'</p>
      <p className='LLL'>A</p>
      <p className='LLL'>T</p>
      </div>
      <div className='div111' >
      <p> E </p>
      <p> L</p>
      <p>E</p>
      <p>E</p>
      <p>K</p>
      <p>T</p>
      <p>R</p>
      <p>O</p>
      <p>N</p>
      <p className='LLL'>L</p>
      <p className='LLL'>U</p>
      <p className='LLL'>G'</p>
      <p className='LLL'>A</p>
      <p className='LLL'>T</p>
      </div>
    <div className='btn1'><a href='/home'><button className='btn'>Kirish </button></a></div> 
      <h1>OʻRTA ASRLAR TARIXI</h1>
      
      <h2>ASOSIY TERMINLAR VA ТUSHUNCHALAR</h2>

<div id='WrapperC'>
<div className='cover2'>


    </div>
</div>
    


    </div>
    <div className="Cover00"></div>
    <div onClick={Show} className="icons"><i className="fa-solid fa-bars" ></i></div>
    <div className="start"> <a href="/home">Kirish</a> </div>
    <div className="authors"><a href="/authors">Mualliflar</a></div>

  </>;
};

export default Cover;
