import React, { useState, Fragment, useEffect } from 'react'
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
          key={index}
          setOptions={setOptions}
          options={options}
        />
      ))}
    </div>
  )
})

const DropDown = ({ onChange = () => {}, onRequestToDelete = () => {} }) => {
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState([''])
  const [preview, setPreview] = useState(true)

  useEffect(() => onChange({ question, options }), [question, options])

  return (
    <OutsideClickHandler onOutsideClick={() => setPreview(true)}>
      <Block
        onClick={() => setPreview(false)}
        className={`${preview ? 'preview' : 'edit'}`}
      >
        {preview ? (
          <Fragment>
            <Title>{question || constants.DEFAULT_LABEL}</Title>
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
            <Title>{question || constants.DEFAULT_LABEL}</Title>
            <Input
              placeholder={constants.DEFAULT_LABEL}
              value={question}
              type='text'
              onChange={({ target: { value } }) => setQuestion(value)}
            />
            <SortableList
              options={options}
              setOptions={setOptions}
              distance={1}
              onSortEnd={({ oldIndex, newIndex }) => {
                setOptions(arrayMove(options, oldIndex, newIndex))
              }}
            />
            <LinkButton onClick={() => setOptions([...options, ''])}>
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
