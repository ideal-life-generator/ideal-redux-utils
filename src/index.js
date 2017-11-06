export default (initialState, handlers) => (state = initialState, { type, args }) => (
  Object.prototype.hasOwnProperty.call(handlers, type) ? handlers[type](state, ...args) : state
)

export const createAction = type => ({
  action: (...args) => ({
    type,
    args,
  }),
  type,
})
