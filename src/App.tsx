import './App.css'
import OptionPanel from '@/components/OptionPanel'
import SidebarWrapper from '@/components/Sidebar/SidebarWrapper'
import Editor from '@/components/Editor'

function App() {
  return (
    <div className='flex'>
      <SidebarWrapper />
      <Editor />
      <OptionPanel />
    </div>
  )
}

export default App
