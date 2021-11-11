import actionCreatorFactory from 'typescript-fsa'
import { User } from '../interface/User'

const actionCreator = actionCreatorFactory()

export const setKeySearchAction = actionCreator<string>('SET_KEY_SEARCH')
export const setSearchResultAction = actionCreator<User[]>('SET_SEARCH_RESULT')
export const fetchDataSearchAction = actionCreator<void>('FETCH_DATA_SEARCH')