// Contact details and identity used across the site.
// Source: Noah, 2026-11-19 (Instagram verified the same day).

export const OWNER = {
  name: "Noah Katumba",
  brand: "Noah ⌬ Devs",
  role: "Web & app developer",
  location: "Kampala, Uganda",
} as const

/** Digits only, international format, for wa.me and tel: links. */
export const PHONE_E164 = "256784695549"

export const CONTACT = {
  phoneDisplay: "+256 784 695549",
  tel: `tel:+${PHONE_E164}`,
  whatsapp: `https://wa.me/${PHONE_E164}`,
  email: "noahdevsug@gmail.com",
  mailto: "mailto:noahdevsug@gmail.com",
  instagramHandle: "@noahdevsug",
  instagram: "https://www.instagram.com/noahdevsug/",
} as const

export type ContactChannel = {
  id: "whatsapp" | "call" | "email" | "instagram"
  label: string
  value: string
  href: string
  /** Value placed on the clipboard by the copy button; omitted where copying makes no sense. */
  copy?: string
}

export const CHANNELS: ContactChannel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: CONTACT.phoneDisplay,
    href: CONTACT.whatsapp,
    copy: CONTACT.phoneDisplay,
  },
  {
    id: "call",
    label: "Call",
    value: CONTACT.phoneDisplay,
    href: CONTACT.tel,
    copy: CONTACT.phoneDisplay,
  },
  {
    id: "email",
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.mailto,
    copy: CONTACT.email,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
  },
]

/** Studio Noah co-founded with Shaun; linked from About. */
export const STUDIO = {
  name: "S&N Devs",
  role: "Co-founder",
  url: "https://sn-devs.vercel.app",
} as const

/** Builds a pre-filled WhatsApp link from the inquiry form. */
export function whatsappLink(message: string): string {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}
