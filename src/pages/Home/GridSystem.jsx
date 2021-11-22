import React from 'react'
import { GridStyling } from './style'
import PlaceholderImg from '../../assets/images/placeholder.png';

const GridSystem = (props) => {
  return (
    <>
      <GridStyling>
        <img src={PlaceholderImg} />
        <div style={{ background: '', height: '100%' }}>
          <p>{props.text}</p>
        </div>
      </GridStyling>
      <GridStyling>
        <img src={PlaceholderImg} />
        <div style={{ background: '', height: '100%' }}>
          <p>{props.text}</p>
        </div>
      </GridStyling>
      <GridStyling>
        <img src={PlaceholderImg} />
        <div style={{ background: '', height: '100%' }}>
          <p>{props.text}</p>
        </div>
      </GridStyling>
    </>
  )
}

export default GridSystem
