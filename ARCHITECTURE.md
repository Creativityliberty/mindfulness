
# Mindfulness & Bien-être Studio - Architecture

## 🚀 Overview
This project is a high-end training platform built with React, Tailwind CSS, and Lucide icons. It is designed to be highly modular and easily modifiable by AI agents.

## 📂 File Structure
- `theme.ts`: **THE MOST IMPORTANT FILE**. Contains all brand colors, text strings, and spacing constants. Modify this to restyle the site.
- `App.tsx`: The main orchestrator. Handles view switching between the landing page and the Auth system.
- `components/`:
    - `Header.tsx`: Floating navigation "island".
    - `Hero.tsx`: High-impact landing section with animations.
    - `AuthPage.tsx`: Split-view login/signup/forgot-password screen.
    - `ContactChatbot.tsx`: Multi-channel contact selector and Gemini-powered AI Assistant.
    - `CourseGrid.tsx`: Dynamic list of available training programs.

## 🎨 How to Restyle
To change the app's appearance, an AI agent should look at `theme.ts`. 
- To change the **primary color**, update `THEME.colors.primary`.
- To change **spacing**, update `THEME.spacing`.
- To update **Marketing Copy**, update `THEME.content`.

## 🤖 AI Assistant (Chatbot)
The chatbot uses `gemini-3-flash-preview` for high speed and intelligent responses. The system prompt is located in `components/ContactChatbot.tsx`.

## 📱 Responsiveness
The app uses a "Mobile-First" approach with Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
