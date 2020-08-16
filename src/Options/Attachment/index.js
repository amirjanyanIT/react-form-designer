import React, { useState, Fragment, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Input from '../../StyledElements/Input'
import Block from '../../StyledElements/Block'
import Title from '../../StyledElements/Title'
import DragDropArea from '../../StyledElements/DragDropArea'
import IconButton from '../../StyledElements/IconButton'
import constants from '../../constants.json'
import { BsTrash, BsLink45Deg } from 'react-icons/bs'

const Attachment = ({ onChange = () => {}, onRequestToDelete = () => {} }) => {
  const [question, setQuestion] = useState('')
  const [preview, setPreview] = useState(true)

  useEffect(() => onChange(question), [question])

  return (
    <OutsideClickHandler onOutsideClick={() => setPreview(true)}>
      <Block
        onClick={() => setPreview(false)}
        className={`${preview ? 'preview' : 'edit'}`}
      >
        {preview ? (
          <Fragment>
            <Title>{question || constants.DEFAULT_LABEL}</Title>
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
            <Title>{question || constants.DEFAULT_LABEL}</Title>
            <Input
              placeholder={constants.DEFAULT_LABEL}
              value={question}
              onChange={({ target: { value } }) => setQuestion(value)}
            />
          </Fragment>
        )}
      </Block>
    </OutsideClickHandler>
  )
}

export default Attachment
