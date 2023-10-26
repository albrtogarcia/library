import { describe, expect, it } from 'vitest'
import { Table } from './Table'

describe('Table', () => {
  it('matches snapshot', () => {
    const element = Table()
    expect(element).toMatchSnapshot()
  })
})
