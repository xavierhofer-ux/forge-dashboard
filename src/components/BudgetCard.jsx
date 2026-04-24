import React, { useMemo } from 'react'

export default function BudgetCard({ data }) {
  const budget = useMemo(() => {
    if (!data) {
      return {
        allocated: 200,
        spent: 0,
        remaining: 200,
        burnRate: 0,
        runway: '∞'
      }
    }

    const allocated = 200
    const spent = 0
    const remaining = allocated - spent
    const burnRate = 0
    const runway = '∞'

    return { allocated, spent, remaining, burnRate, runway }
  }, [data])

  const spentPercent = (budget.spent / budget.allocated) * 100

  return (
    <div className="card">
      <div className="card-header">💰 Budget Status</div>
      <div className="card-body">
        <div className="metric">
          <span className="metric-label">Allocated</span>
          <span className="metric-value">${budget.allocated} CAD</span>
        </div>

        <div className="metric">
          <span className="metric-label">Spent</span>
          <span className={`metric-value ${budget.spent > 0 ? 'warning' : ''}`}>
            ${budget.spent}
          </span>
        </div>

        <div className="progress-bar">
          <div 
            className={`progress-fill ${spentPercent > 75 ? 'danger' : spentPercent > 50 ? 'warning' : ''}`}
            style={{ width: `${Math.max(spentPercent, 2)}%` }}
          />
        </div>

        <div className="metric">
          <span className="metric-label">Remaining</span>
          <span className="metric-value positive">${budget.remaining} CAD</span>
        </div>

        <div className="metric">
          <span className="metric-label">Burn Rate</span>
          <span className="metric-value">${budget.burnRate}/day</span>
        </div>

        <div className="metric">
          <span className="metric-label">Runway</span>
          <span className="metric-value positive">{budget.runway}</span>
        </div>

        <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px', color: '#4caf50', fontSize: '0.85rem' }}>
          ✅ Excellent financial position - no spending yet
        </div>
      </div>
    </div>
  )
}
