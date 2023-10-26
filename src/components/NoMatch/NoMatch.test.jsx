import { describe, expect, it } from 'vitest'
import { NoMatch } from './NoMatch.jsx'

describe('NoMatch', () => {
  it('matches snapshot', () => {
    const element = NoMatch()
    expect(element).toMatchSnapshot()
  })
})
