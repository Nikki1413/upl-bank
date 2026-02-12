# UPLBank - Modern Fintech Platform

A complete, production-ready fintech banking platform built with React, featuring a beautiful UI, smooth animations, and comprehensive banking features.

## 🌟 Features

### Core Banking Features
- **Dashboard Overview** - Real-time balance tracking, spending analytics, and account overview
- **Transaction Management** - View, search, and filter all transactions with category breakdowns
- **Card Management** - Manage virtual and physical cards with security features
- **Investment Portfolio** - Track investments with real-time performance metrics
- **Multi-Account Support** - Manage multiple checking, savings, and business accounts

### Design & User Experience
- **Modern UI/UX** - Clean, professional design with glass-morphism effects
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Dark Theme** - Eye-friendly dark theme with gradient accents
- **Interactive Charts** - Real-time data visualization with Recharts

### Technical Features
- **React Router** - Seamless page navigation
- **Component Architecture** - Modular, reusable components
- **Mock Data System** - Complete data layer for demonstration
- **Performance Optimized** - Fast load times and smooth interactions

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📁 Project Structure

```
fintech-platform/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navigation.jsx   # Main navigation bar
│   │   ├── StatCard.jsx     # Stat display cards
│   │   ├── AccountCard.jsx  # Account cards
│   │   └── TransactionItem.jsx  # Transaction list items
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx     # Landing page
│   │   ├── DashboardPage.jsx    # Main dashboard
│   │   ├── TransactionsPage.jsx # Transactions view
│   │   ├── CardsPage.jsx    # Card management
│   │   └── InvestmentsPage.jsx  # Investment portfolio
│   ├── data/               # Mock data
│   │   └── mockData.js      # Sample financial data
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- react & react-dom
- react-router-dom
- lucide-react (icons)
- recharts (charts)
- framer-motion (animations)
- tailwindcss (styling)
- vite (build tool)

### Step 2: Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Step 4: Preview Production Build

```bash
npm run preview
```

## 📱 Pages & Features

### 1. Landing Page (`/`)
- Hero section with animated background
- Feature showcase
- Call-to-action sections
- Responsive navigation

### 2. Dashboard (`/dashboard`)
- Account balance overview
- Balance history chart
- Spending by category pie chart
- Account cards with balances
- Recent transactions list
- Quick stats cards

### 3. Transactions (`/transactions`)
- Complete transaction history
- Search functionality
- Category filtering
- Income/Expense summary
- Export options
- Detailed transaction items

### 4. Cards (`/cards`)
- Visual card display with details
- Credit/Debit card management
- Usage statistics
- Security features
- Card controls (freeze, settings)
- Add new card functionality

### 5. Investments (`/investments`)
- Portfolio overview
- Individual investment tracking
- Performance metrics
- Profit/Loss calculations
- Buy/Sell functionality
- Portfolio diversification

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Fonts
The project uses Google Fonts (Sora & Unbounded). Change them in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

### Mock Data
Edit `src/data/mockData.js` to customize:
- User information
- Account balances
- Transactions
- Cards
- Investments
- Charts data

## 🔧 Development Tips

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

### Creating Components
1. Place in `src/components/`
2. Use motion components for animations
3. Follow the existing styling patterns
4. Export as default

### Styling Guidelines
- Use Tailwind utility classes
- Leverage the `glass-effect` class for card backgrounds
- Use `gradient-text` for gradient text effects
- Follow the color system (cyan, purple, blue, pink)

## 📊 Features Breakdown

### Dashboard Analytics
- **Balance Tracking**: Real-time account balance monitoring
- **Spending Analysis**: Category-wise expense breakdown
- **Trend Visualization**: Historical balance charts
- **Quick Actions**: Fast access to common banking tasks

### Transaction Features
- **Search**: Find transactions by merchant name
- **Filter**: Category-based filtering
- **Sort**: Date-based sorting
- **Export**: Download transaction history

### Card Management
- **Multiple Cards**: Support for credit and debit cards
- **Security**: Toggle card details visibility
- **Limits**: Track spending limits and available credit
- **Controls**: Freeze, settings, and management options

### Investment Tools
- **Portfolio Tracking**: Real-time value updates
- **Performance Metrics**: ROI and profit/loss tracking
- **Asset Allocation**: Diversified investment display
- **Trading**: Buy and sell functionality

## 🚀 Deployment

### Vercel
```bash
npm run build
# Upload dist folder to Vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve the dist folder with any static server
```

## 🎯 Best Practices Used

- **Component Composition**: Small, reusable components
- **Prop Drilling Prevention**: Proper data flow
- **Performance**: React best practices for optimization
- **Accessibility**: Semantic HTML and ARIA labels
- **Responsive Design**: Mobile-first approach
- **Code Organization**: Clear folder structure
- **Animation Performance**: GPU-accelerated transforms
- **State Management**: Local state for simplicity

## 🔮 Future Enhancements

Potential features to add:
- User authentication
- Real API integration
- Dark/Light theme toggle
- Multi-currency support
- Budget planning tools
- Bill payment system
- Savings goals
- Financial insights AI
- Push notifications
- Biometric security

## 📝 License

This project is for demonstration and educational purposes.

## 👨‍💻 Development

Built with ❤️ using modern web technologies

---

**Note**: This is a demo application with mock data. For production use, integrate with real banking APIs and implement proper security measures.
