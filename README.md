# BlockBlast Solver (Electron App)

An Electron-based desktop app that captures a screenshot of a mirrored mobile screen (e.g., using LetsView), uploads it to [blockblastsolver.ai](https://blockblastsolver.ai), and visually renders the AI-generated solution using colored grid blocks.

---

## 🔧 Features

- 📷 Manual "Capture & Solve" button
- 🔁 Optional Auto Mode (10s interval)
- 🌑 Clean dark mode interface
- 🧩 Step-by-step block placement visualized
- 💻 Uses `webview` to integrate with BlockBlastSolver.ai
- 🛠 Configurable mirror app name (`config.json`)

---

## 📦 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/decompi/blkblast-solver.git
cd blkblast-solver
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

---

## ⚙️ Configuration

Create or edit a `config.json` file in the root of the project:

```json
{
  "windowName": "LetsView [Cast]",
  "screenshotInterval": 10000
}
```

- `windowName`: Name of the screen mirror window to capture
- `screenshotInterval`: (in milliseconds) how often Auto Mode captures a screenshot

Make sure your mirroring app (e.g., LetsView) is running and your phone screen is visible.

---

## 🗂 File Structure

```
├── main.js           # Electron main process (window, capture)
├── preload.js        # Context bridge for secure IPC
├── index.html        # App interface
├── config.json       # User settings for mirroring app & interval
├── package.json      # Project metadata and scripts
└── README.md         # You're reading it
```

---

## 🧠 How It Works

1. You mirror your phone to your PC (e.g., via LetsView).
2. This app captures a screenshot of that window.
3. The screenshot is uploaded to `blockblastsolver.ai`.
4. It waits for the result, grabs the placement grid colors.
5. Renders each step visually in a clean dark UI.

---

## 🪪 License

This project is open-source under the [MIT License](LICENSE).

---

## ✨ Future Ideas

- Local solving engine (instead of 3rd-party)
- Drag & drop image support
- History of past solves
- Mobile version?

---

## 🙌 Credits

- [BlockBlastSolver.ai](https://blockblastsolver.ai) for the AI logic
- Electron + Node.js for the framework
