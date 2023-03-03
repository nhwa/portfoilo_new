import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={20}
          outerSize={70}
          color="transperent"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={2}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes /> 
      </ScrollToTop>
    </Router>
  );
}
