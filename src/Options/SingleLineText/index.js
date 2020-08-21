import React, { useState, Fragment } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Input from '../../StyledElements/Input'
import Block from '../../StyledElements/Block'
import Title from '../../StyledElements/Title'
import IconButton from '../../StyledElements/IconButton'
import LinkButton from '../../StyledElements/LinkButton'
import constants from '../../constants.json'
import { BsTrash, BsType } from 'react-icons/bs'

const SingleLineText = ({
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
                <BsType /> Single Line Text
              </Title>
              <IconButton onClick={() => onRequestToDelete()}>
                <BsTrash />
              </IconButton>
            </div>
            <Title>{field.name || constants.NAME_PLACEHOLDER}</Title>
            <Input
              placeholder={constants.NAME_PLACEHOLDER}
              value={field.name}
              onChange={({ target: { value } }) => {
                onFieldEdit({
                  ...field,
                  name: value
                })
                onChange({
                  ...field,
                  name: value
                })
              }}
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
                onChange={({ target: { value } }) => {
                  onFieldEdit({ ...field, description: value })
                  onChange({ ...field, description: value })
                }}
              />
            )}
          </Fragment>
        )}
      </Block>
    </OutsideClickHandler>
  )
}

export default SingleLineText
