import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('matches snapshot', () => {
    const element = Sidebar()
    expect(element).toMatchSnapshot()
  })
})
