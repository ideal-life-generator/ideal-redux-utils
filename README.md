# Redux utils

### Installation

```shell
npm install --save ideal-redux-utils
```

### Usage

```js
import createReducer, { createAction } from 'ideal-redux-utils'

export const { type: EXAMPLE_SET_NAME, action: setName } = createAction('EXAMPLE_SET_NAME')

export default createReducer({
  name: '',
}, {
  [EXAMPLE_SET_NAME]: (state, name) => ({ ...state, name }),
})

/*
export const EXAMPLE_SET_NAME = 'EXAMPLE_SET_NAME'

export function setName(name) {
  return {
    type: EXAMPLE_SET_NAME,
    name,
  }
}

const initialState = {
  name: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_SET_NAME {
      return { ...state, name: action.name }
    }
    default: {
      return state
    }
  }
})
*/
```
