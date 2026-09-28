# Suresh A — Portfolio

Personal portfolio built with Vue 3, Vite and Tailwind CSS.

## Edit the content

All text (bio, stats, skills, projects, experience) is in `src/data/profile.js`.
Change it there; you don't need to touch the components.

The **Download resume** button serves the PDF in `public/` set by `resume` in `profile.js`
(currently `Suresh_A2.pdf`). To swap it, replace the file and update that path.

## Run locally

```bash
npm install
npm run dev        # open http://localhost:5173
```

## Deploy to Netlify (free)

**Option A: drag and drop (no Git needed)**

1. Run `npm run build`. This creates a `dist/` folder.
2. Sign in at https://app.netlify.com and open **Sites**.
3. Drag the `dist/` folder onto the page. Your site is live at a `*.netlify.app` address.
4. Under **Site configuration → Change site name**, pick something like `sureshangamuthu`.
5. To update later, rebuild and drag the new `dist/` folder onto **Deploys**.

**Option B: auto-deploy from GitHub (recommended long term)**

1. Push this folder to a new GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub**, then pick the repository.
3. Netlify reads `netlify.toml` (build command `npm run build`, publish folder `dist`), so just click **Deploy**.
4. Every `git push` now redeploys the site automatically.

## Structure

```
src/
  data/profile.js          all content
  components/
    NavBar.vue             sticky nav, light/dark toggle, mobile menu
    HeroSection.vue        headline, calls to action, key numbers
    AboutSection.vue       bio and strengths
    SkillsSection.vue      grouped skill chips
    ProjectsSection.vue    filterable project cards
    ProjectModal.vue       case-study popup (problem, what I built, engineering)
    ExperienceSection.vue  timeline
    ContactSection.vue     email, LinkedIn, phone
```
