import { useEffect, useState } from 'react'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Header() {
  return (
    <header className="relative z-10 w-full py-6">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg ring-2 ring-white/30" />
          <span className="text-xl font-bold text-white">Noël 3D Shop</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#produtos" className="hover:text-white transition">Produtos</a>
          <a href="#sobre" className="hover:text-white transition">Sobre</a>
          <a href="#contato" className="hover:text-white transition">Contato</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-red-600 to-emerald-600" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(1200px_400px_at_70%_40%,rgba(255,255,255,0.5),transparent)]" />
      {/* soft balls */}
      <div className="pointer-events-none absolute -top-16 -left-12 w-56 h-56 rounded-full bg-red-400/50 blur-2xl" />
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-emerald-400/40 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
              Cena 3D fofa para a sua loja de Natal
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              Produtos em estilo clay/soft 3D com cores vibrantes e clima acolhedor. Deixe seu Natal mais mágico e divertido.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#produtos" className="px-5 py-3 rounded-xl bg-white text-rose-600 font-semibold shadow-md hover:shadow-lg transition">Ver produtos</a>
              <a href="#contato" className="px-5 py-3 rounded-xl bg-rose-100/20 text-white border border-white/30 font-semibold hover:bg-rose-100/30 transition">Fale com a gente</a>
            </div>
          </div>

          {/* Decorative cute 3D-like scene */}
          <div className="relative h-[360px] md:h-[420px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-200/40 via-white/40 to-emerald-200/40 backdrop-blur-md border border-white/40 shadow-2xl" />

            {/* tree */}
            <div className="absolute bottom-6 right-8 w-44 h-44 md:w-56 md:h-56">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 md:w-36 md:h-36 bg-emerald-500 rounded-[48%] shadow-[inset_0_8px_18px_rgba(255,255,255,0.4)]" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-emerald-600 rounded-[50%] shadow-[inset_0_8px_18px_rgba(255,255,255,0.35)]" />
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 bg-emerald-700 rounded-[50%] shadow-[inset_0_8px_18px_rgba(255,255,255,0.3)]" />
              {/* ornaments */}
              <div className="absolute bottom-10 left-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-400 shadow" />
              <div className="absolute bottom-16 right-8 w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-300 shadow" />
              <div className="absolute bottom-6 right-14 w-3 h-3 md:w-4 md:h-4 rounded-full bg-rose-300 shadow" />
              {/* star */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rotate-12 bg-yellow-300 rounded-[30%]" />
            </div>
            {/* gifts */}
            <div className="absolute bottom-4 left-6 flex gap-3">
              <div className="w-16 h-16 bg-rose-400 rounded-xl shadow-md border border-white/40" />
              <div className="w-12 h-12 bg-amber-300 rounded-xl shadow-md border border-white/40" />
              <div className="w-14 h-14 bg-emerald-400 rounded-xl shadow-md border border-white/40" />
            </div>
            {/* stocking */}
            <div className="absolute top-6 left-8 w-10 h-14 bg-red-500 rounded-[14px] shadow-lg">
              <div className="absolute -top-2 left-0 right-0 h-4 bg-white rounded-lg" />
            </div>
            {/* candy canes */}
            <div className="absolute top-10 right-12 w-16 h-20">
              <div className="absolute right-0 bottom-0 w-10 h-5 bg-red-400 rounded-full rotate-90" />
              <div className="absolute right-0 bottom-10 w-5 h-5 bg-red-400 rounded-full" />
              <div className="absolute right-1 bottom-10 w-4 h-4 bg-white rounded-full" />
            </div>
            {/* character */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-28 h-36">
              <div className="absolute bottom-0 w-28 h-24 bg-rose-200 rounded-[22px] shadow-[inset_0_6px_12px_rgba(255,255,255,0.6)]" />
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-20 h-12 bg-rose-300 rounded-full" />
              <div className="absolute bottom-18 left-1/2 -translate-x-1/2 w-16 h-10 bg-red-500 rounded-t-2xl">
                <div className="absolute -top-2 left-0 right-0 h-3 bg-white rounded-full" />
                <div className="absolute -top-4 right-2 w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-2.5 h-2.5 bg-black rounded-full" />
                <div className="w-2.5 h-2.5 bg-black rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ title, price, description }) {
  return (
    <div className="group rounded-2xl p-4 bg-white shadow-lg border border-red-100 hover:shadow-rose-300/40 transition">
      <div className="h-36 rounded-xl bg-gradient-to-br from-rose-100 via-white to-emerald-100 border border-rose-100 relative overflow-hidden">
        {/* simple soft 3D placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-400/80 shadow-inner" />
          <div className="w-24 h-24 -ml-6 rounded-full bg-emerald-400/70 blur-sm" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        {description && <p className="text-sm text-slate-500 line-clamp-2">{description}</p>}
        <p className="text-rose-600 font-bold mt-1">R$ {Number(price).toFixed(2)}</p>
        <button className="mt-3 w-full rounded-xl bg-rose-600 text-white py-2 font-medium hover:bg-rose-700 transition">Comprar</button>
      </div>
    </div>
  )
}

function Products({ onManage }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/products`)
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erro ao carregar produtos')
      setItems(data)
    } catch (e) {
      setItems([
        { id: 'demo1', title: 'Boneco fofo com gorro', price: 59.9, description: 'Companheiro natalino em estilo clay.' },
        { id: 'demo2', title: 'Árvore 3D mini', price: 79.9, description: 'Decoração compacta e charmosa.' },
        { id: 'demo3', title: 'Kit enfeites redondos', price: 39.9, description: 'Conjunto de bolas com acabamento soft.' },
        { id: 'demo4', title: 'Bengalas doces', price: 19.9, description: 'Clássico para completar sua decoração.' },
        { id: 'demo5', title: 'Meias natalinas', price: 29.9, description: 'Para presentinhos e mimos.' },
        { id: 'demo6', title: 'Estrelas douradas', price: 24.9, description: 'Brilho delicado para sua árvore.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <section id="produtos" className="relative bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Produtos em destaque</h2>
          <button onClick={() => onManage?.()} className="text-rose-600 font-medium hover:underline">Área do lojista</button>
        </div>
        {loading ? (
          <p className="text-slate-600">Carregando...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((it) => (
              <ProductCard key={it.id || it._id || it.title} {...it} />)
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function AdminPanel({ open, onClose }) {
  const [unlocked, setUnlocked] = useState(false)
  const [code, setCode] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ title: '', description: '', price: '', category: 'Geral', in_stock: true })
  const [msg, setMsg] = useState(null)

  const PASSCODE = 'natal2024'

  const load = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${backendUrl}/api/products`)
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (e) {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { if (open && unlocked) load() }, [open, unlocked])

  const startEdit = (item) => {
    setEditing(item)
    setForm({ title: item.title || '', description: item.description || '', price: item.price ?? '', category: item.category || 'Geral', in_stock: item.in_stock ?? true })
  }

  const resetForm = () => {
    setEditing(null)
    setForm({ title: '', description: '', price: '', category: 'Geral', in_stock: true })
  }

  const save = async (e) => {
    e.preventDefault()
    setMsg(null)
    const payload = { ...form, price: Number(form.price) }
    try {
      let res
      if (editing?.id) {
        res = await fetch(`${backendUrl}/api/products/${editing.id}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
        })
      } else {
        res = await fetch(`${backendUrl}/api/products`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
        })
      }
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erro ao salvar')
      setMsg({ type: 'success', text: 'Salvo com sucesso' })
      await load()
      resetForm()
    } catch (err) {
      setMsg({ type: 'error', text: err.message })
    }
  }

  const removeItem = async (id) => {
    if (!confirm('Remover este produto?')) return
    try {
      const res = await fetch(`${backendUrl}/api/products/${id}`, { method: 'DELETE' })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.detail || 'Erro ao remover')
      await load()
    } catch (err) {
      setMsg({ type: 'error', text: err.message })
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full md:w-[900px] max-h-[90vh] overflow-auto rounded-t-2xl md:rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Área do lojista</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">Fechar</button>
        </div>

        {!unlocked ? (
          <div className="mt-6 flex items-center gap-3">
            <input value={code} onChange={(e)=>setCode(e.target.value)} placeholder="Digite a chave" className="w-full md:w-64 rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
            <button onClick={()=> setUnlocked(code === PASSCODE)} className="px-4 py-2 rounded-xl bg-rose-600 text-white font-medium">Entrar</button>
            {code && code !== PASSCODE && <span className="text-sm text-rose-600">Chave incorreta</span>}
          </div>
        ) : (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form onSubmit={save} className="border border-rose-100 rounded-xl p-4">
              <h4 className="font-semibold mb-3">{editing ? 'Editar produto' : 'Novo produto'}</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Título</label>
                  <input value={form.title} onChange={e=>setForm(f=>({...f, title: e.target.value}))} required className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Descrição</label>
                  <textarea rows="3" value={form.description} onChange={e=>setForm(f=>({...f, description: e.target.value}))} className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Preço (R$)</label>
                    <input type="number" step="0.01" value={form.price} onChange={e=>setForm(f=>({...f, price: e.target.value}))} required className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Categoria</label>
                    <input value={form.category} onChange={e=>setForm(f=>({...f, category: e.target.value}))} className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
                  </div>
                </div>
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" checked={form.in_stock} onChange={e=>setForm(f=>({...f, in_stock: e.target.checked}))} />
                  Em estoque
                </label>
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-xl bg-rose-600 text-white font-medium">{editing ? 'Salvar alterações' : 'Adicionar'}</button>
                  {editing && <button type="button" onClick={resetForm} className="px-4 py-2 rounded-xl border border-slate-200">Cancelar</button>}
                </div>
                {msg && <p className={`text-sm ${msg.type==='success'?'text-emerald-600':'text-rose-600'}`}>{msg.text}</p>}
              </div>
            </form>

            <div className="border border-rose-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Seus produtos</h4>
                <button onClick={load} className="text-sm text-rose-600 hover:underline">Atualizar</button>
              </div>
              {loading ? <p className="text-slate-600">Carregando...</p> : (
                <ul className="divide-y">
                  {items.map((it)=> (
                    <li key={it.id} className="py-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-medium text-slate-800">{it.title}</p>
                        <p className="text-sm text-slate-500">R$ {Number(it.price).toFixed(2)} • {it.category || 'Geral'} {it.in_stock ? '' : '• (fora de estoque)'}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={()=>startEdit(it)} className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm">Editar</button>
                        <button onClick={()=>removeItem(it.id)} className="px-3 py-1.5 rounded-lg bg-rose-600 text-white text-sm">Excluir</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${backendUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erro ao enviar')
      setStatus({ type: 'success', msg: 'Enviado com sucesso! Entraremos em contato.' })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="relative bg-gradient-to-br from-emerald-50 to-rose-50 py-16">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Fale com a gente</h2>
          <p className="mt-3 text-slate-600">
            Precisa de um orçamento personalizado ou quer tirar dúvidas? Envie seu e-mail e número que retornamos rapidinho.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Produtos 3D com tema natalino</li>
            <li>• Envio rápido e suporte atencioso</li>
            <li>• Pagamento seguro</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-xl border border-rose-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nome</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">E-mail</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Telefone/WhatsApp</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Mensagem</label>
              <textarea name="message" rows="3" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-400" />
            </div>
          </div>
          <button disabled={loading} className="mt-4 w-full rounded-xl bg-rose-600 text-white py-3 font-semibold hover:bg-rose-700 transition disabled:opacity-60">
            {loading ? 'Enviando...' : 'Enviar contato'}
          </button>
          {status && (
            <p className={`mt-3 text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white/80 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600" />
            <span className="font-semibold">Noël 3D Shop</span>
          </div>
          <p className="mt-2 text-sm text-white/70">Produtos 3D fofos para um Natal mágico.</p>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Noël 3D Shop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [adminOpen, setAdminOpen] = useState(false)
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Products onManage={() => setAdminOpen(true)} />
      <Contact />
      <Footer />
      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />
    </div>
  )
}

export default App
