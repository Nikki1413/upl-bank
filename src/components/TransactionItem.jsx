import React from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

const TransactionItem = ({ transaction, delay = 0 }) => {
  const Icon = LucideIcons[transaction.icon] || LucideIcons.Circle
  const isIncome = transaction.amount > 0
  
  const categoryColors = {
    'Shopping': 'bg-cyan-500/20 text-cyan-400',
    'Income': 'bg-green-500/20 text-green-400',
    'Food & Drink': 'bg-orange-500/20 text-orange-400',
    'Entertainment': 'bg-pink-500/20 text-pink-400',
    'Transportation': 'bg-blue-500/20 text-blue-400',
    'Groceries': 'bg-purple-500/20 text-purple-400',
    'Health': 'bg-emerald-500/20 text-emerald-400'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group"
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-xl ${categoryColors[transaction.category] || 'bg-slate-500/20 text-slate-400'}`}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div>
          <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
            {transaction.merchant}
          </h4>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xs text-slate-400">{transaction.category}</span>
            <span className="text-xs text-slate-600">•</span>
            <span className="text-xs text-slate-400">{transaction.date}</span>
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <p className={`font-bold ${isIncome ? 'text-green-400' : 'text-white'}`}>
          {isIncome ? '+' : ''}{transaction.amount < 0 ? '-' : ''}$
          {Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-xs text-slate-400 mt-1">{transaction.time}</p>
      </div>
    </motion.div>
  )
}

export default TransactionItem
