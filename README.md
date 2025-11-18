<div align="center">
  <h1>Minimalist Gemini Chat</h1>
</div>

Minimalist Gemini Chat is a small, focused React + Vite application that demonstrates a clean chat UI connected to Google Gemini via the `@google/genai` client. It emphasizes readability, a minimal component structure, and streaming AI responses where supported.

**Table of Contents**
- **Overview**: What this project is and who it's for
- **Features**: Key behaviors and UX decisions
- **Tech Stack**: Libraries and tools used
- **Getting Started**: Install, configure, and run locally
- **Environment**: Required environment variables and examples
- **Project Structure**: Files and folders to know
- **Development**: Scripts and tips for working on the codebase
- **Deployment**: How to build and publish
- **Contributing**: How to contribute and report issues
- **Security & License**: API key handling and licensing

## **Overview**

This repo implements a lightweight single-page chat application that connects to the Gemini API. It is intended as a minimal example for developers who want to integrate Gemini-powered conversational UX into a frontend project without a large codebase.

## **Features**

- **Minimal UI**: Clean, accessible chat layout with separate presentational components.
- **Streaming responses**: The UI supports streamed AI responses when the service returns them.
- **Easy to extend**: Logical separation between UI components (`components/`), page containers (`pages/`), and API logic (`services/`).

## **Tech Stack**

- **React 19**
- **Vite** (dev/build tool)
- **TypeScript**
- **@google/genai** (Gemini client used in `services/geminiService.ts`)

## **Getting Started**

Prerequisites:
- **Node.js** (recommended >= 18)

Clone and install:

```powershell
git clone <repo-url>
cd minimalist-gemini-chat
npm install
```

Add environment variables (see `Environment` below). Start the dev server:

```powershell
npm run dev
```

Open the shown local URL (Vite defaults to `http://localhost:5173`).

## **Environment**

- **`GEMINI_API_KEY`** (required): Your Gemini API key used by `services/geminiService.ts` for authentication.

Create a `.env.local` (not committed) or use your host's environment configuration. Example `.env.example`:

```text
# .env.example
GEMINI_API_KEY=your_gemini_api_key_here
```

Note: Never commit real API keys. Add `.env.local` to `.gitignore` if it isn't already.

## **Project Structure**

- `index.html` – App entry HTML
- `index.tsx` / `App.tsx` – React entry and top-level container
- `components/` – Reusable UI pieces (`ChatInput.tsx`, `ChatMessage.tsx`, `Header.tsx`, `LoadingSpinner.tsx`, icons)
- `pages/` – Page-level components (`ChatPage.tsx`, `WorkflowPage.tsx`)
- `services/geminiService.ts` – API integration and request handling for Gemini
- `metadata.json` – App metadata (name, description) used by hosting platforms
- `package.json`, `tsconfig.json`, `vite.config.ts` – Build and tooling config

If you want to modify Gemini request behavior, start in `services/geminiService.ts`.

## **Development**

- **Start dev server:** `npm run dev`
- **Build production bundle:** `npm run build`
- **Preview production locally:** `npm run preview`

Common development tips:
- Keep `GEMINI_API_KEY` out of source control.
- For UI changes, edit components in `components/` and reload the app.

## **Using the Gemini Integration**

The `services/geminiService.ts` file contains the logic that communicates with the Gemini API using the `@google/genai` package. Typical responsibilities handled there:
- Authentication (reading `GEMINI_API_KEY`)
- Building request payloads for chat/streaming
- Exposing a simple API for the UI to send a user message and receive streamed/complete responses

If you plan to run the Gemini calls from a server-side environment (recommended for production), move the key and call logic to a secure backend endpoint and have the frontend call that endpoint.

## **Deployment**

This is a static SPA. Build and deploy the generated `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

Example (preview locally):

```powershell
npm run build
npm run preview
```

For production deployments where API secrets are required, configure server-side functions or environment variables provided by your hosting platform (do not embed API keys in the client bundle).

## **Contributing**

Contributions are welcome. Suggested workflow:

1. Fork the repo and create a feature branch.
2. Make changes and add tests if applicable.
3. Open a pull request describing the change and rationale.

Please open an issue first for larger changes or to discuss architecture decisions.

## **Security**

- Keep `GEMINI_API_KEY` secret. Use server-side proxies for request signing in production.
- Do not log secrets or include keys in error reporting.

## **License**

This repository does not include a license file. If you want to make the project open source, add a `LICENSE` file (MIT or Apache-2.0 are common choices).

## **Extras & Next Steps**

- Add a `.env.example` file to the repo with the variable names required (safe to commit).
- Add a `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` for larger community contributions.
- Add small e2e or integration tests for the service layer if you plan to rely on Gemini behavior.

---

If you'd like, I can also:
- Add a sample `.env.example` file to the repo
- Create a short `CONTRIBUTING.md` and `LICENSE` file
- Add documentation comments to `services/geminiService.ts` describing the request flow

Tell me which of those you'd like me to add next.
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
