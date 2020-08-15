import React, { useEffect } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  min-width: 920px;
`

export const ExampleComponent = ({ value = null, onChange = () => {} }) => {
  useEffect(() => {
    console.log(value)
  }, [value])

  return <MainContainer>Hello World</MainContainer>
}
