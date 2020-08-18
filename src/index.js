import React from 'react'
import styled from 'styled-components'

import FieldsContext from './Context'

import WorkGround from './WorkGround'
import Tools from './Tools'

const MainContainer = styled.div`
  display: flex;
  min-width: 920px;
  min-height: 600px;
  font-family: 'Segoe UI';
  color: #4a4a4a;
  .sortableHelper-UIContainer {
    z-index: 1600;
  }
  .sortableHelper-dropdown,
  .sortableHelper-dropdown {
    z-index: 1500;
  }
`

export default ({
  fields = null,
  onChange = () => {},
  styles = {},
  expectedOptions = null,
  renderInToolBox = null
}) => {
  return (
    <FieldsContext.Provider
      value={[fields, onChange, expectedOptions, renderInToolBox, styles]}
    >
      <MainContainer styles={styles.mainContainer}>
        <WorkGround />
        <Tools />
      </MainContainer>
    </FieldsContext.Provider>
  )
}
