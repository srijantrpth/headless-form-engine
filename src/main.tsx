import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { FormProvider } from './context/FormContext.tsx'
import {BrowserRouter} from 'react-router'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <FormProvider>
    <App />
    
    </FormProvider>
    </BrowserRouter>
  </StrictMode>,
)
