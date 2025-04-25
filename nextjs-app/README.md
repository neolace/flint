# Next.js App with TypeScript, Tailwind CSS, and Authentication

This is a modern web application built with Next.js, TypeScript, Tailwind CSS, and NextAuth.js for authentication.

## Features

- **Next.js 14**: The React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **NextAuth.js**: Authentication for Next.js
- **App Router**: Next.js App Router for file-based routing
- **Server Components**: React Server Components for improved performance
- **Responsive Design**: Mobile-friendly UI

## Authentication

The app includes a complete authentication system with:

- Email/Password authentication
- OAuth providers (GitHub, Google)
- Protected routes
- User sessions
- Sign in/out functionality

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your own values for:
- `NEXTAUTH_SECRET`: A random string used to hash tokens (generate one with `openssl rand -base64 32`)
- OAuth provider credentials (if using GitHub or Google authentication)

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs-app/
├── public/             # Static assets
├── src/
│   ├── app/            # App Router pages and layouts
│   │   ├── api/        # API routes
│   │   ├── auth/       # Authentication pages
│   │   ├── dashboard/  # Protected dashboard page
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # Reusable components
│   └── lib/            # Utility functions and configurations
├── .env.example        # Example environment variables
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Demo Credentials

For testing purposes, you can use the following credentials:

- Email: `user@example.com`
- Password: `password`

## Customization

### Tailwind CSS

The project includes a custom Tailwind configuration with a primary color palette. You can modify the colors in `tailwind.config.js`.

### Authentication Providers

To add or remove authentication providers, edit the `authOptions` in `src/lib/auth.ts`.

## Deployment

This application can be deployed to any platform that supports Next.js, such as Vercel, Netlify, or a custom server.

For optimal performance, it's recommended to use Vercel, which is built by the creators of Next.js.

## License

This project is licensed under the MIT License.
