import React from "react"
import styled from "styled-components"

const dummyImage = "https://image.ibb.co/feBaLq/manjula.png"

const SpeakerCard = props => (
  <div className="speaker" key={props.name}>
    <div className="sk-img">
      <div className="img">
        <img className="img-fluid" src={`${dummyImage}`} alt={`${props.name}`} />
        <div className="overlay d-flex justify-content-center">
          <div className="slink">
            <a href="#">
              <i className="fa fa-facebook" />
              <i className="fa fa-twitter" />
              <i className="fa fa-linkedin" />
              <i className="fa fa-google-plus" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="sk-content">
      <a>
        <h4>{props.name}</h4>
      </a>
      <p>{props.currentRole}</p>
    </div>
  </div>
)
export default SpeakerCard
