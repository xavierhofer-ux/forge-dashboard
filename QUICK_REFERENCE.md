# 🎯 Quick Reference Card

## Run the Dashboard

```bash
cd /home/project_great_escape/.openclaw/workspace/dashboard-app
npm install    # First time only
npm start      # Visit http://localhost:3001
```

## Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main dashboard logic & state |
| `src/App.css` | Responsive styling & dark mode |
| `src/components/*` | Individual metric cards |
| `package.json` | Dependencies & scripts |
| `vite.config.js` | Build configuration |

## Dashboard Cards

1. **💰 Budget** - Spending tracker ($200 CAD allocated)
2. **📹 Videos** - Video library (12 videos, 8.5MB)
3. **🏗️ SaaS** - MVP progress (Backend/Frontend/Deployment %)
4. **📅 Timeline** - Project schedule (Day 1/14)
5. **🔗 Links** - Quick access to project files

## Features

- ✅ Mobile-responsive (phone, tablet, desktop)
- ✅ Dark mode by default
- ✅ Auto-refresh every 30 seconds
- ✅ Single-page React app
- ✅ No authentication needed
- ✅ Runs on localhost:3001

## Common Commands

```bash
npm start          # Start dev server on :3001
npm run build      # Build for production
npm run preview    # Preview production build
npm install        # Install dependencies
```

## Troubleshooting One-Liners

```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Clean reinstall
rm -rf node_modules package-lock.json && npm install

# Clear browser cache
# Chrome/Firefox: Ctrl+F5
# Safari: Cmd+Shift+R
```

## Data Sources

The dashboard reads from:
- `DASHBOARD.md` - Main metrics
- `BUDGET_LOG.md` - Budget data
- `PROGRESS_LOG.md` - Progress tracking

Updates automatically every 30 seconds.

## File Structure

```
dashboard-app/
├── src/
│   ├── main.jsx               # Entry point
│   ├── App.jsx                # Main component
│   ├── App.css                # Styling
│   └── components/            # Cards
├── index.html                 # HTML shell
├── package.json               # Config
└── README.md                  # Full docs
```

---

**Got stuck?** Read `README.md` or `SETUP_INSTRUCTIONS.txt` for detailed help.

**Ready?** → `npm start` → Open http://localhost:3001
