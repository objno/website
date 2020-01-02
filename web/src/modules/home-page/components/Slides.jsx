import React from 'react'
import Box from '../../../components/Box'
import Slide from './Slide'

const Slides = ({ slides }) => {

  let key = 0;
  let active = 1;
  return (
    <Box>
      {slides && slides.map(slide => {
        key++;
        if (active === key) return <Slide key={key} {...slide} />
      })}
    </Box>
  )
}

export default Slides
