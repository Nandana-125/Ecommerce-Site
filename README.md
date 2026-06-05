# Shopaholic 🛍️

A modern e-commerce web application built with React, featuring a clean Apple-inspired design system, context-based state management, and a full shopping experience.

**Live Demo:** _Coming soon_

## Features

- **Product Browsing** — Responsive grid layout with search, category filtering, and sorting (price, rating)
- **Product Details** — Individual product pages with image, description, quantity selector, and user reviews
- **Shopping Cart** — Add/remove items, adjust quantities, real-time total calculation
- **Wishlist** — Save products for later, add to cart from wishlist, duplicate prevention
- **User Reviews** — Read API reviews and post your own with star ratings
- **Authentication** — Register, login, logout with protected routes
- **Toast Notifications** — Global toast system replacing browser alerts

## Tech Stack

- **React 18** — Functional components, hooks, context API
- **React Router v6** — Client-side routing with route guards
- **Axios** — API integration with DummyJSON
- **Font Awesome** — Icon library
- **CSS Variables** — Custom design system with consistent spacing, colors, and typography

## Architecture

```
src/
├── context/          # Global state management
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   ├── ToastContext.jsx
│   └── WishlistContext.jsx
├── pages/            # Route-level components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── ProductDetails.jsx
│   ├── Register.jsx
│   ├── Shopping.jsx
│   └── Wishlist.jsx
├── components/       # Reusable UI components
│   ├── Cart.jsx
│   ├── Payment.jsx
│   ├── Product.jsx
│   ├── SearchNav.jsx
│   ├── SideNav.jsx
│   └── Toast.jsx
├── App.jsx
├── App.css
├── index.css         # Design system (CSS variables, reset)
└── main.jsx          # App entry point with providers
```

## Design System

The UI follows an Apple-inspired minimalist aesthetic, built on CSS custom properties defined in `index.css`:

- **Colors** — Off-white backgrounds, subtle borders, blue primary actions, muted secondary text
- **Spacing** — 4px base scale (4, 8, 12, 16, 24, 32, 48, 64, 96)
- **Typography** — System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Shadows** — Three-tier elevation system (sm, md, lg)
- **Transitions** — Consistent 0.2s ease on interactive elements

## State Management

The app uses React Context API with custom hooks for clean, prop-drill-free state access:

| Context           | Hook            | Purpose                    |
| ----------------- | --------------- | -------------------------- |
| `CartContext`     | `useCart()`     | Cart items, add to cart    |
| `WishlistContext` | `useWishlist()` | Wishlist items, add/remove |
| `AuthContext`     | `useAuth()`     | Login, logout, user data   |
| `ToastContext`    | `useToast()`    | Global toast notifications |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/shopaholic.git
cd shopaholic
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## API

Product data is sourced from [DummyJSON](https://dummyjson.com/products), a free fake REST API for testing and prototyping.

## Roadmap

- [ ] Responsive mobile layout
- [ ] Dark mode toggle
- [ ] Order history page
- [ ] Coupon/discount codes at checkout
- [ ] Recently viewed products
- [ ] Skeleton loading screens
- [ ] Backend integration (replacing localStorage auth)
- [ ] Pagination or infinite scroll

## License

MIT
