import { User } from "../interface/User";

export interface SearchState {
  keySearch: string
  users: User[]
}

export const searchState: SearchState = {
  keySearch: '',
  users: []
}