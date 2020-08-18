import React, { useState, Fragment } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Input from '../../StyledElements/Input'
import Block from '../../StyledElements/Block'
import Title from '../../StyledElements/Title'
import DragDropArea from '../../StyledElements/DragDropArea'
import IconButton from '../../StyledElements/IconButton'
import LinkButton from '../../StyledElements/LinkButton'
import constants from '../../constants.json'
import { BsTrash, BsLink45Deg } from 'react-icons/bs'

const Attachment = ({
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
            <DragDropArea />
          </Fragment>
        ) : (
          <Fragment>
            <div className='header'>
              <Title>
                <BsLink45Deg /> Attachment
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

export default Attachment
