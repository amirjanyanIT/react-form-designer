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
import { BsTrash, BsChevronDown, BsPlus } from 'react-icons/bs'

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
          key={`sortable-dropdown-item-${index}`}
          setOptions={setOptions}
          options={options}
        />
      ))}
    </div>
  )
})

const DropDown = ({
  field,
  onChange = () => {},
  onRequestToDelete = () => {}
}) => {
  const [preview, setPreview] = useState(true)
  return (
    <OutsideClickHandler onOutsideClick={() => setPreview(true)}>
      <Block
        onClick={() => setPreview(false)}
        className={`${preview ? 'preview' : 'edit'}`}
      >
        {preview ? (
          <Fragment>
            <Title>{field.description || constants.DEFAULT_LABEL}</Title>
            <Input value='' disabled />
          </Fragment>
        ) : (
          <Fragment>
            <div className='header'>
              <Title>
                <BsChevronDown /> Dropdown
              </Title>
              <IconButton onClick={() => onRequestToDelete()}>
                <BsTrash />
              </IconButton>
            </div>
            <Title>{field.description || constants.DEFAULT_LABEL}</Title>
            <Input
              placeholder={constants.DEFAULT_LABEL}
              value={field.description}
              type='text'
              onChange={({ target: { value } }) =>
                onChange({ ...field, description: value })
              }
            />
            <SortableList
              options={field.options}
              setOptions={(options) => {
                onChange({
                  ...field,
                  options: options
                })
              }}
              distance={1}
              onSortEnd={({ oldIndex, newIndex }) => {
                onChange({
                  ...field,
                  options: arrayMove(field.options, oldIndex, newIndex)
                })
              }}
            />
            <LinkButton
              onClick={() =>
                onChange({ ...field, options: [...field.options, ''] })
              }
            >
              <BsPlus />
              Add Option
            </LinkButton>
          </Fragment>
        )}
      </Block>
    </OutsideClickHandler>
  )
}

export default DropDown
