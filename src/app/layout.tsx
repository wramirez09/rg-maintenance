'use client'
import './globals.scss'
import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/appBar/AppBar';
import { PaletteColorOptions, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  weight: ['200', '300', '400', '500', '600', '700',],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({ subsets: ['latin'] })
const theme = createTheme({
  palette: {
    primary: {
      main: "#CC240B",
      light: "#FA2C0C",
      dark: "#801706",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    }

  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en" >
        <body className={inter.className}>
          <ResponsiveAppBar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
