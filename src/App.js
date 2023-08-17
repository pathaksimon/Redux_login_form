import {Provider} from 'react-redux'
import Home from './components/Home'
import './App.css'
import store from './components/Store/Store'

// Replace your code here
const App = () => {
  console.log('1')
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
