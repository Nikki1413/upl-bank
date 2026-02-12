# 🚀 Quick Start Guide - UPLBank Fintech Platform

## For VS Code Users

### Step-by-Step Setup Instructions

#### 1️⃣ Open Project in VS Code

```bash
# Navigate to project folder
cd fintech-platform

# Open in VS Code
code .
```

#### 2️⃣ Install Node.js (if not installed)

Download from: https://nodejs.org/
- Choose LTS version
- Install with default settings
- Restart VS Code after installation

#### 3️⃣ Open Terminal in VS Code

- Press `Ctrl + `` (backtick) or
- Menu: Terminal → New Terminal

#### 4️⃣ Install Dependencies

In the VS Code terminal, run:

```bash
npm install
```

Wait for all packages to install (this may take 2-5 minutes).

#### 5️⃣ Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

#### 6️⃣ Open in Browser

- Click the `http://localhost:3000/` link in terminal (Ctrl + Click)
- Or manually open your browser and go to `http://localhost:3000`

### 🎉 You're Done!

The application should now be running. You'll see the UPLBank landing page.

---

## VS Code Recommended Extensions

Install these for better development experience:

1. **ES7+ React/Redux/React-Native snippets** - Quick React snippets
2. **Tailwind CSS IntelliSense** - Tailwind autocomplete
3. **Prettier - Code formatter** - Code formatting
4. **ESLint** - Code linting

To install:
- Press `Ctrl + Shift + X`
- Search for extension name
- Click "Install"

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code for errors |

---

## Troubleshooting

### Port 3000 Already in Use?

If port 3000 is busy, Vite will automatically use the next available port (3001, 3002, etc.)

### Dependencies Won't Install?

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and try again
rm -rf node_modules
npm install
```

### Build Errors?

Make sure you're using Node.js version 16 or higher:

```bash
node --version
```

### Hot Reload Not Working?

Save the file again (Ctrl + S) or restart the dev server:
- Press `Ctrl + C` in terminal
- Run `npm run dev` again

---

## Project Navigation

### Main Files to Edit:

📁 **Pages** (`src/pages/`)
- `HomePage.jsx` - Landing page
- `DashboardPage.jsx` - Main dashboard
- `TransactionsPage.jsx` - Transactions view
- `CardsPage.jsx` - Card management
- `InvestmentsPage.jsx` - Investments

📁 **Components** (`src/components/`)
- `Navigation.jsx` - Top navigation bar
- `StatCard.jsx` - Dashboard stat cards
- `AccountCard.jsx` - Account display cards
- `TransactionItem.jsx` - Transaction list items

📁 **Data** (`src/data/`)
- `mockData.js` - All sample data (customize here!)

📁 **Styles** (`src/`)
- `index.css` - Global styles and utilities

---

## Making Changes

### Want to change colors?

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR', // Change this
  }
}
```

### Want to modify data?

Edit `src/data/mockData.js`:

```javascript
export const userData = {
  name: "Your Name",     // Change this
  balance: 50000,        // Change this
  // ...
}
```

### Want to add a new page?

1. Create file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navigation.jsx`

---

## Keyboard Shortcuts in VS Code

| Shortcut | Action |
|----------|--------|
| `Ctrl + P` | Quick file open |
| `Ctrl + Shift + F` | Search in files |
| `Ctrl + B` | Toggle sidebar |
| `Ctrl + `` | Toggle terminal |
| `Alt + Up/Down` | Move line up/down |
| `Ctrl + /` | Toggle comment |
| `Ctrl + D` | Select next match |

---

## Need Help?

1. Check the main README.md for detailed documentation
2. Look at existing components for examples
3. Read comments in the code
4. Check browser console for errors (F12)

---

## Next Steps

1. ✅ Run the project
2. 🎨 Customize colors and branding
3. 📝 Modify mock data with your own
4. 🧩 Add new features
5. 🚀 Deploy to web

**Happy Coding! 🎉**
