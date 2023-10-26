import { describe, expect, it } from 'vitest'
import { Card } from './Card'

describe('Card', () => {
  const props = {
    title: 'Test',
    children: 'Test',
    icon: 'Test'
  }

  it('matches snapshot', () => {
    const element = Card(props)
    expect(element).toMatchSnapshot()
  })
})
