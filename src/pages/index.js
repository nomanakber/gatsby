import React from "react"
import { Router } from "@reach/router"
import About from "../pages/about"
import Home from "../pages/home"

import { connect } from 'react-redux';

  const IndexPage = ({baseUrl}) =>  {
    return (
        <div style={{ color: 'purple'}}>
            <Router>
                <Home path="/" />
                <About path="/about"  />
            </Router>
        </div>
    )
  
  }

  export default connect(state => (state => ({
    baseUrl: state.app.baseUrl,
  })),null)(IndexPage)
