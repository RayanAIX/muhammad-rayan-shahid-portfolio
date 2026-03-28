# Muhammad Rayan Shahid — Portfolio

An extraordinary, cinematic portfolio website for a 16-year-old AI researcher, built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Three.js, and GSAP.

## 🚀 Features

- **Cinematic Hero Section**: Interactive Three.js neural network background with mouse-reactive particles
- **Scroll Storytelling**: GSAP-powered pinned scroll narrative
- **Flagship Research Showcase (HCMS)**: DOI-backed cognitive measurement framework presentation with animated pipeline diagram
- **Terminal Section**: Auto-typing command-line interface showcasing AI identity
- **Projects Grid**: Interactive cards with 3D tilt effects and detailed modal views
- **Animated Statistics**: Count-up numbers showcasing achievements
- **Neural Skill Map**: Interactive SVG network visualization of technical skills
- **Writing Section**: Substack integration with aurora effects
- **Personal Manifesto**: Human-centered "About" section with social links
- **Contact Form**: EmailJS integration for seamless messaging
- **Custom Cursor**: Follow-cursor with hover states
- **Smooth Scrolling**: Lenis integration for buttery-smooth navigation

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion, GSAP + ScrollTrigger
- **3D**: Three.js, React Three Fiber, React Three Drei
- **Scroll**: Lenis
- **Forms**: EmailJS
- **Fonts**: Syne (display), JetBrains Mono (mono), DM Sans (body)

## 📦 Installation

1. **Clone and install**:
```bash
cd rayan-portfolio
npm install
```

2. **Set up environment variables**:
Copy `.env.local.example` to `.env.local` and fill in your EmailJS credentials:
```bash
cp .env.local.example .env.local
```

Then visit [EmailJS](https://www.emailjs.com/) to get your:
- Service ID
- Template ID
- User ID

3. **Add your photo**:
Place your photo in `public/images/rayan.jpg` (or update the About.tsx with your image path)

4. **Run the development server**:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- Primary Background: `#030303` (near-absolute black)
- Secondary Background: `#0d0d0f` (lifted black)
- Card Background: `#111116`
- Accent Primary: `#00d4ff` (electric cyan)
- Accent Secondary: `#7c3aed` (deep violet)
- Text Primary: `#f0f0f5` (off-white)
- Text Secondary: `#8888a0` (muted purple-gray)

### Typography
- Display: **Syne** (geometric, futuristic)
- Mono: **JetBrains Mono** (terminal, code)
- Body: **DM Sans** (clean, modern)

## 📁 Project Structure

```
/app
  layout.tsx          - Root layout with fonts, metadata
  page.tsx            - Main page, assembles all sections
  globals.css         - Global styles, CSS variables

/components
  /ui
    CustomCursor.tsx  - Custom cursor with follow effect
    Navbar.tsx        - Navigation with scroll-spy
    Footer.tsx        - Minimal footer with social links
    Lenis.tsx         - Smooth scroll provider
    ProjectCard.tsx   - 3D tilt project cards
    ProjectModal.tsx  - Full-screen project details modal
    AnimatedNumber.tsx - Counter animation

  /sections
    Hero.tsx              - Cinematic opening with 3D neural network
    StorytellingScroll.tsx - GSAP pinned scroll narrative
    HCMS.tsx              - Flagship research showcase
    Terminal.tsx          - Auto-typing command line
    Projects.tsx          - Filterable projects grid
    Numbers.tsx           - Animated statistics
    Skills.tsx            - Interactive neural skill map
    Writing.tsx           - Substack integration
    About.tsx             - Personal manifesto
    Contact.tsx           - Contact form with EmailJS

  /three
    NeuralNetwork.tsx     - Three.js particle network

/lib
  constants.ts        - Site-wide constants (name, social links, DOI)
  projects.ts         - Projects data interface and array

/public
  /images
    rayan.jpg         - Profile photo (add your photo here)
```

## ⚙️ Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `from_name`
   - `from_email`
   - `subject`
   - `message`
   - `to_email` (or hardcode your email)

4. Update `.env.local` with your credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## 🎯 Customization

### Update Personal Information

Edit `lib/constants.ts`:
- Name, location, age
- Social media links
- DOI and research URLs

### Modify Projects

Edit `lib/projects.ts` to add, remove, or update projects. Each project supports:
- Title, description, fullDescription
- Category (Research, NLP, CV, Automation)
- Tech stack
- GitHub URL, demo URL
- Accuracy metric, status
- Architecture diagram (markdown/text)

### Adjust HCMS Content

In `components/sections/HCMS.tsx`:
- Research paper details
- Pipeline diagram stages
- Topic tags
- Contributions list

## 🎬 Animation Principles

- All animations use cubic-bezier `[0.25, 0.1, 0.25, 1]`
- Entry animations: fade-up with 60px Y offset, 0.8s duration
- Stagger children: 0.08s between each
- Hover transitions: 200ms max
- No bounce, no spring — pure, controlled motion

## ♿ Accessibility

- Custom cursor respects system preferences
- All interactive elements are keyboard accessible
- Reduced motion is respected in future updates
- Proper ARIA labels on icons and buttons
- High contrast color scheme

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Terminal and skill map optimize for smaller screens
- All sections are full-width on mobile

## 🔧 Troubleshooting

**Three.js not rendering**: Ensure you're not blocking third-party scripts. Check browser console for errors.

**Animations not working**: Make sure GSAP and Framer Motion are properly installed.

**EmailJS forms failing**: Verify your `.env.local` credentials are correct and your EmailJS template includes all required variables.

**Scroll issues**: Check Lenis is properly initialized. Disable browser extensions that might interfere with scroll.

## 📄 License

MIT — Feel free to use this template for your own portfolio!

## 🙋 Support

For issues or questions about this portfolio template, please open an issue on GitHub.

---

**Built with purpose by Muhammad Rayan Shahid**
*Independent AI Researcher · Age 16 · Karachi, Pakistan*
