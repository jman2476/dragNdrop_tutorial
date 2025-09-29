import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';

import App from "./App"

// const rootElement = document.getElementById('root')
// rootElement.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
