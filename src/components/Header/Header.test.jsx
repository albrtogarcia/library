import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('matches snapshot', () => {
    const element = Header()
    expect(element).toMatchSnapshot()
  })
})
