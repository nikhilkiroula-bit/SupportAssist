const stats = [
  { label: 'Open Cases', value: '128', trend: '+12%' },
  { label: 'Avg. Resolution', value: '3.2d', trend: '-18%' },
  { label: 'SLA Compliance', value: '96.4%', trend: '+4.1%' },
  { label: 'Backlog', value: '24', trend: '-8%' }
]

const tickets = [
  { id: 'SUP-1042', customer: 'Alicia Morris', team: 'L1 Support', status: 'In Progress', priority: 'High', sla: '2h left' },
  { id: 'SUP-1049', customer: 'Marcus Lee', team: 'Billing', status: 'Waiting on Customer', priority: 'Medium', sla: '1d left' },
  { id: 'SUP-1055', customer: 'Priya Shah', team: 'Technical', status: 'Escalated', priority: 'Critical', sla: '30m left' },
  { id: 'SUP-1061', customer: 'Valentina Diaz', team: 'Account Mgmt', status: 'Resolved', priority: 'Low', sla: 'Closed' }
]

const queue = [
  { name: 'Escalations', value: 12, color: '#ef4444' },
  { name: 'New', value: 38, color: '#3b82f6' },
  { name: 'In Progress', value: 46, color: '#10b981' },
  { name: 'Waiting', value: 20, color: '#f59e0b' }
]

const teamPerformance = [
  { team: 'L1 Support', load: 78, resolved: 42 },
  { team: 'Billing', load: 64, resolved: 31 },
  { team: 'Technical', load: 88, resolved: 35 },
  { team: 'Account Mgmt', load: 52, resolved: 27 }
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">S</div>
          <div>
            <div className="brand-name">SupportAssist</div>
            <div className="brand-sub">Ops Console</div>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Tickets</button>
          <button className="nav-item">Customers</button>
          <button className="nav-item">SLA Tracking</button>
          <button className="nav-item">Reports</button>
          <button className="nav-item">Settings</button>
        </nav>

        <div className="sidebar-card">
          <div className="muted-label">Current focus</div>
          <h4>Escalation queue</h4>
          <p>12 cases need manager attention in the next 30 minutes.</p>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow">Support operations</div>
            <h1>Support overview</h1>
          </div>
          <button className="primary-btn">New ticket</button>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="muted-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-trend">{stat.trend}</div>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel wide-panel">
            <div className="panel-header">
              <h3>Queue distribution</h3>
              <button className="ghost-btn">View all</button>
            </div>

            <div className="queue-bars">
              {queue.map((item) => (
                <div className="bar-row" key={item.name}>
                  <div className="bar-label-row">
                    <span>{item.name}</span>
                    <strong>{item.value}</strong>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: `${(item.value / 60) * 100}%`, background: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Team health</h3>
            </div>

            <div className="team-list">
              {teamPerformance.map((team) => (
                <div className="team-row" key={team.team}>
                  <div className="team-label-row">
                    <span>{team.team}</span>
                    <strong>{team.load}%</strong>
                  </div>
                  <div className="mini-bar">
                    <div style={{ width: `${team.load}%` }} />
                  </div>
                  <small>{team.resolved} resolved this week</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Recent tickets</h3>
            <button className="ghost-btn">Export</button>
          </div>

          <table className="ticket-table">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Customer</th>
                <th>Team</th>
                <th>Status</th>
                <th>Priority</th>
                <th>SLA</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.customer}</td>
                  <td>{ticket.team}</td>
                  <td><span className={`status ${ticket.status.toLowerCase().replace(/\s+/g, '-')}`}>{ticket.status}</span></td>
                  <td><span className={`priority ${ticket.priority.toLowerCase()}`}>{ticket.priority}</span></td>
                  <td>{ticket.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default App
