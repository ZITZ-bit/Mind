import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Portal.css'

type Page = {
  title: string
  category: string
  updated: string
  icon: string
  tone: string
}

type Task = {
  title: string
  project: string
  due: string
  tone: string
  completed: boolean
}

const initialPages: Page[] = [
  { title: 'Plan de lanzamiento Q3', category: 'Marketing', updated: 'hace 12 min', icon: '↗', tone: 'purple' },
  { title: 'Notas de reunión semanal', category: 'Equipo', updated: 'hace 1 h', icon: '✳', tone: 'peach' },
  { title: 'Guía de identidad visual', category: 'Diseño', updated: 'ayer', icon: '◈', tone: 'blue' },
  { title: 'Roadmap de producto', category: 'Producto', updated: 'ayer', icon: '⌁', tone: 'mint' },
]

const initialTasks: Task[] = [
  { title: 'Revisar propuesta de campaña', project: 'Lanzamiento Q3', due: 'Hoy', tone: 'purple', completed: false },
  { title: 'Compartir notas con el equipo', project: 'Reunión semanal', due: 'Hoy', tone: 'peach', completed: false },
  { title: 'Aprobar nuevos wireframes', project: 'App móvil', due: 'Mañana', tone: 'blue', completed: false },
]

const navigation = [
  { label: 'Inicio', icon: '⌂' },
  { label: 'Mis páginas', icon: '▤' },
  { label: 'Favoritos', icon: '☆' },
]

const teams = [
  { label: 'Marketing', color: 'team-purple' },
  { label: 'Producto', color: 'team-blue' },
  { label: 'Diseño', color: 'team-peach' },
]

const todayLabel = new Intl.DateTimeFormat('es-ES', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
}).format(new Date()).toLocaleUpperCase('es-ES')

