import createReducer, { createAction } from '../src/index'

describe('action', () => {
  const { type, action } = createAction('TEST', 'first', 'second')

  it('create', () => {
    expect(type).toEqual('TEST')

    expect(action).toBeInstanceOf(Function)
  })

  it('without arguments', () => {
    expect(action()).toEqual({ type: 'TEST' })
  })

  it('with argument', () => {
    expect(action('test')).toEqual({ type: 'TEST', first: 'test' })
  })

  it('with arguments', () => {
    expect(action(1, 2)).toEqual({ type: 'TEST', first: 1, second: 2 })
  })
})

describe('reducer', () => {
  const reducer = createReducer({
    test: 'test',
  }, {
    TEST: (state, { first, second }) => ({ ...state, test: !second ? first : first + second }),
  })

  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual({ test: 'test' })
  })

  it('handler without arguments', () => {
    expect(reducer(undefined, { type: 'TEST' })).toEqual({ test: undefined })
  })

  it('handler with argument', () => {
    expect(reducer(undefined, { type: 'TEST', first: 1 })).toEqual({ test: 1 })
  })

  it('handler with arguments', () => {
    expect(reducer(undefined, { type: 'TEST', first: 1, second: 2 })).toEqual({ test: 3 })
  })
})
