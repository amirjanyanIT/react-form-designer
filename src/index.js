import React from 'react'
import styled from 'styled-components'

import FieldsContext from './Context'

import WorkGround from './WorkGround'
import Tools from './Tools'

const MainContainer = styled.div`
  display: flex;
  min-width: 920px;
  min-height: 600px;
  background-color: white;
  font-family: 'Segoe UI';
`

export default ({
  fields = null,
  onChange = () => {},
  styles = {},
  expectedOptions = null
}) => {
  return (
    <FieldsContext.Provider value={[fields, onChange, expectedOptions]}>
      <MainContainer styles={styles}>
        <WorkGround />
        <Tools />
      </MainContainer>
    </FieldsContext.Provider>
  )
}
