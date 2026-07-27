import { useEffect, useMemo, useState } from 'react'
import { BookOpen, BrainCircuit, CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Compass, FolderKanban, Sparkles } from 'lucide-react'
import './App.css'

type Review = { thread_id: string; review_date: string; phase: string; summary: string }
type Thread = Review & { raw_text: string; response: string; question: string | null; dialogue: { role: string; content: string }[] }
type Project = { id: string; name: string; next_action: string; status: string; evidence: unknown[] }
type Page = 'review' | 'history' | 'projects' | 'profile'

const API = 'http://127.0.0.1:8766'
const toKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

export default function App() {
  const [page, setPage] = useState<Page>('review')
  const [selected, setSelected] = useState(new Date())
  const [month, setMonth] = useState(new Date())
  const [reviews, setReviews] = useState<Review[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [draft, setDraft] = useState('')
  const [activeThread, setActiveThread] = useState<Thread | null>(null)
  const [reply, setReply] = useState('')
  const [saving, setSaving] = useState(false)
  const [sendingReply, setSendingReply] = useState(false)
  const [message, setMessage] = useState('')
  const selectedKey = toKey(selected)

  const refresh = async () => {
    const [reviewResponse, projectResponse] = await Promise.all([fetch(`${API}/api/reviews`), fetch(`${API}/api/projects`)])
    if (!reviewResponse.ok || !projectResponse.ok) throw new Error('本地服务没有响应')
    setReviews(await reviewResponse.json())
    setProjects(await projectResponse.json())
  }

  useEffect(() => { refresh().catch(() => setMessage('本地数据服务尚未连接。请从桌面启动器打开应用。')) }, [])

  const selectedReview = reviews.find(item => item.review_date === selectedKey)
  const completed = reviews.filter(item => item.phase === 'organized').length
  const save = async () => {
    if (!draft.trim()) return setMessage('先写一点今天真实发生的事。')
    setSaving(true)
    try {
      const response = await fetch(`${API}/api/reviews`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ date: selectedKey, raw_text: draft }) })
      if (!response.ok) throw new Error('save failed')
      const data = await response.json() as Thread
      setActiveThread(data)
      setMessage('原始记录已保存。军师正在基于它追问，而不是直接给结论。')
      setDraft('')
      await refresh()
    } catch { setMessage('保存失败，请检查本地服务后重试。') } finally { setSaving(false) }
  }

  const openReview = async (threadId: string) => {
    const response = await fetch(`${API}/api/reviews/${threadId}`)
    if (!response.ok) return setMessage('这份复盘暂时无法读取。')
    setActiveThread(await response.json() as Thread)
    setReply('')
    go('review')
  }

  const sendReply = async () => {
    if (!activeThread || !reply.trim() || !activeThread.question) return
    setSendingReply(true)
    try {
      const response = await fetch(`${API}/api/reviews/${activeThread.thread_id}/reply`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: reply }) })
      if (!response.ok) throw new Error('reply failed')
      const data = await response.json() as Thread
      setActiveThread(data)
      setReply('')
      setMessage(data.phase === 'organized' ? '这份复盘已整理并归档。接下来可以同步项目进度。' : '军师继续追问中。')
      await refresh()
    } catch { setMessage('回复没有发送成功，请检查本地服务。') } finally { setSendingReply(false) }
  }

  const calendarDays = useMemo(() => {
    const year = month.getFullYear(), index = month.getMonth()
    const first = new Date(year, index, 1), start = new Date(year, index, 1 - first.getDay())
    return Array.from({ length: 42 }, (_, offset) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + offset))
  }, [month])

  const go = (next: Page) => { setPage(next); setMessage('') }
  return <div className="advisor-shell">
    <aside className="rail">
      <div className="brand"><div className="brand-mark">J</div><div><b>复盘军师</b><small>JERRY · PRIVATE</small></div></div>
      <nav className="primary-nav" aria-label="主导航">
        <button className={page === 'review' ? 'active' : ''} onClick={() => go('review')}><BookOpen />复盘</button>
        <button className={page === 'history' ? 'active' : ''} onClick={() => go('history')}><CalendarDays />历史</button>
        <button className={page === 'projects' ? 'active' : ''} onClick={() => go('projects')}><FolderKanban />进度</button>
        <button className={page === 'profile' ? 'active' : ''} onClick={() => go('profile')}><Compass />画像</button>
      </nav>
      <div className="flow-label">军师流程</div>
      <ol className="flow-list"><li><span>01</span><div><b>先还原事实</b><small>你写原始记录</small></div></li><li><span>02</span><div><b>只问关键处</b><small>军师补齐判断依据</small></div></li><li><span>03</span><div><b>确认真实进度</b><small>同步完成与阻塞</small></div></li><li><span>04</span><div><b>落到明天第一步</b><small>执行日不改大计划</small></div></li></ol>
      <div className="rail-foot"><span className="status-dot"/>本地文件与数据</div>
    </aside>
    <main className="workspace">
      {page === 'review' && <section className="writer-view"><header className="page-head"><div><p>今日复盘</p><h1>把今天，讲给自己听。</h1></div><time>{new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' }).format(selected)}</time></header>{!activeThread ? <div className="writer-card"><div className="writer-meta"><span>原始记录</span><span>{selectedKey}</span></div><textarea value={draft} onChange={event => setDraft(event.target.value)} placeholder="不需要写得漂亮。今天实际做了什么？在哪里卡住？你当时是怎么应对的？明天最重要的第一步是什么？"/><footer><p>原文会被单独保存，军师整理不会覆盖它。</p><button disabled={saving} onClick={save}>{saving ? '军师正在思考…' : <>交给军师 <span>→</span></>}</button></footer></div> : <div className="conversation-card"><div className="conversation-title"><div><span>本次复盘</span><h2>{activeThread.review_date}</h2></div><button onClick={() => { setActiveThread(null); setReply(''); setMessage('') }}>新建记录</button></div><section className="raw-entry"><p>你的原始记录</p><div>{activeThread.raw_text}</div></section><section className="adviser-turn"><div className="turn-label"><BrainCircuit size={17}/>军师的追问</div><p>{activeThread.question || activeThread.response}</p>{activeThread.question ? <div className="reply-box"><textarea value={reply} onChange={event => setReply(event.target.value)} placeholder="写下你真实的回答，不需要组织得很完美。"/><button disabled={sendingReply || !reply.trim()} onClick={sendReply}>{sendingReply ? '军师正在思考…' : '继续 →'}</button></div> : <div className="organized-note"><CheckCircle2 size={17}/>这份复盘已经完成整理，本地归档已保留原始与整理版本。</div>}</section></div>}{message && <div className="message"><Sparkles size={16}/>{message}</div>}{selectedReview && !activeThread && <div className="archive-hint"><CheckCircle2 size={16}/><span>{selectedKey} 已有一份{selectedReview.phase === 'organized' ? '整理完成的' : '进行中的'}复盘。</span><button onClick={() => openReview(selectedReview.thread_id)}>继续这份复盘</button></div>}</section>}
      {page === 'history' && <section className="history-view"><header className="page-head"><div><p>复盘档案</p><h1>在时间里看见重复的信号。</h1></div><span className="count">已整理 {completed} 份</span></header><div className="history-grid"><section className="month-card"><div className="month-head"><button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}><ChevronLeft size={18}/></button><b>{month.getFullYear()} 年 {month.getMonth() + 1} 月</b><button onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}><ChevronRight size={18}/></button></div><div className="week-labels">{['日','一','二','三','四','五','六'].map(day => <span key={day}>{day}</span>)}</div><div className="calendar-grid">{calendarDays.map(day => { const key = toKey(day), record = reviews.find(item => item.review_date === key), out = day.getMonth() !== month.getMonth(); return <button key={key} className={`${out ? 'outside ' : ''}${key === selectedKey ? 'selected ' : ''}${record ? 'has-record ' : ''}${record?.phase === 'organized' ? 'done' : ''}`} onClick={() => { setSelected(day); setActiveThread(null); setDraft(''); record ? openReview(record.thread_id) : go('review') }} title={record?.summary || `${key} 开始复盘`}>{day.getDate()}</button> })}</div><div className="legend"><span><i/>有记录</span><span><i className="done"/>已整理</span></div></section><section className="record-list"><h2>最近记录</h2>{reviews.length ? reviews.slice(0, 8).map(item => <button key={item.thread_id} onClick={() => { setSelected(new Date(`${item.review_date}T12:00:00`)); openReview(item.thread_id) }}><span>{item.review_date}</span><b>{item.summary}</b><small>{item.phase === 'organized' ? '已整理' : '进行中'}</small></button>) : <p>还没有复盘。第一份记录会从今天开始。</p>}</section></div></section>}
      {page === 'projects' && <section className="simple-view"><header className="page-head"><div><p>项目进度</p><h1>只看正在推进的事。</h1></div></header>{projects.length ? <div className="project-grid">{projects.map(project => <article key={project.id}><div><b>{project.name}</b><em>{project.status}</em></div><p>下一步：{project.next_action || '待拆分'}</p><small>完成证据 {project.evidence.length} 条</small></article>)}</div> : <div className="quiet-empty">复盘里提到正在推进的任务后，军师会提示你同步到这里。</div>}</section>}
      {page === 'profile' && <section className="simple-view"><header className="page-head"><div><p>个人画像</p><h1>只收录经得起时间检验的结论。</h1></div></header><div className="profile-note"><BrainCircuit size={23}/><div><b>画像还在建立中</b><p>一次表现不会成为标签。军师会在多天、多周的复盘中记录可验证的模式、有效条件与反例。</p></div></div></section>}
    </main>
    <aside className="context-panel"><div className="context-head"><span>军师状态</span><b>今日</b></div><section className="adviser-card"><div className="adviser-icon"><BrainCircuit size={19}/></div><div><h2>先不急着下结论</h2><p>在你完成原始复盘前，军师不会用一段泛泛建议替代理解。</p></div></section><section className="today-card"><p>今天的流程</p><ol><li className="current"><span>1</span>写下原始记录</li><li><span>2</span>回答关键追问</li><li><span>3</span>同步任务进度</li><li><span>4</span>确定明天第一步</li></ol></section><section className="task-context"><div><p>近期项目</p><span>{projects.length} 项</span></div>{projects.slice(0, 3).map(project => <article key={project.id}><b>{project.name}</b><small>{project.next_action || '等待下一步'}</small></article>)}{!projects.length && <p className="muted">项目会在复盘后进入这里。</p>}</section><footer className="context-foot">模型接入后，军师会在这里展示依据、反例与建议实验。</footer></aside>
  </div>
}
