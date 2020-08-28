import React, { useState, Fragment } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Input from '../../StyledElements/Input'
import Block from '../../StyledElements/Block'
import Title from '../../StyledElements/Title'
import IconButton from '../../StyledElements/IconButton'
import LinkButton from '../../StyledElements/LinkButton'
import Option from './Option'
import arrayMove from 'array-move'
import constants from '../../constants.json'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { BsTrash, BsCardChecklist } from 'react-icons/bs'

const SortableItem = SortableElement(
  ({ option, optionIndex, setOptions, options }) => (
    <Option
      value={option}
      onChange={(newValue) => {
        setOptions(
          options.map((option, cIndex) =>
            optionIndex === cIndex ? newValue : option
          )
        )
      }}
      optionIndex={optionIndex}
      onRequestToDelete={() => {
        setOptions(options.filter((_option, cIndex) => optionIndex !== cIndex))
      }}
    />
  )
)

const SortableList = SortableContainer(({ options, setOptions }) => {
  return (
    <div>
      {options.map((option, index) => (
        <SortableItem
          option={option}
          optionIndex={index}
          index={index}
          key={`multiselect-option-${index}`}
          setOptions={setOptions}
          options={options}
        />
      ))}
    </div>
  )
})

const MultiSelect = ({
  field,
  onChange = () => {},
  onRequestToDelete = () => {},
  onFieldEdit = () => {},
  onFieldStartedEdit
}) => {
  const [preview, setPreview] = useState(true)
  const [describe, setDescribe] = useState(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setPreview(true)}>
      <Block
        onClick={() => {
          if (preview) {
            onFieldStartedEdit(field)
          }
          setPreview(false)
        }}
        className={`${preview ? 'preview' : 'edit'}`}
      >
        {preview ? (
          <Fragment>
            <Title>{field.name || constants.DEFAULT_HELPER_TEXT}</Title>
            <Input value='' disabled />
          </Fragment>
        ) : (
          <Fragment>
            <div className='header'>
              <Title>
                <BsCardChecklist /> Multi Select
              </Title>
              <IconButton
                onClick={() => onRequestToDelete()}
                className='trash-button'
              >
                <BsTrash />
              </IconButton>
            </div>
            <Title>{field.name || constants.NAME_PLACEHOLDER}</Title>
            <Input
              placeholder={constants.NAME_PLACEHOLDER}
              value={field.name}
              type='text'
              onChange={({ target: { value } }) => {
                onFieldEdit({ ...field, name: value })
                onChange({ ...field, name: value })
              }}
            />
            {!describe && !field.description && (
              <LinkButton
                onClick={() => setDescribe(true)}
                className='describe-button'
              >
                + Describe
              </LinkButton>
            )}
            {(describe || field.description) && (
              <Input
                placeholder={constants.DESCRIPTION_PLACEHOLDER}
                value={field.description}
                type='text'
                className='description'
                onChange={({ target: { value } }) => {
                  onFieldEdit({ ...field, description: value })
                  onChange({ ...field, description: value })
                }}
              />
            )}
            <SortableList
              options={field.options}
              lockAxis='y'
              helperClass='sortableHelper-dropdown'
              setOptions={(options) => {
                onFieldEdit({
                  ...field,
                  options: options
                })
                onChange({
                  ...field,
                  options: options
                })
              }}
              distance={1}
              onSortEnd={({ oldIndex, newIndex }) => {
                onFieldEdit({
                  ...field,
                  options: arrayMove(field.options, oldIndex, newIndex)
                })
                onChange({
                  ...field,
                  options: arrayMove(field.options, oldIndex, newIndex)
                })
              }}
            />
            <LinkButton
              onClick={() => {
                onFieldEdit({
                  ...field,
                  options: [...field.options, { value: '' }]
                })
                onChange({
                  ...field,
                  options: [...field.options, { value: '' }]
                })
              }}
            >
              + Add Option
            </LinkButton>
          </Fragment>
        )}
      </Block>
    </OutsideClickHandler>
  )
}

export default MultiSelect
