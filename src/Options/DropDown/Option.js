import React from 'react'
import { BsTrash, BsJustify } from 'react-icons/bs'
import IconButton from '../../StyledElements/IconButton'
import SelectOption from '../../StyledElements/SelectOption'
import NotBorderedInput from '../../StyledElements/NotBorderedInput'

const Option = ({ onChange, onRequestToDelete, value, optionIndex }) => {
  return (
    <SelectOption style={{ position: 'relative' }}>
      <IconButton style={{ flex: 1, textAlign: 'left' }}>
        <BsJustify />
      </IconButton>
      <NotBorderedInput
        key={optionIndex}
        style={{ flex: 18, paddingRight: '20px' }}
        value={value.value}
        onChange={({ target: { value: newValue } }) =>
          onChange({ ...value, value: newValue })
        }
      />
      <IconButton
        style={{ position: 'absolute', right: 0 }}
        onClick={() => onRequestToDelete()}
        className='trash-button'
      >
        <BsTrash />
      </IconButton>
    </SelectOption>
  )
}

export default Option
