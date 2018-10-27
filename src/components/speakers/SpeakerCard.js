import React from "react"
import styled from "styled-components"

const SpeakerCard = props => (
  <div class="speaker">
    <div class="sk-img">
      <div class="img">
        <img class="img-fluid" src={`/assets/images/speakers/${props.img}`} alt="" />
        <div class="overlay d-flex justify-content-center">
          <div class="slink">
            <a href="#">
              <i class="fa fa-facebook" />
              <i class="fa fa-twitter" />
              <i class="fa fa-linkedin" />
              <i class="fa fa-google-plus" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sk-content">
      <a>
        <h4>{props.name}</h4>
      </a>
      <p>{props.currentRole}</p>
    </div>
  </div>
)
export default SpeakerCard
