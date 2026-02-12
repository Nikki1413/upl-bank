import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import StatCard from '../components/StatCard'
import AccountCard from '../components/AccountCard'
import TransactionItem from '../components/TransactionItem'
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Wallet, TrendingUp, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { accountsData, transactionsData, balanceHistory, spendingByCategory } from '../data/mockData'

const DashboardPage = () => {
  const totalBalance = accountsData.reduce((sum, acc) => sum + acc.balance, 0)
  
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            Welcome back, <span className="gradient-text">Nikki</span>
          </h1>
          <p className="text-slate-400">Here's what's happening with your money today</p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Balance"
            value={`$${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
            change={12.5}
            icon={Wallet}
            color="cyan"
            delay={0}
          />
          <StatCard
            title="Monthly Income"
            value="$5,420"
            change={8.2}
            icon={TrendingUp}
            color="purple"
            delay={0.1}
          />
          <StatCard
            title="Total Spent"
            value="$3,471"
            change={-3.1}
            icon={ArrowDownRight}
            color="blue"
            delay={0.2}
          />
          <StatCard
            title="Active Cards"
            value="2"
            change={0}
            icon={CreditCard}
            color="pink"
            delay={0.3}
          />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Balance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass-effect rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Balance Overview</h2>
              <div className="flex items-center space-x-2 text-sm">
                <button className="px-3 py-1.5 bg-cyan-500/20 text-cyan-400 rounded-lg font-medium">6M</button>
                <button className="px-3 py-1.5 text-slate-400 hover:text-white rounded-lg font-medium">1Y</button>
                <button className="px-3 py-1.5 text-slate-400 hover:text-white rounded-lg font-medium">All</button>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={balanceHistory}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="balance"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  dot={{ fill: '#06b6d4', r: 5 }}
                  fill="url(#colorBalance)"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          
          {/* Spending Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-2xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-bold text-white mb-6">Spending by Category</h2>
            
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={spendingByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {spendingByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="space-y-2 mt-4">
              {spendingByCategory.map((category, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                    <span className="text-slate-300">{category.name}</span>
                  </div>
                  <span className="font-medium text-white">${category.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Accounts and Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Accounts */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-between mb-4"
            >
              <h2 className="text-xl font-bold text-white">Your Accounts</h2>
              <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center space-x-1">
                <span>View All</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
            
            <div className="space-y-4">
              {accountsData.map((account, index) => (
                <AccountCard key={account.id} account={account} delay={0.7 + index * 0.1} />
              ))}
            </div>
          </div>
          
          {/* Recent Transactions */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-between mb-4"
            >
              <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
              <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center space-x-1">
                <span>View All</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
            
            <div className="glass-effect rounded-2xl border border-white/10 divide-y divide-white/5">
              {transactionsData.slice(0, 6).map((transaction, index) => (
                <TransactionItem key={transaction.id} transaction={transaction} delay={0.7 + index * 0.05} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
