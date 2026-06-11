# The Peptide App: Tracker MVP

A premium, high-fidelity mobile-first Single-Page Web Application MVP clone of **"The Peptide App: Tracker"** iOS application. Designed with a sleek, glassmorphic dark-mode interface, custom micro-interactions, and robust state management.

Live URL: **[https://peptide-tracker-psi.vercel.app](https://peptide-tracker-psi.vercel.app)**

---

## 🌟 Key Features

### 1. Goal-Based Onboarding & Routing
*   **Custom Goal Selection**: Select between **Fat Loss**, **Muscle Gain**, and **Injury Recovery**.
*   **Dynamic Navigation**: A custom client-side router handles tab changes seamlessly (Dashboard, Calculator, Tracker, Logs) with custom slide animations.

### 2. Interactive Reconstitution Calculator
*   **Real-time Formula Calculation**: Dynamic unit output based on:
    *   Vial size (mg)
    *   Diluent/BAC Water volume (mL)
    *   Desired dosage (mcg)
*   **Visual Syringe Animation**: A detailed SVG syringe dynamically animates the fluid level (red dosage block) and plunger handle height to match the calculated units tick mark.
*   **Interactive Checklist**: Step-by-step guidance on how to sanitize, reconstitute, dose, and store peptides safely.

### 3. Active Cycle Calendar Tracker
*   **Cycle Grid Logger**: Custom active cycle tracker displaying calendar days.
*   **Daily Check-in Modal**: Mark doses as taken, log notes, record side effects, and track injection sites.
*   **Status Indicator**: Days turn interactive green upon completing logs.

### 4. Progress Logs & Metrics
*   **SVG Line Chart Plotting**: Custom SVG chart rendering for logged metrics (Weight, Sleep Quality) with smooth trendlines, filled gradient areas, and auto-scaled dynamic canvas dimensions.
*   **Progress Photo Uploader**: Upload progress photos with previews stored directly in your session.
*   **Dose Logs History**: Chronological table showing dose logs with timestamps.

### 5. Premium Theme & Persistence
*   **Glassmorphism Theme**: Sleek dark mode using modern CSS variables, glassmorphic container blurs, and vibrant tailored gradients.
*   **Offline-First Sync**: Full persistent state management using browser `localStorage`. Doses, logs, files, and goals survive page reloads.

---

## 🛠️ Tech Stack

*   **Core**: HTML5, Vanilla JavaScript (ES6+)
*   **Styling**: Vanilla CSS3 (Custom Variables, Flexbox/Grid layouts, Keyframe Animations)
*   **Deployment**: Vercel

---

## 🚀 Getting Started & Local Running Instructions

You don't need any complex builders or compilation steps to run this project locally. You can serve the static files using any local HTTP server.

### Option A: Using Python (Recommended)
1. Open terminal in the project directory:
   ```bash
   cd "c:\Users\DELL\Desktop\Y7 alum"
   ```
2. Run a local web server:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000/
   ```

### Option B: Using Node.js (npx)
1. Run using `serve`:
   ```bash
   npx serve .
   ```
2. Open the URL provided by the terminal (typically `http://localhost:3000`).

---

## 📁 Repository Structure

```
├── index.html       # Single Page Application layout views and modals
├── style.css        # Premium dark-mode variables, syringe anims, charts, layouts
├── app.js           # Client-side router, reconstitution math, calendar, SVG charts
├── package.json     # Node script definitions (Vercel deployment dependencies)
└── .gitignore       # Git ignore rules
```
