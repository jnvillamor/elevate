import React from 'react'

type MultiselectValueProps = {
  placeholder?: string;
}

const MultiselectValue = (props: MultiselectValueProps) => {
  return (
    <span>
      { props.placeholder ? props.placeholder : 'Select an option' }
    </span>
  )
}

export default MultiselectValue