import { Middleware, Dispatch } from 'redux'
import { isType } from 'typescript-fsa'
import { fetchDataSearchAction, setSearchResultAction } from '../actions/searchAction'
import { User } from '../interface/User'
import { initEndpointService } from '../services/APIService'

async function fetchSearchData(dispatch: Dispatch, getState: Function) {
  const state = getState()
  const { keySearch } = state
  const apiService = initEndpointService()
  if (keySearch && keySearch.length >= 3) {
    const user = await apiService.sendGet(`users/${keySearch}`)
    const users: User[] = [{
      avatarUrl: user.avatar_url,
      loginUsername: user.login,
      score: user.id,
      type: user.type
    }]
    dispatch(setSearchResultAction(users))
  }
}

// function combine() {
//   const unavailableItems = [
//     { startPx: 10, endPx: 30 },
//     { startPx: 60, endPx: 65 },
//     { startPx: 35, endPx: 50 },
//     { startPx: 20, endPx: 40 },
//     { startPx: 51, endPx: 59 },
//     { startPx: 60, endPx: 70 }
//   ]
  
//   const arr: any = []
  
//   unavailableItems.sort((ele1, ele2) => {
//     return ele1.startPx - ele2.startPx
//   })
//   unavailableItems.reduce((pre: any, cur: any, index) => {
//     if(pre && cur) {
//       if (pre.endPx >= cur.startPx) {
//         const newVal = { startPx: Math.min(pre.startPx, cur.startPx), endPx: Math.max(pre.endPx, cur.endPx) }
//         if (index === unavailableItems.length - 1) arr.push(newVal)
//         return newVal
//       } else {
//         arr.push(pre)
//         if (index === unavailableItems.length - 1) arr.push(cur)
//         return cur
//       }
//     }
//   })
//   console.log(arr)
// }

export const searchMiddleware: Middleware = store => next => action => {
  if (isType(action, fetchDataSearchAction)) fetchSearchData(store.dispatch, store.getState)
  next(action)
}