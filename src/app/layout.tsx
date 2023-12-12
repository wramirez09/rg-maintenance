'use client'
import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material';
import { Inter } from 'next/font/google';
import ResponsiveAppBar from './components/appBar/AppBar';
import './globals.scss';
import StyledComponentsRegistry from './lib/registry';
// const oswald = Oswald({
//   weight: ['200', '300', '400', '500', '600', '700',],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap',
// })

const inter = Inter({ subsets: ['latin'] })
const theme = createTheme({
  palette: {
    primary: {
      main: "#CC0A26",
      light: "#FA0C30",
      dark: "#570411",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    }

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 980,
      lg: 1024,
      xl: 1200,
    },
  },
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <html>
        <body className={inter.className}>

          <ResponsiveAppBar />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>

        </body>
      </html>
    </ThemeProvider>
  )
}
