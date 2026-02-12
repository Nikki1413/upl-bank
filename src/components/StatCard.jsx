import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ title, value, change, icon: Icon, color = "cyan", delay = 0 }) => {
  const isPositive = change >= 0
  
  const colorClasses = {
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30'
  }
  
  const iconColorClasses = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    pink: 'text-pink-400'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-xl p-6 group hover:scale-105 transition-transform duration-300`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white mb-2">{value}</h3>
          <div className="flex items-center space-x-1">
            <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(change)}%
            </span>
            <span className="text-xs text-slate-500">vs last month</span>
          </div>
        </div>
        
        <div className={`${iconColorClasses[color]} opacity-20 group-hover:opacity-30 transition-opacity`}>
          <Icon className="h-12 w-12" />
        </div>
      </div>
      
      {/* Animated glow effect */}
      <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${colorClasses[color]} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
    </motion.div>
  )
}

export default StatCard
