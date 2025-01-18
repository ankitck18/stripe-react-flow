import { IconButton } from '@mui/material'
import { BezierEdge, EdgeLabelRenderer, getBezierPath, useReactFlow } from '@xyflow/react'
import React from 'react'
import { X } from 'react-bootstrap-icons';



export default function CustomEdge(props) {
    const { setEdges } = useReactFlow();

    const {id,sourceX,sourceY,targetX,targetY,sourcePosition,targetPosition} = props;
    const [edgePath,labelX,labelY] = getBezierPath({sourceX,sourceY,targetX,targetY,sourcePosition,targetPosition})

  return (
    <>
    <BezierEdge {...props}/>
    <EdgeLabelRenderer>
    <IconButton
      aria-label="Delete Edge"
      sx={{
        position: 'absolute',
        color: 'red', 
        transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
        pointerEvents: 'all', 
        backgroundColor: 'transparent', 
        fontSize: 'small', 
      }}
      onClick={() =>
        setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id))
      }
    >
      <X /> 
    </IconButton>
    </EdgeLabelRenderer>
    </>
  )
}
