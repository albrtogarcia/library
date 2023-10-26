import { describe, expect, it } from 'vitest'
import { Icon } from './Icon.jsx'

describe('Icon', () => {
  const props = {
    name: 'success'
  }

  it('matches snapshot', () => {
    const icon = Icon(props)
    expect(icon).toMatchSnapshot()
  })
})
