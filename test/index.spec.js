import createReducer, { createAction } from '../src/index'

describe('action', () => {
  const { type, action } = createAction('TEST')

  it('create', () => {
    expect(type).toEqual('TEST')

    expect(action).toBeInstanceOf(Function)
  })

  it('without arguments', () => {
    expect(action()).toEqual({ type: 'TEST', args: [] })
  })

  it('with argument', () => {
    expect(action('test')).toEqual({ type: 'TEST', args: ['test'] })
  })

  it('with arguments', () => {
    expect(action(1, 2)).toEqual({ type: 'TEST', args: [1, 2] })
  })
})

describe('reducer', () => {
  const reducer = createReducer({
    test: 'test',
  }, {
    TEST: (state, arg1, arg2) => ({ ...state, test: !arg2 ? arg1 : arg1 + arg2 }),
  })

  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual({ test: 'test' })
  })

  it('handler without arguments', () => {
    expect(reducer(undefined, { type: 'TEST' })).toEqual({ test: undefined })
  })

  it('handler with argument', () => {
    expect(reducer(undefined, { type: 'TEST', args: [1] })).toEqual({ test: 1 })
  })

  it('handler with arguments', () => {
    expect(reducer(undefined, { type: 'TEST', args: [1, 2] })).toEqual({ test: 3 })
  })
})
