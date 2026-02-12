import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, MoreVertical } from 'lucide-react'

const AccountCard = ({ account, delay = 0 }) => {
  const colorClasses = {
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorClasses[account.color]} rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-300`}></div>
      
      {/* Card */}
      <div className={`relative bg-gradient-to-br ${colorClasses[account.color]} rounded-2xl p-6 h-48 flex flex-col justify-between overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        {/* Card Header */}
        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-white/70 text-sm font-medium">{account.type} Account</p>
            <h3 className="text-white text-lg font-bold mt-1">{account.name}</h3>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <MoreVertical className="h-5 w-5 text-white" />
          </button>
        </div>
        
        {/* Card Footer */}
        <div className="relative">
          <p className="text-white/70 text-xs mb-1">Available Balance</p>
          <div className="flex items-end justify-between">
            <h2 className="text-white text-3xl font-bold">
              ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h2>
            <button className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors text-white text-sm font-medium">
              <span>Send</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <p className="text-white/60 text-xs mt-2">{account.accountNumber}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default AccountCard
