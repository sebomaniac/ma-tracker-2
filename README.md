# M&A Tracker

A comprehensive web application for M&A professionals and investors to discover acquisition opportunities through AI-powered search of Norwegian company financials.

## 🚀 Features

### Landing & Authentication
- **Professional Landing Page** with clear value proposition and feature highlights
- **Complete Authentication Flow** including login, signup, and password reset
- **Pricing Page** with Free and Pro plan comparison
- **Mobile-Responsive Design** across all pages

### Dashboard & Search
- **Smart Query Builder** with natural language input and advanced filters
- **Financial Data Analysis** including growth rates, profit margins, and health scores
- **Results Table** with sorting, filtering, and detailed company information
- **Search History** with status tracking and result management

### Key Functionality
- **AI-Powered Search**: Natural language queries like "Companies with 20% revenue growth"
- **Financial Filters**: Revenue range, growth rate, profit margins, company size
- **Export Options**: CSV for free users, Excel/PDF for Pro users
- **Usage Tracking**: Monitor monthly query limits and plan usage
- **Mobile-First Design**: Fully responsive across all device sizes

## 🎨 Design System

### Color Palette
- **Primary**: Teal (`oklch(0.55 0.18 175)`) - Primary actions, positive metrics
- **Secondary**: Emerald (`oklch(0.58 0.16 165)`) - Growth indicators, success states
- **Accent**: Light teal variants for backgrounds and subtle highlights
- **Supporting**: Professional grays and whites for content areas

### Typography
- **Primary Font**: Geist Sans - Clean, professional, highly readable
- **Design Philosophy**: Modern, financial-focused, accessible

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: ShadCN UI (Radix UI + Tailwind)
- **Icons**: Lucide React
- **TypeScript**: Full type safety throughout
- **Development**: Turbopack for fast development builds

## 📁 Project Structure

```
app/
├── (auth)/                 # Authentication pages
│   ├── login/
│   ├── signup/
│   └── forgot-password/
├── dashboard/              # Main application
│   ├── query/             # Query builder
│   ├── results/[id]/      # Search results
│   ├── history/           # Query history
│   └── settings/          # User settings
├── pricing/               # Pricing page
├── layout.tsx             # Root layout
└── page.tsx               # Landing page

components/
├── ui/                    # ShadCN UI components
└── dashboard-sidebar.tsx  # Dashboard navigation

types/
└── index.ts               # TypeScript type definitions

utils/
└── financial.ts           # Financial calculation utilities
```

## 🎯 User Experience Flow

### For New Users
1. **Landing Page**: Clear value proposition and example searches
2. **Sign Up**: Simple registration with free plan benefits
3. **Dashboard**: Welcome interface with sample data and quick actions
4. **Query Builder**: Guided experience with examples and tips
5. **Results**: Professional data table with export options

### For Returning Users
1. **Dashboard**: Usage stats, recent searches, and quick access
2. **Query History**: Review past searches and re-run queries
3. **Settings**: Account management and export preferences

## 💼 Business Model

### Free Plan
- 3 searches per month
- Top 20 results per search
- Basic CSV export
- Financial health scores

### Pro Plan (499 NOK/month)
- 25 searches per month
- Advanced export options (Excel, PDF)
- Detailed financial analysis
- Search history and templates
- Priority support

## 📱 Mobile Responsiveness

### Desktop (>1024px)
- Full sidebar navigation
- Multi-column layouts
- Comprehensive data tables
- All features accessible

### Tablet (768px - 1024px)
- Collapsible sidebar
- Responsive grid layouts
- Touch-friendly interactions
- Optimized data display

### Mobile (<768px)
- Slide-out navigation drawer
- Stacked card layouts
- Touch-optimized forms
- Essential features prioritized

## 🔧 Development

### Getting Started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Dependencies
- React 19.1.0
- Next.js 15.5.2
- Tailwind CSS 4
- TypeScript 5
- Various ShadCN UI components

## 🎨 Design Principles

1. **Professional First**: Clean, business-appropriate aesthetic
2. **Data-Driven**: Clear presentation of financial information
3. **User-Centric**: Intuitive navigation and workflows
4. **Mobile-Ready**: Responsive design from the ground up
5. **Accessible**: Following web accessibility best practices

## 📊 Example Use Cases

### Investment Firms
- "High-growth tech companies under 100M NOK"
- "Profitable SaaS companies with low debt ratios"
- "Companies with 3-year revenue CAGR above 25%"

### M&A Advisors
- "Family businesses ready for succession"
- "Distressed companies with valuable assets"
- "Cash-rich acquisition targets in manufacturing"

### Private Equity
- "Companies with 15%+ EBITDA margins"
- "Businesses with consistent revenue growth"
- "Market leaders in niche sectors"

This application provides a complete foundation for M&A deal sourcing and company discovery, combining powerful search capabilities with professional UX design.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
