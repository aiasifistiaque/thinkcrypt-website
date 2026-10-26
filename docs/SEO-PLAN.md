# Thinkcrypt SEO plan

**Goal:** rank Thinkcrypt — and Mint, its own platform — for people looking for an **AI-first software
development agency**, **custom software development**, **AI tools** and **automation**.

**Where SEO lives:** titles, descriptions, keywords, robots and the sitemap are edited in the Mint panel
(project *Thinkcrypt Website*: Site setup → SEO, Website → Pages → SEO) or over its MCP. The site reads them
every 60 seconds; no deploy needed. Structured data, headings and page copy are in this repo.

Honest expectations: brand searches ("thinkcrypt", "thinkcrypt mint") can rank first within weeks once Google
recrawls. Broad terms like "custom software development company" or "AI automation agency" are among the most
competitive on the web — metadata gets the site *eligible*; ranking there takes dedicated pages, regular
articles and links from other sites (sections 4–5), measured over months.

---

## 1. Keyword map

| Cluster | Main keywords | Page that owns it |
|---|---|---|
| Brand | Thinkcrypt, Thinkcrypt Mint, Mint by Thinkcrypt | `/`, `/mint` |
| AI-first agency | AI-first software development agency, AI software development company, AI development agency | `/` |
| Custom software | custom software development company, SaaS development, web application development | `/services`, `/web-development` |
| AI tools | AI agent development, AI chatbot development, LLM app development, generative AI, AI integration | `/services` → *new* `/ai-development` |
| Automation | AI automation agency, business process automation, workflow automation, internal tools | `/services` → *new* `/automation` |
| Startups | MVP development company, AI MVP development | `/startup` (needs content) |
| Mint | AI business platform, admin panel builder, backend as a service, ecommerce CMS, POS & inventory | `/mint` (+ mintapp.shop) |
| Local | software company Dhaka, software development company Bangladesh, offshore development | `/`, `/team`, `/clients` |

One page per cluster: two pages chasing the same keyword compete with each other.

## 2. What is done (2026-10-26)

**Panel**
- Site defaults: title *“Thinkcrypt — AI-First Software Development Agency | Custom Software, AI & Automation”*,
  AI-first description, tagline, 30 keywords across the clusters above, email, phone, address, LinkedIn, Facebook.
- Every page has its own title + description (≤160 characters) + keywords — no more pages sharing the home title.
- `/business-solution` shows the same sections as `/web-development`, so its canonical points to `/web-development`.
- `/startup` is **noindex** (and out of the sitemap): the page has no content yet. Turn indexing back on once it does.
- robots.txt no longer blocks `/_next/` — Google needs those files to render the pages.

**Code**
- One `<h1>` per page (home hero, Mint hero, every page's title section); `/web-development` got a real title.
- Home hero line now says what we are: *“An AI-first software development agency. We build custom software,
  AI tools & automation…”*
- Structured data (`lib/jsonLd.js`): Organization + ProfessionalService with address, contacts, socials,
  `knowsAbout` (AI, agents, LLMs, MCP, automation…) and an offer catalog of the services; WebSite; and on `/mint`
  a SoftwareApplication for Mint. The old fake site-search action and the missing `/logo.png` are gone.
- Sitemap now lists every blog post and case study (from the Thinkcrypt API) next to the panel's pages.
- Case studies get their own title, description, canonical and share image instead of the home page's.

## 3. Do next — needs you (biggest impact first)

1. **Google Search Console** — verify `www.thinkcrypt.dev` (paste the code in Site setup → SEO → Google
   verification), submit `https://www.thinkcrypt.dev/sitemap.xml`, request indexing for `/`, `/services`, `/mint`.
   Do the same in Bing Webmaster Tools.
2. **Google Business Profile** for Thinkcrypt, Banani — category *Software company*; same name, address, phone as
   the site. Ask happy clients for reviews there.
3. **Branded share image** — the default share image is a stock photo; upload a 1200×630 Thinkcrypt image and
   set it as the Site setup share image.
4. **Agency listings with links back**: Clutch, GoodFirms, DesignRush, The Manifest, Crunchbase, LinkedIn
   company page "website" field, GitHub org. Each is a trusted link and a place buyers compare agencies.
5. **Mint ↔ Thinkcrypt links**: mintapp.shop footer "Made by Thinkcrypt → thinkcrypt.dev"; `/mint` here links
   to mintapp.shop. Two sites vouching for each other help both brand searches.

## 4. Do next — new pages (content)

Pages rank for what they *say*, not for their metadata. Each one: ~800–1,500 words, its own h1, a FAQ, links
to related case studies, a contact button; then add it in the panel (Website → Pages, with SEO) and a
`layout.js` calling `pageMetadata`.

| Path | Target | Outline |
|---|---|---|
| `/ai-development` | AI software development, AI agents, LLM apps, chatbots | what we build, how (models, RAG, agents, MCP), process, examples, FAQ |
| `/automation` | AI automation agency, business process automation | processes we automate, tools/integrations, ROI examples, FAQ |
| `/custom-software-development` | custom software development company | when custom beats off-the-shelf, process, stack, pricing models, FAQ |
| `/startup` | MVP development | fill the empty page, then turn indexing back on |
| `/mint` | Mint, AI business platform | refresh to today's Mint (backend, admin panel, AI over MCP) — page still says "Crafting Brands" |

## 5. Do next — blog (2 posts a month)

Questions buyers search, each linking to the matching service page:
- How much does custom software development cost in 2026?
- AI agents for small business: 10 tasks you can automate this month
- Build vs buy: when custom software beats SaaS
- What is MCP and why your business tools should support it
- From idea to MVP in 6 weeks: how we build startup products
- Case-study posts for each portfolio project (problem → solution → result with numbers)

## 6. Measure

Search Console (monthly): impressions and position for the cluster keywords, pages with impressions but few
clicks (rewrite their titles). GA4 `G-0RCW50J0P4` and Mint analytics: visits from organic search, contact
clicks. Check every page has one h1, a unique title and description: `curl -s <url> | grep -o '<title>.*</title>'`.
