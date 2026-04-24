import React, { useMemo } from 'react'

export default function VideoCard({ data }) {
  const videos = useMemo(() => {
    if (!data) {
      return {
        total: 12,
        batch1: 4,
        batch2: 8,
        totalSize: '8.5MB'
      }
    }

    const total = 12
    const batch1 = 4
    const batch2 = 8
    const totalSize = '8.5MB'

    return { total, batch1, batch2, totalSize }
  }, [data])

  return (
    <div className="card">
      <div className="card-header">📹 Video Library</div>
      <div className="card-body">
        <div className="metric">
          <span className="metric-label">Total Videos</span>
          <span className="metric-value">{videos.total}</span>
        </div>

        <div className="metric">
          <span className="metric-label">Total Size</span>
          <span className="metric-value">{videos.totalSize}</span>
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(33, 150, 243, 0.1)', borderRadius: '8px' }}>
          <div style={{ marginBottom: '0.75rem', color: '#2196f3', fontWeight: '600' }}>
            ✅ Batch 1 (Approved)
          </div>
          <div style={{ fontSize: '0.9rem', color: '#999' }}>
            {videos.batch1} videos | 5.5MB
          </div>
        </div>

        <div style={{ marginTop: '0.75rem', padding: '1rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '8px' }}>
          <div style={{ marginBottom: '0.75rem', color: '#4caf50', fontWeight: '600' }}>
            ✅ Batch 2 (AI-Generated)
          </div>
          <div style={{ fontSize: '0.9rem', color: '#999' }}>
            {videos.batch2} videos | 2.4MB
          </div>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span className="badge success">Ready to Post</span>
          <span className="badge info">540×960 MP4</span>
        </div>

        <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
          📂 Location: /videos_ready/
        </div>
      </div>
    </div>
  )
}
