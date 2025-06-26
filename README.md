# Clin Technologies - AI Clinical Documentation Platform

Clin Technologies is a modern web application that revolutionizes clinical documentation for healthcare providers. Built with React, Redux Toolkit, and @tanstack/react-query, it leverages advanced artificial intelligence to create accurate, HIPAA-compliant documentation from clinical conversations, integrating seamlessly with existing EMR systems.

## Features

- **Authentication**: Secure signup, login, and JWT-based session management
- **User Management**: Profile management, subscription status, and company user invites
- **Chat Platform**: AI-powered chat for clinical documentation and support
- **Subscription Handling**: Buy and update subscription plans
- **Support & Terms**: Built-in support request and terms retrieval
- **Modern UI**: Responsive, accessible, and beautiful interface with Tailwind CSS
- **API Integration**: All API calls handled via a reusable fetcher and React Query hooks
- **State Management**: Redux Toolkit for global state (auth, user, etc.)
- **Error Handling**: User-friendly notifications with react-hot-toast

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **State Management**: Redux Toolkit, @tanstack/react-query
- **Styling**: Tailwind CSS
- **Notifications**: react-hot-toast
- **API**: RESTful endpoints (see `public/ALI.postman_collection.json`)

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```

## Project Structure

- `src/page/` - All main pages (login, signup, home, etc.)
- `src/store/` - Redux store, slices, and API logic
- `src/utils/` - Utility functions (including the API fetcher)
- `src/components/` - Reusable UI components
- `public/ALI.postman_collection.json` - API documentation and endpoints

## API Reference

All API endpoints are documented in the included Postman collection. Authentication and most endpoints require a valid JWT token.

## Customization

- Update branding, colors, and assets in `src/assets/` and `src/components/`
- Extend Redux slices and React Query hooks for new features
- Add new pages or components as needed

## License

This project is for demonstration and internal use. Contact Clin Technologies for licensing and commercial use.
