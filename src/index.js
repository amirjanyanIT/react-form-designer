import React, { useEffect } from 'react'
import styled from 'styled-components'

import Attachment from './Options/Attachment'
import NumberInput from './Options/NumberInput'
import SingleLineText from './Options/SingleLineText'
import DateInput from './Options/DateInput'
import ParagraphText from './Options/ParagraphText'
import MultiSelect from './Options/MultiSelect'
import DropDown from './Options/DropDown'

const MainContainer = styled.div`
  display: flex;
  min-width: 920px;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI';
`

export const ExampleComponent = ({ value = null, onChange = () => {} }) => {
  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <MainContainer>
      <Attachment />
      <NumberInput />
      <SingleLineText />
      <DateInput />
      <ParagraphText />
      <MultiSelect />
      <DropDown />
    </MainContainer>
  )
}
