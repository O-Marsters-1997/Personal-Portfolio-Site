import React from 'react'
import Canvas from '../components/canvas/Canvas'
import CanvasOverlay from '../components/canvas/CanvasOverlay'

import {Box} from "@mui/material"



const CanvasContainer = ({theme}) => {
    return (
      <Box component="div" className="canvas-container">
        <Canvas theme={theme}></Canvas>
        <CanvasOverlay/>
      </Box>
    );
}

export default CanvasContainer
