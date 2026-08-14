import { useMemo, useState } from 'react'
import { ArrowUpRight, CheckCircle2, Github, Mail, MessageCircle } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { budgetOptions, services } from '../data/services.js'

const WHATSAPP_NUMBER = '256784695549'
const GMAIL_COMPOSE_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=noahprinzy@gmail.com'
const contactHeroImage = '/illustrations/contact-conversation.svg'

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
        eyebrow="Contact"
        title="Have an idea? Tell me what you want to build."
        copy="You do not need a perfect technical brief. Tell me the problem, the idea, or the outcome you want, and we can work out the right next step from there."
        image={contactHeroImage}
        imagePosition="center"
      />

      <section className="section section--tight-top">
        <div className="container contact-flow-note" aria-label="How the contact form works">
          <div><CheckCircle2 size={19} /><span><strong>1. Fill in the project details</strong><small>Only your name, email, and description are required.</small></span></div>
          <div><CheckCircle2 size={19} /><span><strong>2. Click “Send via WhatsApp”</strong><small>I prepare the message and open WhatsApp for you.</small></span></div>
          <div><CheckCircle2 size={19} /><span><strong>3. Review and press Send</strong><small>Nothing is sent until you choose to send it in WhatsApp.</small></span></div>
        </div>

        <div className="container contact-grid">
          <aside className="contact-sidebar">
            <div>
              <span className="eyebrow">Prefer direct contact?</span>
              <h2>Reach me in the way that feels easiest.</h2>
              <p>WhatsApp is the quickest option for a project conversation. You can also compose an email or explore my development work on GitHub.</p>
            </div>
            <div className="contact-methods">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={20} /><span><small>WhatsApp</small>0784695549</span><ArrowUpRight size={18} /></a>
              <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer"><Mail size={20} /><span><small>Email</small>noahprinzy@gmail.com</span><ArrowUpRight size={18} /></a>
              <a href="https://github.com/Noah-Prinzy" target="_blank" rel="noreferrer"><Github size={20} /><span><small>GitHub</small>@Noah-Prinzy</span><ArrowUpRight size={18} /></a>
            </div>
            <div className="response-note"><span /> Project inquiries are reviewed personally.</div>
          </aside>

          <div className="form-panel">
            <div className="form-panel__intro">
              <span className="eyebrow">Project inquiry</span>
              <h2>Give me the useful context.</h2>
              <p>Share as much as you know. Optional fields can be left blank.</p>
            </div>
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
                <label>What do you need?
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
              <label>Tell me about the project *
                <textarea name="message" rows="7" value={form.message} onChange={handleChange} placeholder="What do you want to build? Who is it for? What should it help them do?" required />
              </label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button form-submit" type="submit">
                <MessageCircle size={18} /> Prepare message in WhatsApp <ArrowUpRight size={18} />
              </button>
              <p className="form-footnote">This button opens WhatsApp with your project details already prepared. Review the message there, then press Send when you are ready. No payment is collected on this website.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
