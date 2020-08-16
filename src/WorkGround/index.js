import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from '../Context'

import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import SingleLineText from '../Options/SingleLineText'
import ParagraphText from '../Options/ParagraphText'
import NumberInput from '../Options/NumberInput'
import DropDown from '../Options/DropDown'
import MultiSelect from '../Options/MultiSelect'
import DateInput from '../Options/DateInput'
import Attachment from '../Options/Attachment'
import arrayMove from 'array-move'

const Container = styled.div`
  display: flex;
  flex: 8;
  align-items: center;
  flex-direction: column;
  background-color: inherit;
  padding-top: 15px;
`

const SortableItem = SortableElement(({ field, fieldIndex }) => {
  const [fields, onChange] = useContext(Context)

  switch (field.type) {
    case 'SINGLE_LINE_TEXT':
      return (
        <SingleLineText
          key={fieldIndex}
          field={field}
          onChange={(updatedField) => {
            onChange(
              fields.map((field, cIndex) =>
                fieldIndex === cIndex ? updatedField : field
              )
            )
          }}
          onRequestToDelete={() =>
            onChange(fields.filter((_field, cindex) => fieldIndex !== cindex))
          }
        />
      )
    case 'PARAGRAPH_TEXT':
      return (
        <ParagraphText
          key={fieldIndex}
          field={field}
          onChange={(updatedField) => {
            onChange(
              fields.map((field, cIndex) =>
                fieldIndex === cIndex ? updatedField : field
              )
            )
          }}
          onRequestToDelete={() =>
            onChange(fields.filter((_field, cindex) => fieldIndex !== cindex))
          }
        />
      )
    case 'NUMBER':
      return (
        <NumberInput
          key={fieldIndex}
          field={field}
          onChange={(updatedField) => {
            onChange(
              fields.map((field, cIndex) =>
                fieldIndex === cIndex ? updatedField : field
              )
            )
          }}
          onRequestToDelete={() =>
            onChange(fields.filter((_field, cindex) => fieldIndex !== cindex))
          }
        />
      )
    case 'DROPDOWN':
      return (
        <DropDown
          key={fieldIndex}
          field={field}
          onChange={(updatedField) => {
            onChange(
              fields.map((field, cIndex) =>
                fieldIndex === cIndex ? updatedField : field
              )
            )
          }}
          onRequestToDelete={() =>
            onChange(fields.filter((_field, cindex) => fieldIndex !== cindex))
          }
        />
      )
    case 'MULTI_SELECT':
      return (
        <MultiSelect
          key={fieldIndex}
          field={field}
          onChange={(updatedField) => {
            onChange(
              fields.map((field, cIndex) =>
                fieldIndex === cIndex ? updatedField : field
              )
            )
          }}
          onRequestToDelete={() =>
            onChange(fields.filter((_field, cindex) => fieldIndex !== cindex))
          }
        />
      )
    case 'DATE':
      return (
        <DateInput
          key={fieldIndex}
          field={field}
          onChange={(updatedField) => {
            onChange(
              fields.map((field, cIndex) =>
                fieldIndex === cIndex ? updatedField : field
              )
            )
          }}
          onRequestToDelete={() =>
            onChange(fields.filter((_field, cindex) => fieldIndex !== cindex))
          }
        />
      )
    case 'ATTACHMENT':
      return (
        <Attachment
          key={fieldIndex}
          field={field}
          onChange={(updatedField) => {
            onChange(
              fields.map((field, cIndex) =>
                fieldIndex === cIndex ? updatedField : field
              )
            )
          }}
          onRequestToDelete={() =>
            onChange(fields.filter((_field, cindex) => fieldIndex !== cindex))
          }
        />
      )
    default:
      return null
  }
})

const SortableList = SortableContainer(() => {
  const [fields] = useContext(Context)

  return (
    <div>
      {fields.map((field, index) => (
        <SortableItem
          field={field}
          fieldIndex={index}
          index={index}
          key={index}
        />
      ))}
    </div>
  )
})

export default () => {
  const [fields, onChange] = useContext(Context)

  return (
    <Container>
      <SortableList
        distance={1}
        onSortEnd={({ oldIndex, newIndex }) => {
          onChange(arrayMove(fields, oldIndex, newIndex))
        }}
      />
    </Container>
  )
}
