import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BudgetCard from './components/BudgetCard'
import VideoCard from './components/VideoCard'
import SaaSCard from './components/SaaSCard'
import TimelineCard from './components/TimelineCard'
import QuickLinksCard from './components/QuickLinksCard'
import './App.css'

export default function App() {
  const [dashboardData, setDashboardData] = useState(null)
  const [budgetData, setBudgetData] = useState(null)
  const [progressData, setProgressData] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const baseDir = '../..'

  const fetchData = async () => {
    try {
      setError(null)
      
      // Fetch DASHBOARD.md
      const dashboardRes = await axios.get(`${baseDir}/DASHBOARD.md`, { responseType: 'text' })
      setDashboardData(dashboardRes.data)
      
      // Fetch BUDGET_LOG.md
      const budgetRes = await axios.get(`${baseDir}/BUDGET_LOG.md`, { responseType: 'text' })
      setBudgetData(budgetRes.data)
      
      // Fetch PROGRESS_LOG.md
      const progressRes = await axios.get(`${baseDir}/PROGRESS_LOG.md`, { responseType: 'text' })
      setProgressData(progressRes.data)
      
      setLastUpdated(new Date())
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch dashboard data. Using demo mode.')
      setLoading(false)
      console.log('Note: Running in demo mode since files are not accessible via HTTP')
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 30000) // Auto-refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🚀 Forge Dashboard</h1>
          <div className="header-info">
            <span className="status-badge">🟢 LIVE</span>
            <span className="last-updated">Updated: {lastUpdated.toLocaleTimeString()}</span>
          </div>
        </div>
      </header>

      {error && <div className="error-banner">{error}</div>}

      <main className="dashboard-grid">
        <BudgetCard data={budgetData} />
        <VideoCard data={progressData} />
        <SaaSCard data={dashboardData} />
        <TimelineCard data={dashboardData} />
        <QuickLinksCard />
      </main>

      <footer className="footer">
        <p>Forge Project Progress Tracker • Auto-refresh every 30s</p>
      </footer>
    </div>
  )
}
