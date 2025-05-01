import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import rootReducer from './reducers'

const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </StrictMode>,
)
