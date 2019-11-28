import React from "react"
import containerStyles from "../assets/css/container.module.css"
import Header from "../components/header"
export default (props) => (
    <div>
        <Header />
        <h1>{props.ContainerText}</h1>
        <div className={containerStyles.container} >{props.children}</div>
    </div>
  
)