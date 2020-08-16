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
  background-color: inherit;
  padding-top: 15px;
`

export default () => {
  const [fields, onChange] = useContext(Context)

  const renderFieldUIContainer = (field, index) => {
    switch (field.type) {
      case 'SINGLE_LINE_TEXT':
        return (
          <SingleLineText
            key={index}
            field={field}
            onChange={(updatedField) => {
              onChange(
                fields.map((field, cIndex) =>
                  index === cIndex ? updatedField : field
                )
              )
            }}
            onRequestToDelete={() =>
              onChange(fields.filter((_field, cindex) => index !== cindex))
            }
          />
        )
      case 'PARAGRAPH_TEXT':
        return (
          <ParagraphText
            key={index}
            field={field}
            onChange={(updatedField) => {
              onChange(
                fields.map((field, cIndex) =>
                  index === cIndex ? updatedField : field
                )
              )
            }}
            onRequestToDelete={() =>
              onChange(fields.filter((_field, cindex) => index !== cindex))
            }
          />
        )
      case 'NUMBER':
        return (
          <NumberInput
            key={index}
            field={field}
            onChange={(updatedField) => {
              onChange(
                fields.map((field, cIndex) =>
                  index === cIndex ? updatedField : field
                )
              )
            }}
            onRequestToDelete={() =>
              onChange(fields.filter((_field, cindex) => index !== cindex))
            }
          />
        )
      case 'DROPDOWN':
        return (
          <DropDown
            key={index}
            field={field}
            onChange={(updatedField) => {
              onChange(
                fields.map((field, cIndex) =>
                  index === cIndex ? updatedField : field
                )
              )
            }}
            onRequestToDelete={() =>
              onChange(fields.filter((_field, cindex) => index !== cindex))
            }
          />
        )
      case 'MULTI_SELECT':
        return (
          <MultiSelect
            key={index}
            field={field}
            onChange={(updatedField) => {
              onChange(
                fields.map((field, cIndex) =>
                  index === cIndex ? updatedField : field
                )
              )
            }}
            onRequestToDelete={() =>
              onChange(fields.filter((_field, cindex) => index !== cindex))
            }
          />
        )
      case 'DATE':
        return (
          <DateInput
            key={index}
            field={field}
            onChange={(updatedField) => {
              onChange(
                fields.map((field, cIndex) =>
                  index === cIndex ? updatedField : field
                )
              )
            }}
            onRequestToDelete={() =>
              onChange(fields.filter((_field, cindex) => index !== cindex))
            }
          />
        )
      case 'ATTACHMENT':
        return (
          <Attachment
            key={index}
            field={field}
            onChange={(updatedField) => {
              onChange(
                fields.map((field, cIndex) =>
                  index === cIndex ? updatedField : field
                )
              )
            }}
            onRequestToDelete={() =>
              onChange(fields.filter((_field, cindex) => index !== cindex))
            }
          />
        )
      default:
        return null
    }
  }
  return <Container>{fields.map(renderFieldUIContainer)}</Container>
}
