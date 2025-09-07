# ALX Listing App

A modern Airbnb clone built with Next.js, TypeScript, and Tailwind CSS that allows users to browse and book property listings.

## 🏠 Project Overview

ALX Listing App is a comprehensive property listing platform that provides users with an intuitive interface to search, filter, and book accommodations. The application features a clean, responsive design inspired by modern booking platforms.

### Key Features

- 🔍 Advanced property search and filtering
- 📱 Responsive design for all devices
- 🏡 Detailed property listings with images and amenities
- ⭐ Rating and review system
- 👤 User profiles and booking management
- 💳 Secure booking process

## 🏗️ Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx           # Reusable card component for property displays
│       └── Button.tsx         # Reusable button component with variants
├── interfaces/
│   └── index.ts              # TypeScript interfaces and type definitions
├── constants/
│   └── index.ts              # Application constants and configuration
├── public/
│   └── assets/               # Static assets (images, icons, etc.)
├── pages/
│   ├── api/                  # API routes
│   ├── _app.tsx             # App wrapper
│   ├── _document.tsx        # Document structure
│   └── index.tsx            # Home page
├── styles/
│   └── globals.css          # Global styles with Tailwind imports
└── README.md
```

### Directory Purposes

- **`components/common/`**: Reusable UI components used throughout the application
- **`interfaces/`**: TypeScript type definitions for props, data structures, and API responses
- **`constants/`**: Application-wide constants including API URLs, UI text, and configuration settings
- **`public/assets/`**: Static files such as images, icons, and other media assets

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd alx-listing-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Starts the development server with Turbopack
- `npm run build` - Builds the application for production
- `npm start` - Runs the built application
- `npm run lint` - Runs ESLint for code quality checks

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **UI Components**: Custom reusable components
- **Code Quality**: ESLint with Next.js configuration

## 📱 Responsive Design

The application is built with a mobile-first approach and is fully responsive across:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1440px+)

## 🎨 Design System

The application follows a consistent design system with:

- Predefined color palette
- Standardized typography
- Reusable component library
- Consistent spacing and layout patterns

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the ALX Software Engineering program.

---

**Note**: This project is designed as a learning exercise for building modern web applications with React, Next.js, and TypeScript.
