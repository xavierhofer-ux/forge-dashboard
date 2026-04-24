import React from 'react'

export default function QuickLinksCard() {
  const files = [
    { emoji: '📹', label: 'Videos Library', file: 'VIDEOS_LIBRARY.md' },
    { emoji: '📊', label: 'Dashboard', file: 'DASHBOARD.md' },
    { emoji: '💼', label: 'Budget Log', file: 'BUDGET_LOG.md' },
    { emoji: '📈', label: 'Progress', file: 'PROGRESS_LOG.md' },
    { emoji: '⚙️', label: 'State', file: 'STATE.md' },
    { emoji: '🏗️', label: 'Architecture', file: 'ARCHITECTURE_DIAGRAM.txt' },
    { emoji: '📝', label: 'README', file: 'README.md' },
    { emoji: '✅', label: 'Checklist', file: 'LAUNCH_CHECKLIST.md' }
  ]

  const handleFileClick = (filename) => {
    // In a real app, this would open the file
    // For now, we'll just log it
    console.log(`Clicked: ${filename}`)
    alert(`File: ${filename}\n\nNote: In a real deployment, this would open the file viewer.`)
  }

  return (
    <div className="card">
      <div className="card-header">🔗 Quick Links</div>
      <div className="card-body">
        <div className="quick-links">
          {files.map((item) => (
            <button
              key={item.file}
              className="quick-link"
              onClick={() => handleFileClick(item.file)}
              title={item.file}
            >
              <span>{item.emoji}</span>
              <span style={{ marginLeft: '0.4rem' }}>{item.label}</span>
            </button>
          ))}
        </div>

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          background: 'rgba(100, 181, 246, 0.1)', 
          borderRadius: '8px'
        }}>
          <div style={{ color: '#64b5f6', fontWeight: '600', marginBottom: '0.5rem' }}>
            💡 Pro Tip
          </div>
          <div style={{ fontSize: '0.85rem', color: '#888' }}>
            All project files are available in the workspace directory. Access them via your file viewer or terminal.
          </div>
        </div>

        <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
          Workspace: /home/project_great_escape/.openclaw/workspace/
        </div>
      </div>
    </div>
  )
}
