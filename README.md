# Clin Technologies

- **Authentication**: Secure signup, login, and JWT-based session management
- **User Management**: Profile management, subscription status, and company user invites
- **Modern UI**: Responsive, accessible, and beautiful interface with Tailwind CSS
- **API Integration**: All API calls handled via a reusable fetcher and React Query hooks
- **State Management**: Redux Toolkit for global state
- **Error Handling**: User-friendly notifications with react-hot-toast

## Tech Stack

<img src="https://go-skill-icons.vercel.app/api/icons?i=ts,react,tailwindcss,vite,redux" />

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
