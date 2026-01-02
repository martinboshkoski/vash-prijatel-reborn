# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Insurance company website ("Ваш Пријател" - Your Friend) built with React, TypeScript, and Vite. The site features an AI-powered insurance chatbot, blog system, and informational pages about insurance services. Content is primarily in Macedonian.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite with SWC plugin
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Backend**: Supabase (database + edge functions)
- **UI Components**: Radix UI primitives via shadcn/ui

## Architecture

### Application Entry Point

- `src/main.tsx` - React app initialization
- `src/App.tsx` - Root component with QueryClient, routing setup, and toast providers

### Routing Structure

All routes defined in `src/App.tsx`:
- `/` - Homepage with hero, AI chat, and features
- `/about` - About company page
- `/services` - Insurance services offered
- `/representatives` - Representatives information
- `/blog` - Blog listing page
- `/blog/:id` - Individual blog post pages
- `/contact` - Contact form
- `/*` - 404 Not Found page

**Important**: When adding new routes, they MUST be placed ABOVE the catch-all `*` route in `src/App.tsx`.

### Component Organization

- `src/components/` - Custom components (Header, Footer, InsuranceChat, DocumentUploader)
- `src/components/ui/` - shadcn/ui components (Button, Card, Dialog, etc.)
- `src/pages/` - Route components (Index, About, Services, Blog, BlogPost, Contact, Representatives, NotFound)
- `src/hooks/` - Custom React hooks (use-mobile, use-toast)
- `src/lib/utils.ts` - Utility functions (cn for className merging)

### Data Management

- `src/data/blogPosts.ts` - Static blog content with BlogPost interface
  - Each post includes: id, title, excerpt, category, date, readTime, content (HTML string), coverImage, CTA fields
  - Content is in Macedonian, formatted as HTML strings with headings and paragraphs

### Supabase Integration

- `src/integrations/supabase/client.ts` - Supabase client setup with auth configuration
- `src/integrations/supabase/types.ts` - Database type definitions
- `supabase/functions/chat/index.ts` - Edge function for AI chatbot
- `supabase/functions/process-documents/index.ts` - Edge function for document processing
- Environment variables required: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`

### AI Chatbot Feature

The `InsuranceChat` component (`src/components/InsuranceChat.tsx`) provides an AI assistant for insurance questions:
- Invokes Supabase edge function `chat`
- Displays conversation with user/assistant messages
- Shows sources/references when available
- Handles loading states and errors with toast notifications

### Styling System

- Path alias: `@/*` maps to `./src/*`
- Tailwind configured with CSS variables for theming (see `tailwind.config.ts`)
- Dark mode support via class strategy
- Custom color tokens: primary, secondary, destructive, muted, accent, card, sidebar
- Typography plugin: `@tailwindcss/typography` installed for rich text content

### TypeScript Configuration

- Relaxed TypeScript settings for faster development:
  - `noImplicitAny: false`
  - `noUnusedParameters: false`
  - `noUnusedLocals: false`
  - `strictNullChecks: false`
- Path alias configured: `@/*` → `./src/*`

## Important Patterns

### Adding New Blog Posts

Edit `src/data/blogPosts.ts` and add a new object to the `blogPosts` array following the `BlogPost` interface. Include:
- Unique numeric ID
- Macedonian title, excerpt, and content
- Category, date, readTime
- Optional coverImage URL
- CTA fields (ctaTitle, ctaDescription, ctaButtonText)

### Using UI Components

Import from `@/components/ui/[component-name]`:
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
```

### Supabase Function Invocation

```tsx
const { data, error } = await supabase.functions.invoke("function-name", {
  body: { /* payload */ }
});
```

### Toast Notifications

```tsx
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();
toast({
  title: "Title",
  description: "Message",
  variant: "destructive" // or default
});
```

## Development Notes

- Project was created via Lovable.dev platform
- Uses `lovable-tagger` component tagger in development mode
- Vite dev server runs on port 8080 with IPv6 support (`::`)
- Main navigation: Header component with links to all main pages
- Footer component contains company info and links
- Images stored in `src/assets/` (e.g., hero-bg.png)
