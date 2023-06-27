import '@fortawesome/fontawesome-free/css/all.min.css'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './app/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
