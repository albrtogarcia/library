import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('matches snapshot', () => {
    const element = Footer()
    expect(element).toMatchSnapshot()
  })
})
