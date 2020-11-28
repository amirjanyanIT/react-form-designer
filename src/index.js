import React, { useEffect, useState } from 'react'
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
  renderInToolBox = null,
  onFieldStartedEdit = () => {},
  onFieldEdit = () => {},
  onFieldDelete = () => {},
  customOptions = [],
  containerHeight = 500
}) => {
  const [workgroundContainerRef, setWorkgroundContainerRef] = useState(null)
  const [toolsContainerRef, setToolsContainerRef] = useState(null)
  const [fieldsCountSnapshot, setFieldsCountSnapshot] = useState(
    fields ? fields.length : null
  )

  useEffect(() => {
    if (fields && fields.length !== fieldsCountSnapshot) {
      workgroundContainerRef.scrollTop = workgroundContainerRef.scrollHeight
      setFieldsCountSnapshot(fields.length)
    }
  }, [fields])

  return (
    <FieldsContext.Provider
      value={[
        fields,
        onChange,
        expectedOptions,
        renderInToolBox,
        styles,
        onFieldEdit,
        onFieldDelete,
        customOptions,
        onFieldStartedEdit,
        workgroundContainerRef,
        toolsContainerRef
      ]}
    >
      <MainContainer
        style={{
          ...styles.mainContainer,
          height: `${containerHeight}px`
        }}
      >
        <WorkGround ref={setWorkgroundContainerRef} />
        <Tools ref={setToolsContainerRef} />
      </MainContainer>
    </FieldsContext.Provider>
  )
}
