  import React,{ useEffect, useRef, useState } from "react";
  import { dataportfolio } from "../../content_option";
  import { Link } from "react-router-dom";
  import { Portfolio } from "../portfolio";
  import "./style.css";


export const Home = React.memo(() => {
const holewrapperRef = useRef(null);
const [coords, setCoords] = useState({x: 0, y: 0});
const [scrollPosition, setScrollPosition] =useState(null);

const mainRef = useRef();

// const scrollToElement = () => {
//   window.scrollTo({
//       top: elementRef.current.offsetTop - 110,
//       behavior: 'smooth'
//   })
// }
// const setCursorPosition = (e) => setCoords({x: e.clientX - holewrapperRef.current.offsetWidth / 2, y: e.clientY - holewrapperRef.current.offsetWidth / 2});
const setScrollGrid = (e) =>  setScrollPosition(((window.pageYOffset / (mainRef.current.offsetHeight - document.body.offsetHeight)) * -100) + "%");

useEffect(() => {
  document.addEventListener('scroll', (e)=> mainRef.current && setScrollGrid());
  // window.addEventListener('mousemove', (e) => setCursorPosition(e));
  return ()=>{
    // window.removeEventListener('mousemove', (e)=> setCursorPosition(e));
    document.removeEventListener('scroll', (e)=> setScrollGrid());
  }
}, [])

  return (
  // 25개는 안넘을듯!
  <div className="main_section" ref={mainRef} >
    <div className="cards" style={{'--scroll': scrollPosition}}>
      { dataportfolio.map(data =>{
        return(
          <Link key={data.id} className="stack" to={"/portfolio"}  >
            <div className="card top" >
              <div className="items">
                <div className="items_info">
                  <img src={process.env.PUBLIC_URL + '/imgs/layout/'+data.icon+'_icon.png' } alt={data.icon+'_icon.png'} />
                  <h2>
                    <strong>{ data.icon } Project</strong> 
                  </h2>
                  <h3>{ data.name }</h3>
                </div>
                <img className="item_img" src={process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir+'/'+data.card_img.src } alt={data.card_img.alt} />
              </div>
            </div>
            <div className="card mid-top">
              <div className="items">
                <div className="item">
                  <img className="item_img" key= {data.id} src= {process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir+'/'+data.card_img.src } alt={data.card_img.alt} />
                </div>
              </div>
            </div>
            <div className="card mid-bottom">
              <div className="items">
              <div className="item">
                  <img className="item_img" key= {data.id} src= {process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir+'/'+data.card_img.src } alt={data.card_img.alt} />
                </div>
              </div>
            </div>
            <div className="card bottom">
              <div className="items">
              <div className="item">
                  <img className="item_img" key= {data.id} src= {process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir+'/'+data.card_img.src } alt={data.card_img.alt} />
                </div>
              </div>
            </div>
            <div className="card shadow"></div>
          </Link>
        )
      })}
    </div>
  </div>
  )
});