import { store } from "@/store";
import "@/styles/globals.css";
import NextProgress from "next-progress";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <NextProgress
          color="#8b5cf6"
          height={3}
          options={{ showSpinner: false }}
        />
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
