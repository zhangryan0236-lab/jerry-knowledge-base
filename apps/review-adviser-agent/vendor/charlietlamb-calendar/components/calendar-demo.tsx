'use client'

import { useEffect, useMemo, useState } from 'react'
import Calendar from './calendar/calendar'
import { CalendarEvent, Mode } from './calendar/calendar-types'

type Review = { thread_id: string; review_date: string; phase: string; summary: string }
type Project = { id: string; name: string; next_action: string; status: string; evidence: unknown[] }

const API = 'http://127.0.0.1:8766'

function asEvent(review: Review): CalendarEvent {
  const start = new Date(`${review.review_date}T09:00:00`)
  const end = new Date(`${review.review_date}T09:30:00`)
  return {
    id: review.thread_id,
    title: review.phase === 'organized' ? `已复盘 · ${review.summary}` : `复盘中 · ${review.summary}`,
    color: review.phase === 'organized' ? 'green' : 'blue',
    start,
    end,
  }
}

export default function CalendarDemo() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [mode, setMode] = useState<Mode>('month')
  const [date, setDate] = useState<Date>(new Date())
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [rawText, setRawText] = useState('')
  const [notice, setNotice] = useState('')
  const today = new Date().toISOString().slice(0, 10)

  const reload = async () => {
    const [reviewResponse, projectResponse] = await Promise.all([
      fetch(`${API}/api/reviews`),
      fetch(`${API}/api/projects`),
    ])
    const nextReviews = await reviewResponse.json() as Review[]
    const nextProjects = await projectResponse.json() as Project[]
    setReviews(nextReviews)
    setEvents(nextReviews.map(asEvent))
    setProjects(nextProjects)
  }

  useEffect(() => { reload().catch(() => setNotice('本地服务未连接，请从桌面启动器打开。')) }, [])

  const organizedCount = useMemo(() => reviews.filter(item => item.phase === 'organized').length, [reviews])
  const submitReview = async () => {
    if (!rawText.trim()) return setNotice('先写下今天发生的事，再交给军师。')
    const response = await fetch(`${API}/api/reviews`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: today, raw_text: rawText }),
    })
    if (!response.ok) return setNotice('保存失败，请确认本地服务是否启动。')
    const thread = await response.json() as { question?: string }
    setRawText('')
    setNotice(thread.question ? `军师的第一问：${thread.question}` : '复盘已保存。')
    await reload()
  }

  return <div className="min-h-screen bg-background text-foreground">
    <div className="grid min-h-screen lg:grid-cols-[230px_minmax(0,1fr)_310px]">
      <aside className="border-r bg-card p-4">
        <div className="mb-8 flex items-center gap-3 px-2"><div className="grid size-9 place-items-center rounded-lg bg-primary font-bold text-primary-foreground">军</div><div><b>复盘军师</b><p className="text-xs text-muted-foreground">JERRY&apos;S GROWTH OS</p></div></div>
        <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">工作台</p>
        <nav className="space-y-1 text-sm"><button className="w-full rounded-md bg-muted px-3 py-2 text-left font-medium">今日复盘</button><button className="w-full rounded-md px-3 py-2 text-left text-muted-foreground">复盘日历</button><button className="w-full rounded-md px-3 py-2 text-left text-muted-foreground">项目进度</button></nav>
        <p className="mb-2 mt-8 px-2 text-xs font-medium text-muted-foreground">军师流程</p>
        <ol className="space-y-4 border-l pl-5 text-sm"><li><b>01 · 自我梳理</b><p className="text-xs text-muted-foreground">记录真实的一天</p></li><li><b>02 · 军师追问</b><p className="text-xs text-muted-foreground">只问关键问题</p></li><li><b>03 · 同步进度</b><p className="text-xs text-muted-foreground">确认完成与阻塞</p></li><li><b>04 · 明日行动</b><p className="text-xs text-muted-foreground">执行日不改大计划</p></li></ol>
      </aside>
      <main className="min-w-0 p-6 lg:p-8"><header className="mb-7 flex items-center justify-between"><div><p className="text-sm text-muted-foreground">复盘日历</p><h1 className="mt-1 text-2xl font-semibold tracking-tight">回看，而不是评判</h1></div><button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground" onClick={() => document.getElementById('capture')?.focus()}>开始今日复盘</button></header>
        <section className="overflow-hidden rounded-xl border bg-card shadow-sm"><Calendar events={events} setEvents={setEvents} mode={mode} setMode={setMode} date={date} setDate={setDate} /></section>
        <section className="mt-6 rounded-xl border bg-card p-5"><div className="mb-3 flex items-start justify-between"><div><p className="text-xs font-semibold tracking-wider text-primary">阶段 01 · 自我梳理</p><h2 className="mt-1 text-lg font-semibold">把今天交给军师</h2><p className="text-sm text-muted-foreground">先写事实。原始记录会独立归档，整理版不会覆盖它。</p></div><span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">{today}</span></div><textarea id="capture" value={rawText} onChange={event => setRawText(event.target.value)} className="min-h-36 w-full rounded-md border bg-background p-3 text-sm outline-none ring-primary focus:ring-1" placeholder="今天做了什么？卡在哪里？你当时是怎么想、怎么应对的？明天最先做什么？"/><div className="mt-3 flex items-center justify-between"><span className="text-xs text-muted-foreground">军师只会追问能改变判断的信息。</span><button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground" onClick={submitReview}>交给军师</button></div>{notice && <p className="mt-3 rounded-md bg-muted p-3 text-sm">{notice}</p>}</section>
      </main>
      <aside className="border-l bg-card p-5"><div className="mb-5 flex items-center justify-between"><h2 className="font-semibold">军师面板</h2><span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">本地运行</span></div><section className="rounded-lg border p-4"><b className="text-sm">等待你的真实记录</b><p className="mt-2 text-xs leading-5 text-muted-foreground">完成复盘后，军师才会基于证据而不是印象给出判断。单日表现不会进入人格结论。</p></section><div className="mt-6 mb-2 flex items-center justify-between"><h3 className="text-sm font-semibold">正在推进的项目</h3><span className="text-xs text-muted-foreground">{projects.length} 项</span></div>{projects.length ? projects.map(project => <section className="border-t py-3" key={project.id}><div className="flex justify-between gap-2"><b className="text-sm">{project.name}</b><span className="text-xs text-muted-foreground">{project.status}</span></div><p className="mt-1 text-xs text-muted-foreground">下一步：{project.next_action || '待拆分'}</p><div className="mt-2 h-1 rounded bg-muted"><div className="h-1 w-1/3 rounded bg-primary"/></div></section>) : <p className="rounded-lg border border-dashed p-3 text-xs text-muted-foreground">还没有项目。复盘后可同步真正推进的事项。</p>}<section className="mt-6 rounded-lg border p-4"><b className="text-sm">本周节奏</b><p className="mt-2 text-xs leading-5 text-muted-foreground">大计划调整 0 / 2 次。今天默认只生成明天的具体动作。</p><p className="mt-2 text-xs text-muted-foreground">已整理复盘：{organizedCount} 份</p></section></aside>
    </div>
  </div>
}
