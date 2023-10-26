import { describe, expect, it } from 'vitest'
import { Loader } from './Input.jsx'

describe('Loader', () => {
  it('matches snapshot', () => {
    const element = Loader()
    expect(element).toMatchSnapshot()
  })
})
