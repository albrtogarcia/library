import { describe, expect, it } from 'vitest'
import { Badge } from './Badge.jsx'

describe('Badge', () => {
  const props = {
    type: 'success',
    text: 'Success'
  }

  it('matches snapshot', () => {
    const badge = Badge(props)
    expect(badge).toMatchSnapshot()
  })
})
