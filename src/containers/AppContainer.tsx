import * as React from 'react';
import { connect } from "react-redux";
import { SearchState } from "../state/searchState";
import { fetchDataSearchAction, setKeySearchAction } from "../actions/searchAction";
import { User } from "../interface/User";
export interface AppContainerProps {
  keySearch?: string
  users?: User[]
  setKeySearch: (keySearch: string) => void
  fetchUserData: () => void
}

export class AppContainerImplementation extends React.Component<AppContainerProps> {
  handleOnChange = (value: string) => {
    const { setKeySearch, fetchUserData } = this.props
    setKeySearch(value)
    fetchUserData()
  }
  render(){
    const { keySearch, users } = this.props
    console.log({keySearch})
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Search: <input type="text" onChange={e => this.handleOnChange(e.target.value)} />
          </p>
          <p>
            avatar url: { users && users.length && users[0].avatarUrl}
          </p>
        </header>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  fetchUserData: () => dispatch(fetchDataSearchAction()),
  setKeySearch: (keySearch: string) => dispatch(setKeySearchAction(keySearch))
})

const mapStateToProps = ({
  keySearch,
  users
}: SearchState) => ({
  keySearch,
  users
})

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerImplementation)