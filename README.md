# Countries Explorer

Live demo link : https://chipper-empanada-6a7eb5.netlify.app/

A modern web application built with Next.js and TypeScript that displays comprehensive information about countries worldwide using a GraphQL API.

## Features

- **Advanced Countries List**: Browse countries organized by continent in an intuitive accordion interface
- **Detailed Country Information**: View comprehensive details including currency, languages, states, and flag
- **Responsive Design**: Modern, clean interface that works on all devices
- **Accessible**: Built with accessibility best practices
- **Fast Performance**: Server-side rendering with Next.js App Router

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom orange theme
- **Font**: Inter (Google Fonts)
- **Icons**: Lucide React
- **Testing**: Jest with React Testing Library
- **Data Source**: GraphQL API (https://countries.trevorblades.com)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Running Tests

### Run all tests once:
\`\`\`bash
npm test
\`\`\`

### Run tests in watch mode (recommended for development):
\`\`\`bash
npm run test:watch
\`\`\`

### Run tests with coverage:
\`\`\`bash
npm test -- --coverage
\`\`\`

The test suite includes:
- Component rendering tests
- User interaction tests
- Accordion functionality tests
- Data display logic tests


## Design Features

- **OneAdvanced Theme**: Custom orange color palette inspired by OneAdvanced branding
- **Inter Font**: Clean, professional typography
- **Gradient Backgrounds**: Subtle gradients for visual appeal
- **Hover Effects**: Smooth transitions and interactive elements
- **Card-based Layout**: Modern card design with shadows and rounded corners
- **Responsive Grid**: Adapts to different screen sizes

## API Integration

The application uses the Countries GraphQL API to fetch:

- **Countries List**: Name, code, capital, continent, and flag emoji
- **Country Details**: Currency, languages, states/provinces, and additional metadata

## Testing

The application includes comprehensive unit tests using Jest and React Testing Library:

- **Component Tests**: Verify proper rendering and props handling
- **Interaction Tests**: Test user clicks and accordion functionality
- **Integration Tests**: Ensure components work together correctly

### Test Files:
- `__tests__/countries-table.test.tsx`
- `__tests__/continent-accordion.test.tsx`

## Approach

### Design Decisions

1. **Professional Theme**: Orange color scheme matching OneAdvanced branding
2. **Enhanced UX**: All accordions open by default, entire rows clickable
3. **Modern Typography**: Inter font for clean, readable text
4. **Server-Side Rendering**: Leverages Next.js App Router for optimal performance
5. **Accordion Interface**: Intuitive grouping by continent with expandable sections
6. **Type Safety**: Comprehensive TypeScript interfaces for all data structures

### Key Components

- **CountriesTable**: Main component that groups countries by continent
- **ContinentAccordion**: Collapsible sections for each continent (open by default)
- **Country Details Page**: Comprehensive view with flag, currency, languages, and states

### GraphQL Integration

- Custom fetch functions for API calls
- Efficient queries to minimize data transfer
- Error handling for missing data

## Future Improvements

Given more time, I would consider:

1. **Enhanced Search**: Add filtering and search functionality
2. **Caching**: Implement client-side caching for better performance
3. **Pagination**: Handle large datasets more efficiently
4. **Maps Integration**: Add geographical visualization
5. **Favorites**: Allow users to bookmark countries
6. **Offline Support**: Add service worker for offline functionality
7. **Advanced Filtering**: Filter by population, area, or other metrics

## Deployment

The application deployed on  Netlify - https://chipper-empanada-6a7eb5.netlify.app/

\`\`\`bash
npm run build
npm start
