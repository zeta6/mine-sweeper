import * as React from 'react'

type ButtonProps = {
  title: string
  time?: number
  onClick: (time?: number) => void
}

function Button({ title, time, onClick }: ButtonProps) {
  return (
    <span className={'button'} onClick={() => onClick(time)}>
      {title}
    </span>
  )
}

export default Button
