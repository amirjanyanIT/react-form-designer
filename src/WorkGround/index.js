import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from '../Context'

import SingleLineText from '../Options/SingleLineText'
import ParagraphText from '../Options/ParagraphText'
import NumberInput from '../Options/NumberInput'
import DropDown from '../Options/DropDown'
import MultiSelect from '../Options/MultiSelect'
import DateInput from '../Options/DateInput'
import Attachment from '../Options/Attachment'

const Container = styled.div`
  display: flex;
  flex: 8;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
  padding-top: 15px;
`

export default () => {
  const [fields, onChange] = useContext(Context)

  const renderFieldUIContainer = (field, index) => {
    switch (field.type) {
      case 'SINGLE_LINE_TEXT':
        return <SingleLineText />
      case 'PARAGRAPH_TEXT':
        return <ParagraphText />
      case 'NUMBER':
        return <NumberInput />
      case 'DROPDOWN':
        return <DropDown />
      case 'MULTI_SELECT':
        return <MultiSelect />
      case 'DATE':
        return <DateInput />
      case 'ATTACHMENT':
        return <Attachment />
      default:
        return null
    }
  }
  return <Container>{fields.map(renderFieldUIContainer)}</Container>
}
