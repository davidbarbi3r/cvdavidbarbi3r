import { styled } from '@stitches/react'
import React, { useState } from 'react'

interface HideBtnProps {text : string} 

export const HideBtn = ({text}: HideBtnProps) => {
  const [hide, toggleHide] = useState(true)

    const StyledHideBtn = styled("button", {
        display: "inline"
    })

  return (
    <StyledHideBtn onClick={() => toggleHide}>{hide ? "[...]" : text}</StyledHideBtn>
    )
}