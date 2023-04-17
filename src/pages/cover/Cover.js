import React from "react";
import { Link } from "react-router-dom";
import "./cover.css";
const Cover = () => {

  const Show = ()=>{
    const start = document.querySelector('.start')
    const authors = document.querySelector('.authors')
    const library = document.querySelector('.library')
    start.classList.toggle('show')
    authors.classList.toggle('show')
    library.classList.toggle('show')

  }

  return <div>
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
    <div className='btn1'><Link to="/home"><button className='btn'>Kirish </button></Link></div> 
      <h1>OʻRTA ASRLAR TARIXI</h1>
      
      <h2>ASOSIY TERMINLAR VA ТUSHUNCHALAR</h2>

<div id='WrapperC'>
<div className='cover2'>


    </div>
</div>
    


    </div>
    <div className="Cover00"></div>
    <div onClick={Show} className="icons"><i className="fa-solid fa-bars" ></i></div>
    <div className="start"><Link className="aaa" to="/home">Kirish</Link> </div>
    <div className="authors"><Link className="aaa" to="/authors">Mualliflar</Link></div> 
    <div className="library"><Link className="aaa" to="/library">Adabiyotlar</Link></div>
  </div>;
};

export default Cover;
