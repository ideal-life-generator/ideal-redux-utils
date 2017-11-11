# Redux utils

### Installation

```shell
npm install --save ideal-redux-utils
```

### Example

```js
import createReducer, { createAction } from 'ideal-redux-utils'

export const { type: SET_NAME, action: setName } = createAction('SET_NAME', 'name')

/*
export const SET_NAME = 'SET_NAME'

export function setName(name) {
  return {
    type: SET_NAME,
    name,
  }
}
*/

export default createReducer({
  name: '',
}, {
  [SET_NAME]: (state, { name }) => ({ ...state, name }),
})

/*
export default function reducer(state = {
  name: '',
}, action) {
  switch (action.type) {
    case SET_NAME {
      return { ...state, name: action.name }
    }
    default: {
      return state
    }
  }
})
*/
```
