import { describe, expect, it } from 'vitest'
import { Alert } from './Alert.jsx'

describe('Alert', () => {
  const props = {
    type: 'success',
    title: 'Success',
    text: 'This is a success alert'
  }

  it('matches snapshot', () => {
    const alert = Alert(props)
    expect(alert).toMatchSnapshot()
  })
})
