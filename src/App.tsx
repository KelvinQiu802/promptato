import './App.css'
import Sidebar from '@/components/Sidebar'
import Editor from '@/components/Editor'
import OptionPanel from '@/components/OptionPanel'

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <Editor />
      <OptionPanel />
    </div>
  )
}

export default App
