import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { setKeySearchAction, setSearchResultAction } from '../actions/searchAction'
import { searchState } from '../state/searchState'

export const searchReducer = reducerWithInitialState(searchState)
.case(setKeySearchAction, (state, keySearch) => {
  return {
    ...state,
    keySearch
  }
})
.case(setSearchResultAction, (state, users) => {
  return {
    ...state,
    users
  }
})