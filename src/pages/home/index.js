import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
// import { Link } from "react-router-dom";


export const Home = () => {
  return (
    // 동적으로 웹사이트 타이틀 변경
    <HelmetProvider>
      <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
    </HelmetProvider>
);
};

