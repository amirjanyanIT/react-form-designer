import React, { useState, Fragment, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Input from '../../StyledElements/Input'
import Block from '../../StyledElements/Block'
import Title from '../../StyledElements/Title'
import IconButton from '../../StyledElements/IconButton'
import constants from '../../constants.json'
import { BsTrash, BsCircle } from 'react-icons/bs'

const NumberInput = ({ onChange = () => {}, onRequestToDelete = () => {} }) => {
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
            <Input value='' disabled />
          </Fragment>
        ) : (
          <Fragment>
            <div className='header'>
              <Title>
                <BsCircle /> Number
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
          </Fragment>
        )}
      </Block>
    </OutsideClickHandler>
  )
}

export default NumberInput
