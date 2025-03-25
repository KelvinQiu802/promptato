import './App.css'
import AppSidebar from '@/components/AppSidebar'
import Editor from '@/components/Editor'
import OptionPanel from '@/components/OptionPanel'
import { SidebarProvider } from './components/ui/sidebar'

function App() {
  return (
    <div className='flex'>
      <SidebarProvider>
        <AppSidebar />
        <Editor />
        <OptionPanel />
      </SidebarProvider>
    </div>
  )
}

export default App
