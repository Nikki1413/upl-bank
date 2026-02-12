import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import { TrendingUp, TrendingDown, DollarSign, PieChart, Plus, ArrowUpRight } from 'lucide-react'
import { investmentsData } from '../data/mockData'

const InvestmentsPage = () => {
  const totalInvested = investmentsData.reduce((sum, inv) => sum + inv.invested, 0)
  const totalValue = investmentsData.reduce((sum, inv) => sum + inv.currentValue, 0)
  const totalReturn = ((totalValue - totalInvested) / totalInvested) * 100
  
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
            <span className="gradient-text">Investments</span>
          </h1>
          <p className="text-slate-400">Track and manage your investment portfolio</p>
        </motion.div>
        
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl">
                <DollarSign className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Invested</p>
                <h3 className="text-2xl font-bold text-white">
                  ${totalInvested.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <PieChart className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Current Value</p>
                <h3 className="text-2xl font-bold text-white">
                  ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </h3>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 rounded-xl ${totalReturn >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                {totalReturn >= 0 ? (
                  <TrendingUp className="h-6 w-6 text-green-400" />
                ) : (
                  <TrendingDown className="h-6 w-6 text-red-400" />
                )}
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Return</p>
                <h3 className={`text-2xl font-bold ${totalReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {totalReturn >= 0 ? '+' : ''}{totalReturn.toFixed(2)}%
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Investments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {investmentsData.map((investment, index) => (
            <motion.div
              key={investment.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{investment.name}</h3>
                  <p className="text-sm text-slate-400 font-mono">{investment.symbol}</p>
                </div>
                
                <div className={`flex items-center space-x-1 px-3 py-1.5 rounded-full ${
                  investment.return >= 0
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {investment.return >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="text-sm font-bold">
                    {investment.return >= 0 ? '+' : ''}{investment.return.toFixed(2)}%
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Invested</p>
                  <p className="text-lg font-bold text-white">
                    ${investment.invested.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-400 mb-1">Current Value</p>
                  <p className="text-lg font-bold text-white">
                    ${investment.currentValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-400 mb-1">Shares</p>
                  <p className="text-lg font-bold text-white">
                    {investment.shares}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-400 mb-1">Profit/Loss</p>
                  <p className={`text-lg font-bold ${
                    investment.currentValue - investment.invested >= 0
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}>
                    {investment.currentValue - investment.invested >= 0 ? '+' : ''}$
                    {(investment.currentValue - investment.invested).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      investment.return >= 0
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                        : 'bg-gradient-to-r from-red-500 to-rose-600'
                    }`}
                    style={{ width: `${Math.min(Math.abs(investment.return) * 3, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-colors">
                  Sell
                </button>
                <button className="flex-1 px-4 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-xl text-sm font-medium text-cyan-400 transition-colors">
                  Buy More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Add Investment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-2xl p-8 border-2 border-dashed border-white/20 hover:border-cyan-500/50 transition-all"
        >
          <div className="text-center">
            <div className="inline-flex p-4 bg-cyan-500/20 rounded-full mb-4">
              <Plus className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Start New Investment</h3>
            <p className="text-slate-400 mb-6">Diversify your portfolio with our curated investment options</p>
            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              <span>Browse Investments</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default InvestmentsPage
