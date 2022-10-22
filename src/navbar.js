import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    const [state, setstate]=useState(null)
    const book=useRef(null)
    const btn=useRef(null)
    useEffect(()=>{
      setstate(true)
      const show=()=>{
        if (book['current'].className==='booknow'){
          book['current'].className='booknow-show'
        }else{book['current'].className='booknow'}
        // alert('alert')

      }
      btn['current'].addEventListener('click',show)

      
    },[state])

    return (
        <nav className="navbar">
            <section className="top-nav">
                <div className="logo">
                    <i className="fa-solid fa-camera"></i>16kstudio
                    {/* <img src="/photos/pic 222.png" alt="" /> */}
                </div>
                <div className="ff">
                  <button ref={btn} className='bookbtn'>Book Now!!!</button>
                  <div ref={book} className="booknow">
                    <ul>
                      <li><i className="fa-brands fa-whatsapp"></i> whatsapp</li>
                      <li><a href="https://instagram.com/16k_studios?igshid=YmMyMTA2M2Y="> <i className="fa-brands fa-instagram"></i> instagram</a></li>
                      <li><a href="tel:08068635849"><i className="fa-solid fa-phone"></i> call/text</a></li>
                      <li><a href="mailto:rukemeniemogha38@gmail.com"><i className="fa-solid fa-envelope"></i>Mail</a></li>
                    </ul>
                  </div>
                </div>
            
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
                </label>
                <ul className="menu">
                  <li><Link to=''>Home</Link> </li>
                  <li><Link to=''>Contact</Link> </li>
                  <li><Link to=''>About</Link> </li>
                </ul>
            </section>



            {/* <nav className="navbar navbar-expand-lg bg-light" style={style}>
                <div className="container-fluid">
                  <a className="navbar-brand" href="#"><h2><i className="fa-solid fa-camera"></i>16kStudio</h2></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                      <a className="nav-link" href="#">Contact</a>
                      <a className="nav-link" href="#">About</a>
                    </div>
                  </div>
                </div>
            </nav> */}
        </nav>
     );
}
 
export default NavBar;