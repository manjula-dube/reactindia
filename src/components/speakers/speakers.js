import React from "react"
import SpeakerCard from "./SpeakerCard"
import data from "./data"

export const Speakers = () => (
  <div uk-grid>
    {data.map(speaker => (
      <SpeakerCard {...speaker} />
    ))}
  </div>
)
