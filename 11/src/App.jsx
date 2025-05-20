import './App.css'
import { Playground } from './components/Playground'
import { setupStore } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={setupStore()}>
      <Playground />
    </Provider>
  )
}

export default App
