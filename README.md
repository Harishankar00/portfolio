# Harishankar M — Systems & AI Engineering Portfolio

A premium, high-performance, minimalist single-page developer portfolio built to showcase engineering systems, autonomous algorithms, and Generative AI backend pipelines. Designed with the aesthetic clean-room standards of leading engineering teams (such as Vercel, Linear, and Stripe).

Live URL: [harishankar00.github.io/portfolio](https://harishankar00.github.io/portfolio/)

---

## ⚡ Tech Stack & Performance Architecture

- **Core Framework**: React 19 + Vite 8 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion (for fluid interactions and premium viewport animations)
- **Canvas Rendering**: High-performance Native 2D Canvas API (used for the interactive constellation background)
- **Automated CI/CD**: GitHub Actions workflow (building and deploying relative assets automatically)
- **Forms Transmission**: Web3Forms Serverless API + Local Mailto Protocol Client Fallback

---

## 🌌 Core Features

### 1. Interactive Constellation Background (`CelestialSphere.tsx`)
A custom 2D Canvas particle simulation that floats behind the layout:
* **Mouse Interactions**: Particles are repelled by the cursor, and draw glowing connection lines to your cursor in real-time.
* **Optimized Rendering**: Zero WebGL overhead. Renders fluidly at 60fps with low memory usage.
* **Stacking Context**: Set to `z-index: 0` underneath content layers (`z-10` and higher) with a `backdrop-blur-md` filter on cards to ensure text readability is never compromised.

### 2. Centered Minimalist Hero
Inspired by Stripe and Linear, featuring clean technical tags, high-contrast typography, and quick-access buttons to core terminals (Resume, GitHub, LeetCode, HackerRank).

### 3. Bento Grid Featured Projects
Displays autonomous and machine learning systems using rich interactive preview components:
* **Autonomous Car (`ros_bot_1`)**: Features a real-time reactive 2D LiDAR canvas simulation scanning obstacles.
* **ByteGuard**: Implements a diagnostic scrolling logs emulator simulating secure payload filters and traffic anomaly guards.
* **Farm App**: Visualizes a crop-health scanner with a scrolling laser overlay and diagnostic feed logs.

### 4. Interactive Secure Terminal Contact Form
A terminal command-line prompt interface that transmits actual messages:
* Executes live dispatch to your email via the Web3Forms secure gateway.
* Automatically fallbacks to local client mailer (`mailto:`) if no API key is configured, maintaining perfect user experience.
* Outputs HTTP communication headers and network statuses in real-time console logs.

---

## 🛠️ Project Structure

```text
portfolio/
├── .github/workflows/    # Automated CI/CD GitHub Actions deploy pipeline
├── public/               # Static assets & favicon configurations
├── src/
│   ├── components/       # Custom React icons and layout utilities
│   │   └── ui/           # Reusable interactive components
│   │       └── celestial-sphere.tsx  # Interactive particle background
│   ├── sections/         # Portfolio structure components
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── TechStack.tsx
│   ├── App.tsx           # Stacking structure and layout wrapper
│   ├── main.tsx
│   └── index.css         # Typography, custom animations, & base styles
├── vite.config.ts        # Relative path setup base config
└── package.json
```

---

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/Harishankar00/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory and add your Web3Forms access key:
```env
VITE_WEB3FORMS_ACCESS_KEY=57f78de7-6485-450f-a0f3-08cd0dde7b12
```

### 4. Run development server
```bash
npm run dev
```
Open `http://localhost:5173` to view it locally.

---

## 🛫 Deployment Instructions

### Option A: GitHub Pages (Automated Workflow)
The project is already pre-configured to deploy automatically:
1. Go to your repository on GitHub.
2. Go to **Settings** -> **Secrets and variables** -> **Actions** -> click **New repository secret**.
3. Create a secret named `VITE_WEB3FORMS_ACCESS_KEY` and set your key as the value.
4. Push any changes to the `main` branch. The action will build relative assets and push the static build to the `gh-pages` branch.
5. In your repository **Settings** -> **Pages**, make sure the source is set to **Deploy from a branch** and target the **`gh-pages`** branch.

### Option B: Vercel (1-Click Deployment)
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** -> **Project** -> Import the `portfolio` repository.
3. Add `VITE_WEB3FORMS_ACCESS_KEY` under the Environment Variables section.
4. Click **Deploy**. Vercel will build the root assets and assign a free subdomain.