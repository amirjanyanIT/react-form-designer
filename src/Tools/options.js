import React from 'react'
import {
  BsLink45Deg,
  BsCalendar,
  BsChevronDown,
  BsCardChecklist,
  BsCircle,
  BsJustifyLeft,
  BsType
} from 'react-icons/bs'

export default [
  {
    label: 'Single Line Text',
    value: 'SINGLE_LINE_TEXT',
    icon: <BsLink45Deg size={12} />
  },
  {
    label: 'Paragraph Text',
    value: 'PARAGRAPH_TEXT',
    icon: <BsCalendar size={12} />
  },
  {
    label: 'Number',
    value: 'NUMBER',
    icon: <BsChevronDown size={12} />
  },
  {
    label: 'Drop-down',
    value: 'DROPDOWN',
    icon: <BsCardChecklist size={12} />
  },
  {
    label: 'Multi-select',
    value: 'MULTI_SELECT',
    icon: <BsCircle size={12} />
  },
  {
    label: 'Date',
    value: 'DATE',
    icon: <BsJustifyLeft size={12} />
  },
  {
    label: 'Attachment',
    value: 'ATTACHMENT',
    icon: <BsType size={12} />
  }
]
