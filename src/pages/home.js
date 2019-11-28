import React, { useEffect } from "react"
import Container from "../components/container"
import { connect } from 'react-redux';
import axios from 'axios';
const HomePage = ({isDarkMode,count,users, dispatch}) =>  {

  useEffect(() => {
    GetUsers(dispatch);
  },[count,isDarkMode,users]);


  return (
    <div style={{ color: 'teal' }}>
    <Container ContainerText="Home">
        <h1>Home CSS Modules</h1>
        <button
            style={isDarkMode ? { background: 'black', color: 'white' } : null}
            onClick={() => ToggleColor(dispatch,isDarkMode)}>Dark mode {isDarkMode ? 'on' : 'off'}
        </button>
        <button onClick={() => CountIncrement(dispatch,count)}>{count}</button>
        <button onClick={() => GetUsers(dispatch)}>Get Users</button>

        <div>
          <h1>Users List</h1>
          <ul>
            {users.map((user)=> {
              
              return(
                <li key={user.id}>{user.name}</li>
              )
              
            })}
          </ul>
        </div>
    </Container>
  </div>
  )

}




function GetUsers(dispatch){

    // This data is fetched at run time on the client.
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(data => {
          dispatch({ type: 'users',payload: data.data});
        })
        .catch(error => {

        })
}

function ToggleColor(dispatch,isDarkMode){
  dispatch({ type: 'TOGGLE_DARKMODE',payload: !isDarkMode});
}

function CountIncrement(dispatch,count){
  dispatch({ type: 'COUNTER',payload: count+1})
}

export default connect(state => ({
  isDarkMode: state.app.isDarkMode,
  count: state.app.count,
  users: state.app.users
}), null)(HomePage)