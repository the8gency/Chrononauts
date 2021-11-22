import React from 'react'
import { StyledBtn } from './style'

const PrimaryBtn = ({children}) => {
    return (
        <StyledBtn>
            {children}
        </StyledBtn>
    )
}

export default PrimaryBtn
