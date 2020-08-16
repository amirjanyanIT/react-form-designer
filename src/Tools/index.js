import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import Context from '../Context'
import Button from '../StyledElements/Button'
import Select, { components } from 'react-select'

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
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [fields, onChange] = useContext(Context)

  const addFieldObserver = () =>
    onChange([...fields, BlankJSONInterface[selectedOption.value]])

  return (
    <Container>
      <label>Add Field</label>
      <p className='description'>Create a field using these Custom Fields</p>
      <Select
        className='select'
        options={options}
        value={selectedOption}
        onChange={(newValue) => setSelectedOption(newValue)}
        components={{
          Option: CustomSelectOption,
          SingleValue: CustomSelectValue
        }}
      />
      <Button onClick={() => addFieldObserver()}>Add Field</Button>
    </Container>
  )
}

export default ToolBox
