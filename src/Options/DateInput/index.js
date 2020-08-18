import React, { useState, Fragment } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Input from '../../StyledElements/Input'
import Block from '../../StyledElements/Block'
import Title from '../../StyledElements/Title'
import LinkButton from '../../StyledElements/LinkButton'
import IconButton from '../../StyledElements/IconButton'
import constants from '../../constants.json'
import { BsCalendar, BsTrash } from 'react-icons/bs'

const DateInput = ({
  field,
  onChange = () => {},
  onRequestToDelete = () => {}
}) => {
  const [preview, setPreview] = useState(true)
  const [describe, setDescribe] = useState(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setPreview(true)}>
      <Block
        onClick={() => setPreview(false)}
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
                <BsCalendar /> Date
              </Title>
              <IconButton onClick={() => onRequestToDelete()}>
                <BsTrash />
              </IconButton>
            </div>
            <Title>{field.name || constants.NAME_PLACEHOLDER}</Title>
            <Input
              placeholder={constants.NAME_PLACEHOLDER}
              value={field.name}
              type='text'
              onChange={({ target: { value } }) =>
                onChange({ ...field, name: value })
              }
            />
            {!describe && !field.description && (
              <LinkButton onClick={() => setDescribe(true)}>
                + Describe
              </LinkButton>
            )}
            {(describe || field.description) && (
              <Input
                placeholder={constants.DESCRIPTION_PLACEHOLDER}
                value={field.description}
                type='text'
                onChange={({ target: { value } }) =>
                  onChange({ ...field, description: value })
                }
              />
            )}
          </Fragment>
        )}
      </Block>
    </OutsideClickHandler>
  )
}

export default DateInput
