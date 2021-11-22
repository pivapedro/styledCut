import React, { useEffect, useState } from 'react'

import { Container } from './styles'

interface PropsInput {
  setValue: (e: string) => any,
  opitions: [{
    name: string,
    value?: string,
  }],
  defaultValue?: string | number,
  errors?: [{
    description: string,
  }],
  alerts?: [{
    description: string,
  }],
  sucess?: Boolean,
}
export const Select: React.FC<PropsInput> = ({ setValue, errors, alerts, sucess, defaultValue, children, opitions, ...attrs }) => {

  const [inputValue, setInputValue] = useState<string>('')

  useEffect(() => {

    setValue(inputValue)

  }, [inputValue])

  return (
    <Container className={errors.length ? 'error' : alerts.length ? 'alert' : ''} {...attrs} >
      {
        errors.length ? errors.map((error, index) => index === 1 ? <span>{error.description}</span> : null)
          :
          alerts.length ? alerts.map((alert, index) => index === 1 ? <span>{alert.description}</span> : null)
            :
            null
      }
      <select defaultValue={defaultValue} onChange={(e) => setInputValue(e.target.value)} value={inputValue} >

        {

          opitions.map((option, index) => <option value={option.value || index}>{option.name}</option>)

        }

      </select>
      {children}
    </Container>
  )
}
