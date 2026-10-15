# MyDesignGhar — AI Interior Design for India 🇮🇳 ✨

**MyDesignGhar** is an AI-powered interior design web application tailored specifically for Indian homes and aesthetics. It enables homeowners to transform any room in seconds using artificial intelligence across 26 distinct Indian regional styles (such as Rajasthani, Kerala traditional, Kashmiri, Gujarati, and Chettinad) alongside contemporary styles like Japandi, Scandinavian, and Minimalist.

---

## 🌟 Key Features

- **🎨 26 Indian Regional Styles + Contemporary Styles**  
  Select from authentic cultural aesthetics representing states across India (Rajasthan, Kerala, Kashmir, Bengal, Goa, etc.) as well as modern luxury, Japandi, and minimalist aesthetics.

- **📸 Instant AI Room Redesign**  
  Upload or capture room photos to generate redesigned interiors while preserving the original architecture and spatial layout.

- **↔️ Interactive Before & After Comparison**  
  Interactive split-screen slider component to effortlessly compare original rooms with AI-generated redesigned spaces.

- **🧑‍💼 Expert Interior Designer Directory & Booking**  
  Discover verified interior designers and vastu/interior consultants, filter by region and specialty, and book online consultation sessions.

- **💳 Digital Wallet & Referral Program**  
  Integrated credit wallet for generation passes, earning credits through referrals, and tracking transaction history.

- **📱 Mobile-First Responsive App Experience**  
  Optimized for mobile viewports with a polished app shell, bottom navigation, and light/dark mode support.

---

## 🛠️ Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start/latest) (Full-stack React framework with SSR)
- **Routing:** [TanStack Router](https://tanstack.com/router/latest) (Type-safe file-based routing)
- **State & Data Fetching:** [TanStack React Query](https://tanstack.com/query/latest) & [Zustand](https://zustand.docs.pmnd.rs/)
- **UI & Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with Radix UI primitives & Lucide Icons
- **Bundler & Server Engine:** [Vite 7](https://vitejs.dev/) & [Nitro 3](https://nitro.build/)
- **Package Manager / Runtime:** [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) (v20+)

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) installed:

```bash
# Check bun version
bun --version

# Or install bun if you haven't yet
curl -fsSL https://bun.sh/install | bash
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Aditya07024/inspire-my-haunt.git
cd inspire-my-haunt

bun install
```

### Development Server

Start the local Vite dev server:

```bash
bun run dev
```

Open your browser and navigate to:
**[http://localhost:8080](http://localhost:8080)**

---

## 🏗️ Production Build

To build the application for production:

```bash
bun run build
```

To preview the built production bundle:

```bash
bun run preview
```

---

## ☁️ Deployment to Vercel

The project is pre-configured with Nitro's Vercel preset (`.vercel/output` Build Output API v3):

1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), import `Aditya07024/inspire-my-haunt`.
3. Vercel automatically detects the build command (`bun run build` or `vite build`) and deploys both static assets and the serverless SSR function.

---

## 📁 Project Structure

```
├── public/                 # Static assets & icons
├── src/
│   ├── components/         # Reusable UI & layout components
│   │   ├── mobile/         # Mobile container, header, bottom navigation
│   │   ├── ui/             # Radix-based UI components (buttons, dialogs, etc.)
│   │   └── ui-kit/         # Before & After slider, feature badges
│   ├── hooks/              # Custom React hooks (toast, mobile detection)
│   ├── lib/                # Utilities, mock data, and error handlers
│   ├── routes/             # File-based routes (TanStack Router)
│   │   ├── index.tsx       # Splash screen
│   │   ├── home.tsx        # Main discovery dashboard
│   │   ├── generate.tsx    # Room generator
│   │   ├── designs/        # Design results & details
│   │   ├── consultants/    # Consultant directory & profiles
│   │   ├── booking.tsx     # Session booking
│   │   ├── wallet.tsx      # Credit balance & recharge
│   │   └── settings.tsx    # App preferences & theme toggle
│   ├── store/              # Zustand global application state
│   ├── server.ts           # SSR entry wrapper & error interceptor
│   ├── router.tsx          # TanStack Router instance creation
│   └── styles.css          # Global Tailwind styles & color tokens
├── bunfig.toml             # Bun runtime configuration
├── vite.config.ts          # Vite & Nitro configuration
└── package.json            # Dependencies & scripts
```

---

## 📜 License

This project is private and proprietary. All rights reserved.
