
import { Provider } from 'react-redux';
import './App.scss'
import { Books } from './components/Books';
import { store } from './app/store';



function App() {


  return (
    <>
      <Provider store={store}>
        <Books />
      </Provider>
    </>
  )
}

export default App
