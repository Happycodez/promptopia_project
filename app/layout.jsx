import '@styles/globals.css';

export const metadata = {
    title: 'Promptopia',
    description:'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html land="en">
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout


