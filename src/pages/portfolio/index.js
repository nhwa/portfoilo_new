import React, {useState} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button  } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Modal } from "../../components/modal";
import Typewriter from "typewriter-effect";

export const Portfolio = (props) => {
  const [selectedKey, setselectedKey] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollbarNone, setScrollbarNone] = useState(false);

  const openModal = (selectedKey) => {
    setselectedKey(selectedKey);
    setModalOpen(true);
    setScrollbarNone(true);
  };
  const selecteditem = dataportfolio.find(data => data.id === selectedKey);
  const closeModal = () => setModalOpen(false);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-5">
          <Col lg="8">
            <h1 className="display-4 mb-4 title"> 
              <Typewriter
                    options={{
                      strings: [
                        "Portfolio"
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
              </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map(data => {
            return (
              <div key={data.id} className="po_item"  onClick={()=> openModal(data.id)} >
               {data.main_img.length >=2 
                ? data.main_img.map(list => { 
                  return(
                  <img key={list.src} src={process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir + '/'+ list.src } alt={list.alt} /> 
                  )}) 
                : <img src={process.env.PUBLIC_URL + '/imgs/contents/'+ data.dir + '/'+ data.main_img.src } alt={data.main_img.alt} />}
                <div className="description" >
                  <h3>{data.name}</h3>
                  <h5>{data.project}</h5>
                </div>
              </div>
            );
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
                    {/* content_icon */}
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
                      <h2 key={selectedKey.id}>{selecteditem.project}</h2>
                      <span key={selectedKey.id}>{selecteditem.skills}</span>
                    </div>
                    {(() => {
                        switch(selecteditem.mockup) {
                          case 'web' :
                            return <a key={selectedKey.id} className= "content_mockup web" href={selecteditem.link}><div>
                            <img key={selectedKey.id} src={process.env.PUBLIC_URL + '/imgs/contents/' + selecteditem.dir + '/'+ selecteditem.main_img.src} alt="selecteditem.main_img.alt" />
                          </div><img className="wrapper" src={process.env.PUBLIC_URL + '/imgs/layout/web_wrapper1.png'} alt="" /></a>
                          case 'app' :
                            return <a key={selectedKey.id} className= "content_mockup app" href={selecteditem.link}><div>
                            <img  src={process.env.PUBLIC_URL + '/imgs/contents/' + selecteditem.dir + '/'+ selecteditem.main_img.src} alt="selecteditem.main_img.alt"/>
                          </div><img className="wrapper" src={process.env.PUBLIC_URL + '/imgs/layout/app_wrapper2.png'} alt=""/></a>
                          case 'book' :
                            return <a key={selectedKey.id} className= "content_mockup book" href={selecteditem.link}><div>
                            <img src={process.env.PUBLIC_URL + '/imgs/contents/' + selecteditem.dir + '/'+ selecteditem.main_img.src} alt="selecteditem.main_img.alt"/>
                          </div><img className="wrapper" src={process.env.PUBLIC_URL + '/imgs/layout/book_wrapper1.png'} alt=""/></a>
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
      </Container>
    </HelmetProvider>
  );
};
