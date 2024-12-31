// Store
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

// Styles
import { ThemeContextProvider } from "@/context/theme-provider";
import "@/styles/globals.css";

// Layout
import Layout from "@/components/layout/layout";
import { ChatSocketProvider } from "@/context/chat-socket";

export default function App({ Component, pageProps, ...rest }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
        <ThemeContextProvider>
          <ChatSocketProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChatSocketProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
}
