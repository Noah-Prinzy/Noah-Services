import { useMemo, useState } from 'react'
import { ArrowUpRight, Github, Mail, MessageCircle, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { budgetOptions, services } from '../data/services.js'

const WHATSAPP_NUMBER = '256784695549'

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const requestedService = searchParams.get('service') || ''
  const defaultService = useMemo(() => {
    if (requestedService === 'custom') return 'Custom software / other'
    return services.find((service) => service.id === requestedService)?.title || ''
  }, [requestedService])

  const [form, setForm] = useState({ ...initialState, service: defaultService })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email, and project description.')
      return
    }

    const inquiryMessage = [
      'Hello Noah,',
      '',
      'I would like to make a project inquiry.',
      '',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone / WhatsApp: ${form.phone.trim() || 'Not specified'}`,
      `Company: ${form.company.trim() || 'Not specified'}`,
      '',
      `Service: ${form.service || 'Not specified'}`,
      `Estimated budget: ${form.budget || 'Not specified'}`,
      '',
      'Project description:',
      form.message.trim(),
    ].join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(inquiryMessage)}`
    window.location.assign(whatsappUrl)
  }

  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Tell me what you want to build."
        copy="Share the goal, scope, budget range, or even just the rough idea. When you submit the form, I’ll prepare your request and take you straight to WhatsApp to send it to me."
      />

      <section className="section section--tight-top">
        <div className="container contact-grid">
          <aside className="contact-sidebar">
            <div>
              <span className="eyebrow">Direct contact</span>
              <h2>Prefer a simpler message?</h2>
              <p>You can reach me directly on WhatsApp, by email or phone, or view my development work on GitHub.</p>
            </div>
            <div className="contact-methods">
              <a href="https://wa.me/256784695549" target="_blank" rel="noreferrer"><MessageCircle size={20} /><span><small>WhatsApp</small>0784695549</span><ArrowUpRight size={18} /></a>
              <a href="mailto:noahprinzy@gmail.com"><Mail size={20} /><span><small>Email</small>noahprinzy@gmail.com</span><ArrowUpRight size={18} /></a>
              <a href="tel:0784695549"><Phone size={20} /><span><small>Phone</small>0784695549</span><ArrowUpRight size={18} /></a>
              <a href="https://github.com/Noah-Prinzy" target="_blank" rel="noreferrer"><Github size={20} /><span><small>GitHub</small>@Noah-Prinzy</span><ArrowUpRight size={18} /></a>
            </div>
            <div className="response-note"><span /> Project inquiries are reviewed personally.</div>
          </aside>

          <div className="form-panel">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Name *<input name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your name" required /></label>
                <label>Email *<input name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required /></label>
              </div>
              <div className="form-row">
                <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} placeholder="Optional" /></label>
                <label>Company<input name="company" type="text" autoComplete="organization" value={form.company} onChange={handleChange} placeholder="Optional" /></label>
              </div>
              <div className="form-row">
                <label>Service
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    {services.map((service) => <option value={service.title} key={service.id}>{service.title}</option>)}
                    <option value="Custom software / other">Custom software / other</option>
                  </select>
                </label>
                <label>Estimated budget
                  <select name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select a range</option>
                    {budgetOptions.map((budget) => <option value={budget} key={budget}>{budget}</option>)}
                  </select>
                </label>
              </div>
              <label>Project description *
                <textarea name="message" rows="7" value={form.message} onChange={handleChange} placeholder="What are you trying to build? What should it do? What stage is the idea currently at?" required />
              </label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button form-submit" type="submit">
                <MessageCircle size={18} /> Send via WhatsApp <ArrowUpRight size={18} />
              </button>
              <p className="form-footnote">Submitting this form opens WhatsApp with your project details already prepared. You’ll review the message and press Send in WhatsApp. No payment is collected on this website.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
