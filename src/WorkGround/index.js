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
import RadioButton from '../Options/RadioButton'
import ContactField from '../Options/ContactField'
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

  const renderOptionContainer = () => {
    switch (field.type) {
      case 'SINGLE_LINE_TEXT':
        return (
          <SingleLineText
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
      case 'RADIO_BUTTON':
        return (
          <RadioButton
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
      case 'CONTACT_FIELD':
        return (
          <ContactField
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
  }
  return <div>{renderOptionContainer()}</div>
})

const SortableList = SortableContainer(() => {
  const [fields] = useContext(Context)

  return (
    <div>
      {fields.map((field, index) => (
        <SortableItem
          index={index}
          key={`sortable-UC-${index}`}
          field={field}
          fieldIndex={index}
          lockAxis='y'
          lockToContainerEdges
        />
      ))}
    </div>
  )
})

export default () => {
  const [fields, onChange, , , styles] = useContext(Context)

  return (
    <Container style={styles.workGround}>
      <SortableList
        distance={1}
        helperClass='sortableHelper-UIContainer'
        lockAxis='y'
        lockToContainerEdges
        onSortEnd={({ oldIndex, newIndex }) => {
          onChange(arrayMove(fields, oldIndex, newIndex))
        }}
      />
    </Container>
  )
}
