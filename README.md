<div align="center">
<h1>Minimalist Gemini Chat</h1>
</div>

Minimalist Gemini Chat is a small, clean React + Vite app that demonstrates a chat UI connected to Google's Gemini API (via `@google/genai`). It focuses on a minimal interface and streamed AI responses.

**Short description:** A lightweight chat app that shows how to connect a frontend to the Gemini API for conversational interactions.

**Live preview (if available):** See `metadata.json` for app metadata and any deployed links.

**Table of Contents**
- Project overview
- Features
- Tech stack
- Getting started
- Environment
- Project structure
- Usage
- Deployment
- Contributing
- License

## Project overview

This repository implements a simple chat UI using React and Vite. It contains a small set of components under `components/`, pages under `pages/`, and a `services/` folder with a `geminiService.ts` that handles API calls to Gemini.

## Features

- Minimal, accessible chat UI
- Streaming AI responses (where supported by the backend/service)
- Clear separation of components and services for easy extension

## Tech stack

- React 19
- Vite
- TypeScript
- `@google/genai` (Gemini client)

## Getting started

Prerequisites:
- Node.js (recommended >= 18)

Clone the repo and install dependencies:

```powershell
git clone <repo-url>
cd minimalist-gemini-chat
npm install
```

Create a local environment file to hold your Gemini API key (the app expects the key in an environment variable named `GEMINI_API_KEY`):

```powershell
# create a file named .env.local in the project root
# add the following line to .env.local
GEMINI_API_KEY=your_gemini_api_key_here
```

Run the development server:

```powershell
npm run dev
```

Open the indicated local URL in your browser (Vite typically uses `http://localhost:5173`).

## NPM scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - build the production bundle
- `npm run preview` - locally preview the production build

## Environment & Configuration

- `GEMINI_API_KEY` (required): API key used by `services/geminiService.ts` to authenticate requests to Gemini.
- `metadata.json`: contains app name and description used by hosting platforms or the project.

Note: Keep your API keys secure. Do not commit `.env.local` to source control.

## Project structure

- `index.html` – app entry HTML
- `index.tsx` / `App.tsx` – React entry and app container
- `components/` – reusable UI components (`ChatInput.tsx`, `ChatMessage.tsx`, `Header.tsx`, `LoadingSpinner.tsx`, icons)
- `pages/` – page-level components (`ChatPage.tsx`, `WorkflowPage.tsx`)
- `services/geminiService.ts` – abstraction around the Gemini API calls
- `metadata.json` – app metadata (name, description)
- `package.json` / `tsconfig.json` / `vite.config.ts` – build and config files

## Usage

1. Start the dev server (`npm run dev`).
2. Open the app in the browser and enter messages in the chat input.
3. The app sends input to the Gemini service and displays streamed or full responses in the chat UI.

If you want to change behavior of the Gemini requests, edit `services/geminiService.ts`.

## Deployment

This is a static SPA built with Vite. You can deploy the `dist` folder produced by `npm run build` to static hosts such as Vercel, Netlify, or GitHub Pages. For a simple preview of the production bundle locally, run:

```powershell
npm run build
npm run preview
```

## Contributing

Contributions are welcome. Please open an issue or a pull request with a clear description of the change.

## License

This project does not include a license file. Add a `LICENSE` if you wish to make the repository open source.

---

If you'd like, I can also:
- Add a sample `.env.example` showing required env vars
- Add a short development checklist or demo instructions
- Create a small CONTRIBUTING.md

Feel free to tell me which extras you want added.
