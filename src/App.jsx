import AppRouter from './router/AppRouter'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App;
