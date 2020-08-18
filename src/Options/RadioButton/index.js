import React, { useState, Fragment } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Input from '../../StyledElements/Input'
import Block from '../../StyledElements/Block'
import Title from '../../StyledElements/Title'
import IconButton from '../../StyledElements/IconButton'
import constants from '../../constants.json'
import { BsTrash, BsThreeDotsVertical } from 'react-icons/bs'

const RadioButton = ({
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
                <BsThreeDotsVertical /> Radio Button
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
          </Fragment>
        )}
      </Block>
    </OutsideClickHandler>
  )
}

export default RadioButton