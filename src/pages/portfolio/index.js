import React, {useState} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Modal } from "../../components/modal";
import Typewriter from "typewriter-effect";

export const Portfolio = (props) => {
  const [selectedKey, setselectedKey] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (selectedKey) => {
    setselectedKey(selectedKey);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
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
              <div key={i} className="po_item">
              <img src={process.env.PUBLIC_URL + '/imgs/contents/dreamers/'+ data.main_img +'.png' } alt={data.alt} />
                <div className="content" onClick={()=> openModal(i)}>
                  <p>" {data.name} "</p>
                </div>
              </div>
            );
          })}
        </div>

        <Modal open={modalOpen} close={closeModal}>
          <main> 
            <p>{dataportfolio[selectedKey].content}</p>
            {
            dataportfolio[selectedKey].content_img.map( data => {
              return(
                <div className="content_img">
                  <img src={process.env.PUBLIC_URL + '/imgs/contents/dreamers/'+ data.src+'.png' } alt={data.alt} />
              </div>
            )
            })
          }
          </main>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};
