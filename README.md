# Noah Services

A premium personal services and portfolio website for **Noah Katumba**, built with React and Vite and prepared for Netlify deployment.

## What is included

- Multi-page React website with React Router
- Home, Services, Work, About, Contact, and 404 routes
- Responsive desktop/tablet/mobile layouts
- Service catalogue with draft starting prices in UGX
- Featured portfolio projects linked to Noah's public GitHub repositories
- WhatsApp project-inquiry flow that prepares a client request and opens it in WhatsApp
- SPA redirect rule for Netlify
- SEO/social metadata, favicon, and security headers
- No installable PWA setup for this website
- No website payment processing; commercial discussions and payments occur outside the site

## Stack

- React 19
- JavaScript
- Vite
- React Router
- Lucide React icons
- Custom CSS
- WhatsApp click-to-chat inquiry flow + Netlify hosting configuration

## Local development

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Netlify deployment

1. Push this repository to GitHub.
2. In Netlify, choose **Add new project → Import an existing project**.
3. Connect GitHub and select this repository.
4. Netlify should read the included `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy the project.
6. Open `/contact`, complete a test inquiry, and confirm **Send via WhatsApp** opens a pre-filled message to 0784695549.

The `public/_redirects` file handles React Router routes on direct page loads.

## Important before public launch

The service prices are **draft starting prices** created for the initial website build. Update the values in:

```text
src/data/services.js
```

before using the site as your final public price list.

The site currently uses the public email address from the connected GitHub profile:

```text
noahprinzy@gmail.com
```

WhatsApp contact: 0784695549. LinkedIn is not included yet because no confirmed public profile URL has been supplied.

## Featured work

- UgoTour — https://ugotour-production.up.railway.app
- ShopSwift — https://shop-swift-ten.vercel.app
