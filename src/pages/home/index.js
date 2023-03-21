
import React,{ useEffect, useRef, useState } from "react";
import { dataportfolio } from "../../content_option";
import { Link } from "react-router-dom";
import { Portfolio } from "../portfolio";
import { Modal } from "../../components/modal";
import "./style.css";


export const Home = React.memo(() => {

const [scrollPosition, setScrollPosition] = useState(0);
const [selectedKey, setselectedKey] = useState(null);
const [modalOpen, setModalOpen] = useState(false);

const mainRef = useRef();

const setScrollGrid = (e) =>  {
  setScrollPosition(((window.pageYOffset / (mainRef.current?.offsetHeight - document.body.offsetHeight)) * -100) + "%")
}

//scroll 값이 없데이트 될때만
useEffect(() => {
  window.addEventListener('scroll', (e)=> setScrollGrid());
  document.addEventListener('resize', (e)=> setScrollGrid());

return ()=>{ 
  window.removeEventListener('scroll', (e)=> setScrollGrid());
  document.removeEventListener('resize', (e)=> setScrollGrid());
}
}, [scrollPosition])

const openModal = (selectedKey) => {
  setselectedKey(selectedKey);
  setModalOpen(true);
  document.body.style.overflow = "hidden";
};
const selecteditem = dataportfolio.find(data => data.id === selectedKey);
const closeModal = () => {
  document.body.style.overflow = "auto";
  setModalOpen(false);
}

return (
  <div className="main_section" ref={mainRef} >
    <div className="cards" style={{'--scroll': scrollPosition}}>
      { dataportfolio.map(data =>{
        return(
          <div key={data.id} className="stack" onClick={()=> openModal(data.id)} >
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
            <div className="card shadow"></div>
          </div>
        )
      })}
    </div>
    {
    selectedKey !== null &&
      <Modal open={modalOpen} close={closeModal}>
        <main> 
          <div className="content">
            <div className="content_title">
              <h1 key={selectedKey.id}>{selecteditem.name}</h1>
              <span key={selectedKey.id} >{selecteditem.description}</span>
            </div>
            <div className= "content_info">
              <div className="content_icon">
                {(() => {
                  switch(selecteditem.icon) {
                    case 'web' :
                      return <img src={process.env.PUBLIC_URL + '/imgs/layout/web_icon.png'} alt="web_icon"/>
                    case 'app' :
                      return <img src={process.env.PUBLIC_URL + '/imgs/layout/app_icon.png'} alt="app_icon" />
                    case 'design' :
                      return <img src={process.env.PUBLIC_URL + '/imgs/layout/design_icon.png'} alt="design_icon" />
                    case 'ai' :
                      return <img src={process.env.PUBLIC_URL + '/imgs/layout/ai_icon.png'} alt="ai_icon" />
                    default :
                      return <img src={process.env.PUBLIC_URL + '/imgs/layout/design_icon.png'} alt="design_icon" />
                  }
                })()}
                <h2 key={selectedKey.id}>{selecteditem.work} Project</h2>
                <span key={selectedKey.id}>{selecteditem.skills}</span>
              </div>
              {(() => {
                  switch(selecteditem.mockup) {
                    case 'web' :
                      return <a key={selectedKey.id} className= "content_mockup web" href={selecteditem.link}><div>
                      <img key={selectedKey.id} src={process.env.PUBLIC_URL + '/imgs/contents/' + selecteditem.dir + '/'+ selecteditem.main_img.src} alt="selecteditem.main_img.alt" />
                    </div><img className="wrapper" src={process.env.PUBLIC_URL + '/imgs/layout/web_wrapper.png'} alt="web_wrapper" /></a>
                    case 'app' :
                      return <a key={selectedKey.id} className= "content_mockup app" href={selecteditem.link}><div>
                      <img src={process.env.PUBLIC_URL + '/imgs/contents/' + selecteditem.dir + '/'+ selecteditem.main_img.src} alt="selecteditem.main_img.alt"/>
                    </div><img className="wrapper" src={process.env.PUBLIC_URL + '/imgs/layout/app_wrapper.png'} alt="app_wrapper"/></a>
                    case 'book' :
                      return <a key={selectedKey.id} className= "content_mockup book" href={selecteditem.link}><div>
                      <img src={process.env.PUBLIC_URL + '/imgs/contents/' + selecteditem.dir + '/'+ selecteditem.main_img.src} alt="selecteditem.main_img.alt"/>
                    </div></a>
                    default :
                    //list
                    return <div className="setrow">
                    { selecteditem.main_img.map(list => { return(
                    <a key={list.src} className= "content_mockup list" href={list.link}><div>
                    <img src={process.env.PUBLIC_URL + '/imgs/contents/'+ selecteditem.dir + '/'+ list.src } alt={list.alt} /> 
                    </div></a>
                    )}) 
                    }</div>
                  }
              })()}
            </div>
           
          </div>
        </main>
      </Modal>  
  }
  </div>
  
)
});