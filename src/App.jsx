import AppRouter from './router/AppRouter'
import { AppProvider } from './context/AppContext'
import './App.css';

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App;
