export default (initialState, handlers) => (state = initialState, action) => (
  Object.prototype.hasOwnProperty.call(handlers, action.type) ? handlers[action.type](state, action) : state
)

export const createAction = (type, ...argsNames) => ({
  type,
  action: (...args) => {
    const payload = { type }

    argsNames.forEach((name, index) => {
      payload[name] = args[index]
    })

    return payload
  },
})
