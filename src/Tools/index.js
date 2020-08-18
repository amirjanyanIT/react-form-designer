import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import Context from '../Context'
import Button from '../StyledElements/Button'
import Select, { components } from 'react-select'

import { BsPlus, BsTrash } from 'react-icons/bs'

import BlankJSONInterface from '../BlankJSONInterface'
import options from './options'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: #f7f7f7;
  color: #2d2c2c;
  padding: 15px;
  label {
    font-weight: 500;
  }
  .select,
  button {
    margin-bottom: 10px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      margin-left: 10px;
      &.clear-button {
        background-color: #404040;
      }
    }
  }
`

const { Option } = components
const CustomSelectOption = (props) => (
  <Option {...props}>
    {props.data.icon}&nbsp;
    {props.data.label}
  </Option>
)

const CustomSelectValue = (props) => (
  <div>
    {props.data.icon}&nbsp;
    {props.data.label}
  </div>
)

const ToolBox = () => {
  const [fields, onChange, expectedOptions] = useContext(Context)
  const pOptions = expectedOptions
    ? options.filter((option) =>
        expectedOptions.find((eOption) => eOption === option.value)
      )
    : options
  const [selectedOption, setSelectedOption] = useState(pOptions[0])

  const addFieldObserver = () =>
    onChange([...fields, BlankJSONInterface[selectedOption.value]])

  return (
    <Container>
      <label>Add Field</label>
      <p className='description'>Create a field using these Custom Fields</p>
      <Select
        className='select'
        options={pOptions}
        value={selectedOption}
        onChange={(newValue) => setSelectedOption(newValue)}
        components={{
          Option: CustomSelectOption,
          SingleValue: CustomSelectValue
        }}
      />
      <div className='actions'>
        <Button
          className='clear-button'
          onClick={() => {
            if (
              window.confirm(
                'Are you sure?, do you want delete described options'
              )
            ) {
              onChange([])
            }
          }}
        >
          <BsTrash />
          &nbsp;&nbsp;Add Field
        </Button>
        <Button onClick={() => addFieldObserver()}>
          <BsPlus size={20} />
          &nbsp;&nbsp;Clear
        </Button>
      </div>
    </Container>
  )
}

export default ToolBox
