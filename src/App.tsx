import './App.css'
import OptionPanel from '@/components/OptionPanel'
import SidebarWrapper from '@/components/Sidebar/SidebarWrapper'
import Editor from '@/components/Editor'
import { useEffect } from 'react'

function App() {
  // Test electron-store
  useEffect(() => {
    if (!window.electronStore) return
    const test = async () => {
      const store = await window.electronStore.get('windowSize')
      console.log(store.width, store.height)
    }
    test()
  }, [])

  return (
    <div className='flex'>
      <SidebarWrapper />
      <Editor />
      <OptionPanel />
    </div>
  )
}

export default App
