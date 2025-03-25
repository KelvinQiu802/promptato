import { Loader2 } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold text-muted-foreground'>Hello World</h1>
      <Loader2 className='animate-spin text-muted-foreground mt-2' />
    </div>
  )
}

export default App
