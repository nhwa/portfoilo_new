import React,{ useEffect, useRef, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import Typewriter from "typewriter-effect";
import { dataportfolio, introdata, meta } from "../../content_option";
import { ShowModal } from "../../components/showmodal";
import { Component } from "react";




export const Home = () => {
const holewrapperRef = useRef(null);
const [coverClicked,setcoverClicked] =useState(0);
const [coords, setCoords] = useState({x: 0, y: 0});
const [IsOpenModal, setModalOpen] = useState(false);
const [selectedData, setSelectedData] =useState(null);
const [scrollposition, setScrollPosition] =useState(null);

const setCursorPosition = (e) => setCoords({x: e.clientX - holewrapperRef.current.offsetWidth / 2, y: e.clientY - holewrapperRef.current.offsetWidth / 2});
const setScrollGrid = () => setScrollPosition(((window.pageYOffset / (document.querySelector("main").offsetHeight - document.body.offsetHeight)) * -100) + "%");

const closeModal = () => setModalOpen(false);


useEffect(() => {
  document.addEventListener('scroll', (e)=> setScrollGrid());
  window.addEventListener('mousemove', (e) => setCursorPosition(e));
  return ()=>{
    window.removeEventListener('mousemove', (e)=> setCursorPosition(e));
    document.removeEventListener('scroll', (e)=> setScrollGrid());
  }
}, [])

return (
  <>
  {/* <div onClick={() => setcoverClicked(1)} className= {coverClicked? "holewrapper none" : "holewrapper"} ref={holewrapperRef}
  style={{left: coords.x, top :coords.y}}> */}
    <div className={ coverClicked? "main nomask" : "main" }>
      { coverClicked?  null : <h1> FIND MY COLOR </h1>}
      <div class="cards" style={{'--scroll': scrollposition}}>
      { dataportfolio.map(data => {
        return (
        <a class="stack">
          <div class="card top" >
            <div class="items">
              <div  class="item">
                <img key= {data.id} src={process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir+'/'+data.main_img.src } alt={data.main_img.alt} />
              </div>
              <h2>
                <strong key= {data.id}>{ data.icon }</strong> Project
              </h2>
              <h3 key= {data.id}>{ data.name }</h3>
            </div>
          </div>
          <div class="card mid-top">
            <div class="items">
              <div class="item">
                <img key= {data.id} src= {process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir+'/'+data.main_img.src } alt={data.main_img.alt} />
              </div>
            </div>
          </div>
          <div class="card mid-bottom">
            <div class="items">
            <div class="item">
                <img key= {data.id} src= {process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir+'/'+data.main_img.src } alt={data.main_img.alt} />
              </div>
            </div>
          </div>
          <div class="card bottom">
            <div class="items">
            <div class="item">
                <img key= {data.id} src= {process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir+'/'+data.main_img.src } alt={data.main_img.alt} />
              </div>
            </div>
          </div>
          <div class="card shadow"></div>
        </a>
          );
        })}
      </div>
   </div>
{/* </div> */}
{/* { IsOpenModal ?
<ShowModal data={selectedData} openning={true} />
: null  
} */}
</>
);
};




import React,{ useEffect, useRef, useState } from "react";
import { dataportfolio } from "../../content_option";
import { Link } from "react-router-dom";
import { Portfolio } from "../portfolio";
import "./style.css";


export const Home = React.memo(() => {
const holewrapperRef = useRef(null);
const [holeClicked, setholeClicked] = useState(0);
const [coords, setCoords] = useState({x: 0, y: 0});
const [scrollPosition, setScrollPosition] =useState(null);

const mainRef = useRef();

// const scrollToElement = () => {
//   window.scrollTo({
//       top: elementRef.current.offsetTop - 110,
//       behavior: 'smooth'
//   })
// }
const setCursorPosition = (e) => setCoords({x: e.clientX - holewrapperRef.current.offsetWidth / 2, y: e.clientY - holewrapperRef.current.offsetWidth / 2});
const setScrollGrid = (e) =>  {
setScrollPosition(((window.pageYOffset / (mainRef.current.offsetHeight - document.body.offsetHeight)) * -100) + "%");
}

useEffect(() => {
document.addEventListener('scroll', (e)=> mainRef.current && setScrollGrid());
window.addEventListener('mousemove', (e) => setCursorPosition(e));
return ()=>{
  window.removeEventListener('mousemove', (e)=> setCursorPosition(e));
  document.removeEventListener('scroll', (e)=> setScrollGrid());
}
}, [])

return (
// 25개는 안넘을듯!
<div ref={holewrapperRef} className={ holeClicked ? "holewrapper none" : "holewrapper"} 
onClick={()=> setholeClicked(1)} style={{left: coords.x, top :coords.y}}>
  <div className={holeClicked ? "main_section nomask" : "main_section"} ref={mainRef} >
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
</div>
)
});