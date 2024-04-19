import './App.css'
import SearchContextProvider from './Context'
import Header from './components/display'
import Input from './components/input'

function App() {

  return (
    <SearchContextProvider>
      <Header />
      <Input />
    </SearchContextProvider>
  )
}

export default App
