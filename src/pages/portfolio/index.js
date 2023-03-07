import React, {useState} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Modal } from "../../components/modal";
import Typewriter from "typewriter-effect";

export const Portfolio = (props) => {
  const [selectedKey, setselectedKey] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (selectedKey) => {
    setselectedKey(selectedKey);
    setModalOpen(true);
  };

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
          {dataportfolio.map((data, i) => {
            return (
              <div className="po_item"  onClick={()=> openModal(i)} >
                  <img src={process.env.PUBLIC_URL + '/imgs/contents/'+ data.name+'/'+data.main_img } alt={data.alt} />
                <div className="description" >
                  <h3>{data.name}</h3>
                  <h5>{data.project}</h5>
                </div>
            
              </div>
            );
          })}
        </div>
        {
          selectedKey == null
          ? null
          : <Modal open={modalOpen} close={closeModal}>
              <main> 
                <div className="content">
                  <div className="content_title">
                    <h1>{dataportfolio[selectedKey].name}</h1>
                    <span>{dataportfolio[selectedKey].content_description}</span>
                  </div>
                  <div className="content_info">
                    <div className="content_icon">
                        <img src={process.env.PUBLIC_URL + '/imgs/layout/web.png'} />
                        <h2>{dataportfolio[selectedKey].project}</h2>
                        <span>{dataportfolio[selectedKey].skills}</span>
                    </div>
                    <a className="content_mockup" href={dataportfolio[selectedKey].link}>
                      <div>
                        <img src={process.env.PUBLIC_URL + '/imgs/contents/' + dataportfolio[selectedKey].name+'/'+ dataportfolio[selectedKey].main_img} />
                      </div>
                      <img className="wrapper" src={process.env.PUBLIC_URL + '/imgs/layout/pc.png'} />
                    </a>
                  </div>
                  {
                    dataportfolio[selectedKey].content_img == null 
                  ? null
                  : <div className="content_img">
                    { 
                    dataportfolio[selectedKey].content_img.map( data => {
                      return(
                        <img src={process.env.PUBLIC_URL + '/imgs/contents/' + dataportfolio[selectedKey].name + '/'+ data.src } alt={data.alt} />
                            )})
                    }
                  </div>
                  }
                </div>
              </main>
            </Modal>
        }
      </Container>
    </HelmetProvider>
  );
};