function Portal() {
  const [searchValue, setSearchValue] = useState('')
  const [activeSection, setActiveSection] = useState('Inicio')
  const [pages, setPages] = useState(initialPages)
  const [tasks, setTasks] = useState(initialTasks)

  const filteredPages = useMemo(() => {
    const query = searchValue.trim().toLocaleLowerCase()
    if (!query) return pages
    return pages.filter((page) =>
      `${page.title} ${page.category}`.toLocaleLowerCase().includes(query),
    )
  }, [pages, searchValue])

  const completedTasks = tasks.filter((task) => task.completed).length
  const completion = tasks.length ? Math.round((completedTasks / tasks.length) * 100) : 0

  function createPage() {
    const pageNumber = pages.length + 1
    setPages([
      {
        title: `Nueva página ${pageNumber}`,
        category: 'Sin categoría',
        updated: 'ahora',
        icon: '✎',
        tone: 'purple',
      },
      ...pages,
    ])
  }

  function toggleTask(taskIndex: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task, index) =>
        index === taskIndex ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return (
    <div className="portal-app">
      <aside className="sidebar">
        <a aria-label="Mind, ir al inicio" className="brand" href="#">
          <span className="brand-mark">
            <svg aria-hidden="true" viewBox="0 0 32 32" fill="none">
              <path d="M7 23.5V9.2c0-1.6 1.8-2.4 3-1.3l6 5.7 6-5.7c1.2-1.1 3-.3 3 1.3v14.3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>mind<span className="brand-period">.</span></span>
        </a>

        <button className="workspace-switcher" type="button">
          <span className="workspace-avatar">N</span>
          <span className="workspace-copy">
            <strong>Northstar Studio</strong>
            <small>Espacio de trabajo</small>
          </span>
          <svg aria-hidden="true" className="workspace-chevron" viewBox="0 0 20 20" fill="none">
            <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="sidebar-label">ESPACIO DE TRABAJO</div>
        <nav aria-label="Navegación principal" className="side-nav">
          {navigation.map((item) => (
            <button
              aria-current={activeSection === item.label ? 'page' : undefined}
              className={`side-nav-link${activeSection === item.label ? ' active' : ''}`}
              key={item.label}
              onClick={() => setActiveSection(item.label)}
              type="button"
            >
              <span className="side-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.label === 'Mis páginas' && <span className="nav-count">{pages.length}</span>}
            </button>
          ))}
        </nav>

        <div className="team-heading">
          <span className="sidebar-label">EQUIPOS</span>
          <button aria-label="Añadir equipo" className="small-icon-button" type="button">+</button>
        </div>
        <nav aria-label="Equipos" className="side-nav team-nav">
          {teams.map((team) => (
            <button
              className={`side-nav-link${activeSection === team.label ? ' active' : ''}`}
              key={team.label}
              onClick={() => setActiveSection(team.label)}
              type="button"
            >
              <span className={`team-dot ${team.color}`} />
              <span>{team.label}</span>
              <span className="team-more">···</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="plan-card">
            <div className="plan-icon">✦</div>
            <strong>Tu espacio, a tu manera</strong>
            <p>Invita a tu equipo y colaboren en un solo lugar.</p>
            <button type="button">Invitar al equipo <span>→</span></button>
          </div>
          <button className="profile-link" type="button">
            <span className="profile-avatar">AR</span>
            <span className="profile-copy"><strong>Andrea Ruiz</strong><small>Plan personal</small></span>
            <span className="profile-more">···</span>
          </button>
        </div>
      </aside>

      <div className="portal-main">
        <Navbar onSearch={setSearchValue} searchValue={searchValue} />
        <main className="dashboard">
          <section aria-labelledby="welcome-title" className="welcome-row">
            <div>
              <div className="eyebrow"><span className="status-dot" /> {todayLabel}</div>
              <h1 id="welcome-title">Buenos días, Andrea <span className="wave">✦</span></h1>
              <p className="welcome-subtitle">Un buen día para poner tus ideas en orden.</p>
            </div>
            <button className="create-button" onClick={createPage} type="button">
              <span>＋</span> Crear una página
            </button>
          </section>

          <section aria-label="Resumen del espacio" className="summary-grid">
            <article className="summary-card focus-card">
              <div className="summary-card-top">
                <span className="summary-icon focus-icon">◷</span>
                <span className="summary-kicker">ENFOQUE DE HOY</span>
                <span className="summary-more">···</span>
              </div>
              <strong className="summary-value">{tasks.length - completedTasks}<span> tareas pendientes</span></strong>
              <div className="progress-track"><span style={{ width: `${completion}%` }} /></div>
              <div className="summary-foot"><span>{completedTasks} de {tasks.length} completadas</span><strong>{completion}%</strong></div>
            </article>
            <article className="summary-card pages-card">
              <div className="summary-card-top">
                <span className="summary-icon pages-icon">▤</span>
                <span className="summary-kicker">TUS IDEAS</span>
                <span className="summary-more">···</span>
              </div>
              <strong className="summary-value">{pages.length}<span> páginas recientes</span></strong>
              <div className="summary-note"><span className="note-spark">✦</span> Todo lo importante, en un solo lugar</div>
            </article>
            <article className="summary-card team-card">
              <div className="summary-card-top">
                <span className="summary-icon team-icon">♧</span>
                <span className="summary-kicker">TU EQUIPO</span>
                <span className="summary-more">···</span>
              </div>
              <strong className="summary-value">3<span> equipos activos</span></strong>
              <div className="avatar-stack" aria-label="Miembros del equipo">
                <span className="mini-avatar avatar-lilac">AR</span>
                <span className="mini-avatar avatar-peach">CM</span>
                <span className="mini-avatar avatar-blue">JL</span>
                <span className="mini-avatar avatar-mint">+4</span>
                <small>Colaborando contigo</small>
              </div>
            </article>
          </section>

          <div className="content-grid">
            <section aria-labelledby="recent-title" className="content-panel recent-panel">
              <div className="section-heading">
                <div>
                  <h2 id="recent-title">Continuar trabajando</h2>
                  <p>Tus páginas recientes, listas para seguir.</p>
                </div>
                <button className="text-action" onClick={createPage} type="button">Ver todas <span>→</span></button>
              </div>
              <div className="page-list">
                {filteredPages.length ? filteredPages.map((page, index) => (
                  <button className="page-row" key={`${page.title}-${index}`} type="button">
                    <span className={`page-icon page-icon-${page.tone}`}>{page.icon}</span>
                    <span className="page-details">
                      <strong>{page.title}</strong>
                      <small>{page.category} <span>·</span> Editado {page.updated}</small>
                    </span>
                    <span className="page-open">↗</span>
                  </button>
                )) : (
                  <div className="empty-search">
                    <span>⌕</span>
                    <strong>No encontramos páginas</strong>
                    <p>Prueba con otro término de búsqueda.</p>
                  </div>
                )}
              </div>
              <button className="new-page-link" onClick={createPage} type="button"><span>＋</span> Crear una página nueva</button>
            </section>

            <section aria-labelledby="tasks-title" className="content-panel tasks-panel">
              <div className="section-heading">
                <div>
                  <h2 id="tasks-title">Tu día</h2>
                  <p>Pequeños pasos, grandes ideas.</p>
                </div>
                <button aria-label="Más opciones de tareas" className="panel-more" type="button">···</button>
              </div>
              <div className="task-list">
                {tasks.map((task, index) => (
                  <label className={`task-row${task.completed ? ' task-completed' : ''}`} key={task.title}>
                    <input checked={task.completed} onChange={() => toggleTask(index)} type="checkbox" />
                    <span className="custom-checkbox" />
                    <span className="task-copy">
                      <strong>{task.title}</strong>
                      <small><span className={`task-tag tag-${task.tone}`} />{task.project}</small>
                    </span>
                    <span className={`task-due${task.due === 'Hoy' ? ' due-today' : ''}`}>{task.due}</span>
                  </label>
                ))}
              </div>
              <button className="add-task-link" onClick={() => setTasks((current) => [...current, {
                title: 'Nueva tarea',
                project: 'Personal',
                due: 'Hoy',
                tone: 'mint',
                completed: false,
              }])} type="button"><span>＋</span> Añadir una tarea</button>
              <div className="quote-card">
                <span className="quote-mark">“</span>
                <p>La claridad viene de<br />la acción, no del pensamiento.</p>
                <span className="quote-author">— MARIE FORLEO</span>
                <span aria-hidden="true" className="quote-decoration">✳</span>
              </div>
            </section>
          </div>

          <footer className="dashboard-footer">
            <span>Hecho para pensar mejor <span className="footer-heart">♥</span></span>
            <span>Tu espacio está al día <span className="footer-check">✓</span></span>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Portal
