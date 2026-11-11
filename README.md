# Pujan Chouhan — AI & Full-Stack Developer Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Website-E50914?style=for-the-badge&logo=vercel&logoColor=white)](https://dev-portfolio-exo.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-dev--portfolio--exo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pujanchouhan/dev-portfolio-exo)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite%208-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP%203-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

<br />

**A cinematic, high-performance developer portfolio built with React 19, Tailwind CSS v4, GSAP 3D interactive physics, and Framer Motion.**

[Explore Live Demo](https://dev-portfolio-exo.vercel.app/) &bull; [Report Bug](https://github.com/pujanchouhan/dev-portfolio-exo/issues) &bull; [Request Feature](https://github.com/pujanchouhan/dev-portfolio-exo/issues)

</div>

---

## Direct Host Links

- **Primary Live Deployment (Vercel):** [https://dev-portfolio-exo.vercel.app/](https://dev-portfolio-exo.vercel.app/)
- **Alternative Mirror (GitHub Pages):** [https://pujanchouhan.github.io/dev-portfolio-exo/](https://pujanchouhan.github.io/dev-portfolio-exo/)
- **Source Code:** [https://github.com/pujanchouhan/dev-portfolio-exo](https://github.com/pujanchouhan/dev-portfolio-exo)

---

## Tools & Technologies Used

This portfolio was crafted with a modern frontend stack designed for 60fps animations, modularity, and lightning-fast load times:

### Core Framework & Build Tooling
| Tool | Version | Purpose |
| :--- | :--- | :--- |
| **[React](https://react.dev/)** | `^19.2.6` | Declarative, component-based user interface architecture |
| **[Vite](https://vite.dev/)** | `^8.0.12` | Next-generation frontend tooling with instant HMR and optimized Rollup production bundling |
| **[Node.js](https://nodejs.org/)** | `>= 20.x` | JavaScript runtime environment |
| **[ESLint](https://eslint.org/)** | `^10.3.0` | Code quality and linting rules |

### Styling & Visual Design
| Tool | Version | Purpose |
| :--- | :--- | :--- |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | `^4.3.0` | High-performance, engine-level utility-first CSS styling |
| **[@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite)** | `^4.3.0` | Direct first-party Tailwind integration plugin for Vite |
| **Cinematic Dark Theme** | Custom | Deep `#050505` black tones, glowing crimson accents, glassmorphic cards, and bento grid layout |

### Animation & Physics Engines
| Tool | Version | Purpose |
| :--- | :--- | :--- |
| **[GSAP (GreenSock)](https://greensock.com/gsap/)** | `^3.15.0` | High-performance animation runtime powering interactive 3D perspective tilts and timeline sequences |
| **[GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)** | `^3.15.0` | Scrubbed scroll progress, pinning, and card-stacking transitions |
| **[Framer Motion](https://www.framer.com/motion/)** | `^12.40.0` | Parallax background typography and smooth form transitions |
| **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** | `^2.3.4` | Viewport entrance animations |

---

## Interactive Features

- **3D Cyber Identity Card:** Interactive card in the Hero section with dynamic multi-axis tilt physics, real-time holographic specular glare reflection, scanlines, and telemetry status.
- **Dual-Ring Precision Cursor & Ambient Spotlight:** Custom magnetic cursor dot and lag-ring with a radial crimson spotlight beam that illuminates background elements as you move the cursor.
- **Sticky Bento Competencies:** Interactive cards that scale, blur, and stack as you scroll through core technical domains.
- **Cinematic Archive Folder:** 3D project archive where cards physically emerge and fan out from a central folder into a structured showcase.
- **Parallax Contact Section:** Dynamic background typography responding to scroll depth with an integrated client contact interface.

---

## Projects Showcased in the Portfolio

1. **Numera. — AI Accounting Assistant:** AI-powered financial assistant integrating Google Gemini LLM API, Pandas data pipelines, and grounded financial analytics.
2. **PolyMind — Multi-LLM Chatbot:** Real-time conversational AI streaming between Llama 3.3, Llama 3.1, and Gemma 2 via Groq API, with Whisper STT and latency benchmarking.
3. **Generative AI Knowledge Engine:** Enterprise GenAI pipeline utilizing LlamaIndex document indexing, LangChain agent tool-calling, and NetworkX knowledge graphs.
4. **High-Speed Asynchronous API:** Production-grade asynchronous microservice engine engineered with FastAPI, PostgreSQL connection pooling, and MongoDB document storage.
5. **Cloud Infrastructure as Code:** Declarative infrastructure provisioning and automated deployment workflows built with Terraform, Git, and GitHub Actions CI/CD.
6. **Algorithmic Architecture Engine:** High-efficiency data structures and graph algorithms benchmarked across C++, Java, and Python.

---

## Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pujanchouhan/dev-portfolio-exo.git
   cd dev-portfolio-exo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application with hot module replacement (HMR).

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled assets will be output to the `dist/` directory ready for static hosting.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## Deployment

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import `dev-portfolio-exo`.
4. Keep the default settings (Framework preset: **Vite**, Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**.

### Deploying to GitHub Pages
1. In `vite.config.js`, set `base: '/dev-portfolio-exo/'`.
2. In your repository settings on GitHub, navigate to **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** and choose the Vite starter workflow.

---

## Author

**Pujan Chouhan**
- **Institution:** Lovely Professional University (B.Tech Computer Science & Engineering, 2024–2028)
- **GitHub:** [@pujanchouhan](https://github.com/pujanchouhan)
- **LinkedIn:** [Pujan Chouhan](https://www.linkedin.com/in/pujan-chouhan/)
- **Email:** [hellopujan14@gmail.com](mailto:hellopujan14@gmail.com)

---

## License

This project is open-source and available under the [MIT License](LICENSE).
