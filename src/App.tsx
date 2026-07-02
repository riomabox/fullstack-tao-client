import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [dbStatus, setDbStatus] = useState<string>('Checking backend...')

  useEffect(() => {
    // Basic connectivity check to your self-hosted instance
    supabase.auth.getSession()
      .then(() => setDbStatus('Connected to Self-Hosted Supabase!'))
      .catch(() => setDbStatus('Connection failed. Is Docker running?'))
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl text-center">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-2">
          Windows Environment
        </h1>
        <p className="text-sm text-slate-400 mb-6">React (Vite) + Tailwind + Docker Backend</p>
        
        <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
          <span className="text-xs uppercase tracking-wider font-mono block text-slate-500 mb-1">
            Backend Connection Status
          </span>
          <p className="text-emerald-400 font-mono font-medium">{dbStatus}</p>
        </div>
      </div>
    </div>
  )
}

export default App