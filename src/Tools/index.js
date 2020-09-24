import React, { useContext } from 'react'
import styled from 'styled-components'

import Context from '../Context'
import OptionButton from '../StyledElements/OptionButton'
import Button from '../StyledElements/Button'

import { BsTrash } from 'react-icons/bs'

import BlankJSONInterface from '../BlankJSONInterface'
import options from '../optionTitles'

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
  .pOptions {
    overflow: auto;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    button {
      width: 100%;
    }
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100px;
      padding: 5px 15px;
      margin-left: 10px;
      &.clear-button {
        background-color: white;
        border: 1px solid #dcd4d4;
        color: #716e6e;
        &:hover {
          color: #505050;
          border-color: #505050;
        }
      }
    }
  }
`
const ToolBox = () => {
  const [
    fields,
    onChange,
    expectedOptions,
    renderInToolBox,
    styles,
    ,
    ,
    customFields
  ] = useContext(Context)
  const pOptions = expectedOptions
    ? [...options, ...customFields].filter((option) =>
        expectedOptions.find((eOption) => eOption === option.type)
      )
    : [...options, ...customFields]

  return (
    <Container style={styles.toolBox}>
      <label>Add Field</label>
      <p className='description'>Create a field using these Custom Fields</p>
      <div className='actions'>
        <Button
          className='clear-button'
          style={styles.toolBoxElements?.clearButton}
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
          &nbsp;&nbsp;Clear
        </Button>
      </div>
      <div className='pOptions'>
        {pOptions.map((pOption, index) => (
          <OptionButton
            key={index}
            style={styles.toolBoxElements?.optionButton}
            onClick={() => {
              const pushableBlankTemplate = BlankJSONInterface[
                pOption.value
              ] || {
                type: pOption.type || pOption.value,
                description: '',
                name: ''
              }

              if (pOption.options === true) {
                pushableBlankTemplate.options = []
              }

              onChange([...fields, pushableBlankTemplate])
            }}
          >
            <div className='icon'>{pOption.icon}</div>
            <div className='label'>{pOption.label || pOption.title}</div>
          </OptionButton>
        ))}
      </div>
      {renderInToolBox && renderInToolBox}
    </Container>
  )
}

export default ToolBox
