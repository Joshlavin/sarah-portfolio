# Editing sarahlavin.com Yourself

Hi Sarah! This guide shows you how to make changes to your portfolio
site (sarahlavin.com) by talking to Claude in plain English. No code
required — you just describe what you want and Claude does it.

---

## Before you start (one-time setup — Josh sets this up with you)

You only do these once:

1. **GitHub account.** You need a free account at github.com.
2. **Collaborator access.** Josh adds your GitHub username to his
   `sarah-portfolio` repo so you can save changes.
3. **Install Claude Code.** Open Terminal (search "Terminal" in
   Spotlight), paste this and press enter:
   ```
   curl -fsSL https://claude.ai/install.sh | bash
   ```
4. **Sign in to Claude.** Run `claude` in Terminal once — it'll open a
   browser window for sign-in. Use your Anthropic account.
5. **Get the site files on your Mac.** Pick a folder (your Desktop is
   fine) and run:
   ```
   cd ~/Desktop
   git clone https://github.com/Joshlavin/sarah-portfolio.git
   ```
   This creates a `sarah-portfolio` folder on your Desktop with all
   your site files inside.

That's it for setup. Skip to "Daily Workflow" below for everything
else.

---

## Daily workflow (every time you want to change the site)

**1. Open Terminal.**

**2. Go into the project folder.** Type this and press enter:
```
cd ~/Desktop/sarah-portfolio
```

**3. Get the latest version of the site.** This pulls down anything
Josh or anyone else has changed since last time:
```
git pull
```

**4. Start Claude.** Type this and press enter:
```
claude
```

You'll see a prompt where you can type. You're now talking to Claude
about your site.

**5. Tell Claude what to change.** Use plain English. See the examples
below. Claude will read the relevant files, make the edits, save them,
and push them to GitHub. About 1–2 minutes after Claude finishes, your
site updates at sarahlavin.com automatically.

**6. When you're done, type `/exit` and close Terminal.** Your changes
are saved.

---

## Examples of what to ask Claude

Copy-paste any of these or write your own version. Claude understands
loose, conversational requests — be specific and Claude figures it
out.

### Updating text

> Update my bio on the about page. Change the third paragraph to: "[paste new text]"

> On the wake up dead man project, change the year from 2025 to 2024.

> Fix a typo on the inside out project — "envrionment" should be "environment".

### Adding a new project

> I have a new project to add. The folder with images is on my Desktop, called "winter-wedding". It's production design work for a real wedding I designed. I want it titled "Winter Wedding", year 2025, with the description "Custom altar design, floral installations, and event styling for a winter wedding in Aspen." It should be in the Production Design category. Use the first image as the cover.

(Just drag the folder onto your Desktop first, then tell Claude where
it is.)

### Swapping a cover image

> On the kissinger takes paris project, change the cover image to the third one in the gallery instead of the second.

> On the people & portrait photography project, the current cover is too dark — pick a brighter shot from the existing images for the cover.

### Adding more images to an existing project

> Add three new images to the wake up dead man project. They're on my Desktop in a folder called "new-wake-up-photos".

### Removing things

> Remove the "graphite & charcoal" project entirely.

> On the bonsai project, remove image number 4 — it didn't turn out well.

### Reordering

> Move the Frankenstein project up so it appears before Happy Gilmore 2 on the work page.

### Bigger changes

> I want to add a new category called "Murals" with 2 projects in it.

> The "Conceptual Production Design" category name feels too long. Change it to just "Concept Work".

---

## What happens after you ask Claude

Here's what Claude does automatically (so you don't have to think
about it):

1. **Reads your request** and figures out which files to change.
2. **Makes the edits** — usually in `src/data/projects.ts` (the file
   that lists all projects) or `src/app/about/page.tsx` (the about
   page).
3. **If you mentioned new images:** copies them from your Desktop into
   the right folder inside the project, often resizing or converting
   them so the site stays fast.
4. **Saves the changes to GitHub** with a short note describing what
   changed (this is called "committing and pushing").
5. **Vercel** (the service that hosts your site) **automatically
   rebuilds the site** within ~1 minute and deploys it to
   sarahlavin.com.
6. **Tells you when it's live** so you know to refresh and check.

---

## How to check your change is live

After Claude says "pushed," wait about 1–2 minutes. Then:

1. Open **incognito mode** in your browser (Chrome: Cmd+Shift+N,
   Safari: Cmd+Shift+N). Incognito skips your browser's cache so you
   actually see the new version, not an old saved copy.
2. Go to `sarahlavin.com` and click around to verify your change.
3. If you don't see it after 5 minutes, tell Claude "the change isn't
   showing up" and it'll diagnose.

---

## Common pitfalls (Claude will help, but good to know)

- **Don't delete files inside the `public/images/projects/` folders by
  hand.** If you need to remove an image, ask Claude — it'll also
  remove the reference to it in the data file. Deleting by hand
  leaves "broken image" boxes on the site.
- **Don't manually edit `src/data/projects.ts` unless you're
  comfortable with code.** Just tell Claude what to change. The file
  is finicky about commas and brackets — one wrong character and the
  whole site breaks.
- **Always run `git pull` before starting Claude.** This makes sure
  you have the latest version. If two people edit the same file at
  the same time, it can create merge conflicts (annoying to fix).

---

## What to do if something breaks

1. **First try: ask Claude to fix it.** Say something like "the site
   is showing an error after my last change — can you investigate and
   fix it?" Claude will look at recent changes and revert or repair.
2. **Second try: ask Claude to revert your last change.** Say "undo
   the last change you made." This rolls back to the previous working
   version.
3. **Third try: text Josh.** He can roll back from his side.

You **cannot break the site permanently.** Every change is saved with
a history, and any change can be undone.

---

## Useful Claude commands while you're chatting with it

You type these directly into Claude when you're talking with it:

| Command | What it does |
|---|---|
| `/exit` | Close Claude and go back to Terminal |
| `/clear` | Wipe the conversation and start fresh (keeps the project loaded) |
| `/help` | Show all available commands |

---

## Things this site is built with (just FYI, no need to memorize)

- **Next.js** — the framework that builds your site
- **Tailwind CSS** — for styling
- **Vercel** — hosts the site at sarahlavin.com
- **GitHub** — stores all the files and tracks every change
- **Squarespace Domains** — where the `sarahlavin.com` domain is
  registered

If anyone ever asks "what's it built in?" — that's the stack.

---

## Domain & hosting

- **Domain registrar:** Squarespace (sarahlavin.com)
- **Host:** Vercel (free tier — should never cost anything unless
  traffic explodes)
- **GitHub repo:** github.com/Joshlavin/sarah-portfolio

If you ever want to move hosting elsewhere or transfer the domain,
ask Josh — there are a few DNS records to update.

---

## Need more help?

- **For site changes:** ask Claude in plain English. It's smarter than
  it looks.
- **For setup or weird errors:** text Josh.
- **For anything design-related:** that's all you, you don't need
  Claude for that.

That's it. Have fun. Your site is yours to edit forever.

— Josh + Claude
