import { createRoot } from "react-dom/client";
import App from "./App";
import { PostContextProvider } from "./context/ContextApi";
createRoot(document.getElementById("root")).render(
  <PostContextProvider>
    <App />
  </PostContextProvider>
);
