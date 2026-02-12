export const userData = {
  name: "Nikki Yalla",
  email: "nikki.yalla@uplbank.com",
  accountNumber: "****7892",
  balance: 24567.89,
  currency: "USD"
}

export const accountsData = [
  {
    id: 1,
    name: "Primary Checking",
    type: "Checking",
    balance: 15234.50,
    accountNumber: "****7892",
    color: "cyan"
  },
  {
    id: 2,
    name: "Savings Account",
    type: "Savings",
    balance: 8500.39,
    accountNumber: "****3421",
    color: "purple"
  },
  {
    id: 3,
    name: "Business Account",
    type: "Business",
    balance: 833.00,
    accountNumber: "****8765",
    color: "blue"
  }
]

export const transactionsData = [
  {
    id: 1,
    merchant: "Amazon",
    category: "Shopping",
    amount: -127.45,
    date: "2026-02-12",
    time: "09:23 AM",
    status: "completed",
    icon: "Shopping"
  },
  {
    id: 2,
    merchant: "Salary Deposit",
    category: "Income",
    amount: 5420.00,
    date: "2026-02-10",
    time: "12:00 AM",
    status: "completed",
    icon: "TrendingUp"
  },
  {
    id: 3,
    merchant: "Starbucks",
    category: "Food & Drink",
    amount: -12.50,
    date: "2026-02-11",
    time: "08:15 AM",
    status: "completed",
    icon: "Coffee"
  },
  {
    id: 4,
    merchant: "Netflix",
    category: "Entertainment",
    amount: -15.99,
    date: "2026-02-09",
    time: "03:45 PM",
    status: "completed",
    icon: "Film"
  },
  {
    id: 5,
    merchant: "Shell Gas Station",
    category: "Transportation",
    amount: -65.00,
    date: "2026-02-08",
    time: "05:30 PM",
    status: "completed",
    icon: "Car"
  },
  {
    id: 6,
    merchant: "Whole Foods",
    category: "Groceries",
    amount: -234.78,
    date: "2026-02-07",
    time: "02:15 PM",
    status: "completed",
    icon: "ShoppingCart"
  },
  {
    id: 7,
    merchant: "Apple Store",
    category: "Shopping",
    amount: -1299.00,
    date: "2026-02-06",
    time: "11:00 AM",
    status: "completed",
    icon: "Smartphone"
  },
  {
    id: 8,
    merchant: "Gym Membership",
    category: "Health",
    amount: -89.99,
    date: "2026-02-05",
    time: "06:00 AM",
    status: "completed",
    icon: "Dumbbell"
  }
]

export const cardsData = [
  {
    id: 1,
    name: "UPLBank Platinum",
    type: "Credit",
    cardNumber: "**** **** **** 4521",
    expiryDate: "12/28",
    cvv: "***",
    limit: 10000,
    spent: 3247.56,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 2,
    name: "UPLBank Debit",
    type: "Debit",
    cardNumber: "**** **** **** 7892",
    expiryDate: "09/27",
    cvv: "***",
    balance: 15234.50,
    color: "from-purple-500 to-pink-600"
  }
]

export const investmentsData = [
  {
    id: 1,
    name: "S&P 500 Index",
    symbol: "SPY",
    invested: 5000,
    currentValue: 5847.32,
    return: 16.95,
    shares: 12.5
  },
  {
    id: 2,
    name: "Tech Growth Fund",
    symbol: "TGFX",
    invested: 3000,
    currentValue: 3456.78,
    return: 15.23,
    shares: 8.2
  },
  {
    id: 3,
    name: "Green Energy ETF",
    symbol: "ICLN",
    invested: 2000,
    currentValue: 1876.45,
    return: -6.18,
    shares: 45.7
  },
  {
    id: 4,
    name: "Crypto Balanced",
    symbol: "CRYP",
    invested: 1500,
    currentValue: 1923.67,
    return: 28.24,
    shares: 100
  }
]

export const spendingByCategory = [
  { name: "Shopping", value: 1426, color: "#06b6d4" },
  { name: "Food & Drink", value: 845, color: "#8b5cf6" },
  { name: "Transportation", value: 432, color: "#3b82f6" },
  { name: "Entertainment", value: 267, color: "#ec4899" },
  { name: "Health", value: 189, color: "#10b981" },
  { name: "Other", value: 312, color: "#f59e0b" }
]

export const balanceHistory = [
  { month: "Aug", balance: 18500 },
  { month: "Sep", balance: 20100 },
  { month: "Oct", balance: 19800 },
  { month: "Nov", balance: 22400 },
  { month: "Dec", balance: 21900 },
  { month: "Jan", balance: 23200 },
  { month: "Feb", balance: 24568 }
]
