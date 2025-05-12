// app/layout.tsx
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "../store/store";
import theme from "../theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/* Navbar, Sidebar, atau layout umum bisa ditambahkan di sini */}
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
