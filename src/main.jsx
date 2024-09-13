import { createRoot } from 'react-dom/client'
import { ChakraProvider , extendTheme } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
const theme = extendTheme({
  fonts: {
    body:"'Josefin Sans', sans-serif",
  },
});

createRoot(document.getElementById('root')).render(
 <ChakraProvider theme={theme}>
  <App />
 </ChakraProvider>
    
  
)
