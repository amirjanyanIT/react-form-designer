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
import { BsTrash } from 'react-icons/bs'

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
          key={`customfieldoptions-item-${index}`}
          setOptions={setOptions}
          options={options}
        />
      ))}
    </div>
  )
})

const CustomFieldsOptions = ({
  field,
  fieldIndex,
  onChange = () => {},
  onRequestToDelete = () => {},
  onFieldEdit = () => {},
  customFieldInfo = {},
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
            <Title>{field.name || constants.NAME_PLACEHOLDER}</Title>
            <Input value='' disabled />
          </Fragment>
        ) : (
          <Fragment>
            <div className='header'>
              <Title>
                {customFieldInfo.icon} {customFieldInfo.title}
              </Title>
              <IconButton
                className='trash-button'
                onClick={() => onRequestToDelete()}
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
              helperClass='sortableHelper-customfieldoptions'
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
              lockAxis='y'
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
            {customFieldInfo.renderIn &&
              customFieldInfo.renderIn(field, fieldIndex)}
          </Fragment>
        )}
      </Block>
    </OutsideClickHandler>
  )
}

export default CustomFieldsOptions
