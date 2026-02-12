import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import TransactionItem from '../components/TransactionItem'
import { Search, Filter, Download, Calendar } from 'lucide-react'
import { transactionsData } from '../data/mockData'

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  
  const categories = ['all', 'Shopping', 'Food & Drink', 'Transportation', 'Entertainment', 'Income']
  
  const filteredTransactions = transactionsData.filter(transaction => {
    const matchesSearch = transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || transaction.category === selectedFilter
    return matchesSearch && matchesFilter
  })
  
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
            <span className="gradient-text">Transactions</span>
          </h1>
          <p className="text-slate-400">View and manage all your transactions</p>
        </motion.div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-2xl p-6 border border-white/10"
          >
            <p className="text-slate-400 text-sm mb-1">Total Income</p>
            <h3 className="text-3xl font-bold text-green-400">$5,420.00</h3>
            <p className="text-xs text-slate-500 mt-2">This month</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-6 border border-white/10"
          >
            <p className="text-slate-400 text-sm mb-1">Total Expenses</p>
            <h3 className="text-3xl font-bold text-red-400">$1,844.72</h3>
            <p className="text-xs text-slate-500 mt-2">This month</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-6 border border-white/10"
          >
            <p className="text-slate-400 text-sm mb-1">Net Cash Flow</p>
            <h3 className="text-3xl font-bold text-cyan-400">$3,575.28</h3>
            <p className="text-xs text-slate-500 mt-2">This month</p>
          </motion.div>
        </div>
        
        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-2xl p-6 border border-white/10 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                    selectedFilter === category
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex items-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:bg-white/10 transition-colors">
                <Calendar className="h-5 w-5" />
                <span className="hidden sm:inline">Date</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 hover:bg-white/10 transition-colors">
                <Download className="h-5 w-5" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Transactions List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-effect rounded-2xl border border-white/10"
        >
          <div className="p-6 border-b border-white/10">
            <h2 className="text-lg font-bold text-white">
              {filteredTransactions.length} Transaction{filteredTransactions.length !== 1 ? 's' : ''}
            </h2>
          </div>
          
          <div className="divide-y divide-white/5">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction, index) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  delay={0.6 + index * 0.03}
                />
              ))
            ) : (
              <div className="p-12 text-center">
                <p className="text-slate-400">No transactions found</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TransactionsPage
