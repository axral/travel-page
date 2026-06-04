## Travel Page

A static travel guide website that lets users explore popular destinations around the world. Built with plain HTML, CSS, and React (via CDN — no build step needed).

## What it does

- **Home page** — hero banner with a call-to-action linking to the destinations listing.
- **Destinations page** — a React-rendered grid of 12 destinations (Delhi, Paris, New York, Kuwait, Dubai, Hawaii, Singapore, Seoul, Rome, Tokyo, Cairo, Sydney), each with a photo card linking to its detail page.
- **Destination Detail page** — a React component that reads the destination from the URL (`?destination=paris` or `#paris`) and renders a full travel guide: overview, main attractions, travel tips, packing suggestions, food & culture, a suggested 3-day itinerary, and useful official links.
- **About, Contact, FAQ pages** — supporting pages; the contact form has client-side validation (all fields required, basic email format check) via `script.js`.

## File structure
home.html : Landing page with hero section
destinations.html : Grid of all destinations (React)
destination-detail.html : Per-destination guide page (React)
about.html : About the site
contact.html : Contact form
faq.html: Frequently asked questions
styles.css : Shared stylesheet
script.js : Contact form validation
*.jpg : Destination photos
