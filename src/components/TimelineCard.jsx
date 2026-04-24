import React, { useMemo } from 'react'

export default function TimelineCard({ data }) {
  const timeline = useMemo(() => {
    const now = new Date('2026-04-24T00:00:00Z')
    const startDate = new Date('2026-04-23T00:00:00Z')
    const endDate = new Date('2026-05-07T00:00:00Z')
    
    const daysElapsed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24))
    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24))
    const daysRemaining = totalDays - daysElapsed
    const percentComplete = (daysElapsed / totalDays) * 100

    return {
      daysElapsed,
      daysRemaining,
      totalDays,
      percentComplete,
      status: '🟢 On Schedule'
    }
  }, [data])

  return (
    <div className="card">
      <div className="card-header">📅 Project Timeline</div>
      <div className="card-body">
        <div className="metric">
          <span className="metric-label">Days Elapsed</span>
          <span className="metric-value">{timeline.daysElapsed}/{timeline.totalDays}</span>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${timeline.percentComplete}%` }}
          />
        </div>

        <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#888' }}>
          {timeline.percentComplete.toFixed(0)}% complete
        </div>

        <div className="metric" style={{ marginTop: '1.5rem' }}>
          <span className="metric-label">Days Remaining</span>
          <span className="metric-value">{timeline.daysRemaining}</span>
        </div>

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          background: 'rgba(76, 175, 80, 0.1)', 
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ color: '#4caf50', fontWeight: '600', marginBottom: '0.25rem' }}>
            {timeline.status}
          </div>
          <div style={{ fontSize: '0.85rem', color: '#888' }}>
            Ahead of plan
          </div>
        </div>

        <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#888', lineHeight: '1.6' }}>
          <div>📌 Start: Apr 23</div>
          <div>🏁 Target: May 7</div>
          <div style={{ color: '#4caf50', marginTop: '0.5rem' }}>✨ High confidence</div>
        </div>
      </div>
    </div>
  )
}
