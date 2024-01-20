

import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Header from './components/Header'
import Widget from './components/Widget'
import { useState } from 'react'
import Login from './components/Login'
function App() {
  const [user, setUser] = useState(null)
  return (
    <AppWrapper>

{user ? (
          <><Header /><div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div></>
            ): (<Login />)}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`
export default App;

