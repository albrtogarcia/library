import { describe, expect, it } from 'vitest'
import { Loader } from './Loader.jsx'

describe('Loader', () => {
  it('matches snapshot', () => {
    const element = Loader()
    expect(element).toMatchSnapshot()
  })
})
