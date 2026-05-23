import {ReactNode} from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

type Props = {
  children: ReactNode
}

export default function DashboardShell({children}: Props) {
  return (
    <div className="flex min-h-screen">
        <Sidebar/>
        <div className="flex flex-1 flex-col">
            <Navbar/>

            <main className="flex-1 bg-zinc-100 p-8">
                {children}
            </main>
        </div>
    </div>
  )
}