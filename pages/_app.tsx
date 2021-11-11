import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

interface MyAppProps {
  Component: any
  pageProps: any
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      <div className='font-KoHo'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
