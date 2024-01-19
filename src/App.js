import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
function App() {
  return (
    <AppWrapper>
<Header />
<div className="app__body">
      <Sidebar />

</div>
    </AppWrapper >
  );
}
const AppWrapper = styled.div`
  background-color: #f1f2f5;
  app__body: display: flex;
`
export default App;

