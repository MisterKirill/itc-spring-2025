import './App.css'
import { Board } from './components/board/Board'
import { Bindings } from './components/bind/Bindings'
import { setupStore } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={setupStore()} >
      <div style={{display: "flex", flexDirection: "row"}}>
        <Board />
        <Bindings />
      </div>
    </Provider>
  )
}

export default App
