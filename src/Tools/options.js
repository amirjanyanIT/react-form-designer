import React from 'react'
import {
  BsLink45Deg,
  BsCalendar,
  BsChevronDown,
  BsCardChecklist,
  BsCircle,
  BsJustifyLeft,
  BsType,
  BsThreeDotsVertical,
  BsPerson
} from 'react-icons/bs'

export default [
  {
    label: 'Single Line Text',
    value: 'SINGLE_LINE_TEXT',
    icon: <BsLink45Deg size={15} />
  },
  {
    label: 'Paragraph Text',
    value: 'PARAGRAPH_TEXT',
    icon: <BsCalendar size={15} />
  },
  {
    label: 'Number',
    value: 'NUMBER',
    icon: <BsChevronDown size={15} />
  },
  {
    label: 'Drop-down',
    value: 'DROPDOWN',
    icon: <BsCardChecklist size={15} />
  },
  {
    label: 'Multi-select',
    value: 'MULTI_SELECT',
    icon: <BsCircle size={15} />
  },
  {
    label: 'Date',
    value: 'DATE',
    icon: <BsJustifyLeft size={15} />
  },
  {
    label: 'Attachment',
    value: 'ATTACHMENT',
    icon: <BsType size={15} />
  },
  {
    label: 'Radio Button',
    value: 'RADIO_BUTTON',
    icon: <BsThreeDotsVertical size={15} />
  },
  {
    label: 'Contact Field',
    value: 'CONTACT_FIELD',
    icon: <BsPerson size={15} />
  }
]
