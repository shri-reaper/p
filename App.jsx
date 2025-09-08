import React from 'react'
import { createClient } from '@supabase/supabase-js'

// Supabase client (hard-coded keys)
const supabaseUrl = "https://mvcpnbmcqpnm1mzzeprv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12Y3BuYm1jcXBuTTFtemplcHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3MjM0NDAsImV4cCI6MjA0MTI5OTQ0MH0.Tq1yA3sb4pm7XPlcUuRXw9L2AcqhsJ2u3Ue7o3P1eqY"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function App() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600">🚀 Project Kickstart</h1>
      <p className="mt-4">Hackathon-ready Book & Notes Donation Platform</p>
      <p className="mt-2 text-sm text-gray-600">Connected to Supabase ✅</p>
    </div>
  )
}
