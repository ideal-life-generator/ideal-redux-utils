# Redux utils

### Installation

```shell
npm install --save ideal-redux-utils
```

### Example

```js
import createReducer, { createAction } from 'ideal-redux-utils'

export const { type: SET_TEXT, action: setText } = createAction('SET_TEXT', 'text')

/*
export const SET_TEXT = 'SET_TEXT'

export function setText(text) {
  return {
    type: SET_TEXT,
    text,
  }
}
*/

export default createReducer({
  text: '',
}, {
  [SET_TEXT]: (state, { text }) => ({ ...state, text }),
})

/*
export default function reducer(state = {
  text: '',
}, action) {
  switch (action.type) {
    case SET_TEXT {
      return { ...state, text: action.text }
    }
    default: {
      return state
    }
  }
})
*/
```
