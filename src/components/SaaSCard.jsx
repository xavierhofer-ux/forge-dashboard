import React, { useMemo } from 'react'

export default function SaaSCard({ data }) {
  const saasProgress = useMemo(() => {
    if (!data) {
      return {
        backend: 40,
        frontend: 30,
        deployment: 0,
        overall: 23
      }
    }

    return {
      backend: 40,
      frontend: 30,
      deployment: 0,
      overall: 23
    }
  }, [data])

  return (
    <div className="card">
      <div className="card-header">🏗️ SaaS MVP Progress</div>
      <div className="card-body">
        <div style={{ marginBottom: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
            <span className="metric-label">Backend</span>
            <span className="metric-value">{saasProgress.backend}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${saasProgress.backend}%` }}
            />
          </div>
          <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.3rem' }}>
            Express + Prisma + Claude
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
            <span className="metric-label">Frontend</span>
            <span className="metric-value">{saasProgress.frontend}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${saasProgress.frontend}%` }}
            />
          </div>
          <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.3rem' }}>
            React + 7 pages scaffolded
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
            <span className="metric-label">Deployment</span>
            <span className="metric-value">{saasProgress.deployment}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill warning"
              style={{ width: `${saasProgress.deployment}%` }}
            />
          </div>
          <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.3rem' }}>
            PostgreSQL + Stripe integration
          </div>
        </div>

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          background: 'rgba(33, 150, 243, 0.1)', 
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2196f3' }}>
            {saasProgress.overall}%
          </div>
          <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.25rem' }}>
            Overall Progress
          </div>
        </div>

        <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
          🚀 Target: 14-day MVP launch
        </div>
      </div>
    </div>
  )
}
