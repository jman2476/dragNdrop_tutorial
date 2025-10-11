import { StrictMode } from "react";
import ReactDOM from 'react-dom';

import App from "./App";

const rootElement = document.getElementById("root")
ReactDom.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
)