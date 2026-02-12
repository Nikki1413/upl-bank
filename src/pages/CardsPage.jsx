import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import { CreditCard, Lock, Eye, EyeOff, Plus, MoreVertical, Zap, Shield } from 'lucide-react'
import { cardsData } from '../data/mockData'

const CardsPage = () => {
  const [showDetails, setShowDetails] = useState({})
  
  const toggleDetails = (cardId) => {
    setShowDetails(prev => ({ ...prev, [cardId]: !prev[cardId] }))
  }
  
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
            Your <span className="gradient-text">Cards</span>
          </h1>
          <p className="text-slate-400">Manage your cards and view transaction limits</p>
        </motion.div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity`}></div>
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${card.color} rounded-3xl p-8 h-64 flex flex-col justify-between overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>
                
                {/* Card Header */}
                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-white/70 text-sm font-medium mb-1">{card.type} Card</p>
                    <h3 className="text-white text-xl font-bold">{card.name}</h3>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <MoreVertical className="h-5 w-5 text-white" />
                  </button>
                </div>
                
                {/* Card Number */}
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-6">
                    <CreditCard className="h-8 w-8 text-white/80" />
                    <p className="text-white text-2xl font-mono tracking-wider">
                      {showDetails[card.id] ? card.cardNumber : card.cardNumber}
                    </p>
                  </div>
                  
                  {/* Card Details */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-8">
                      <div>
                        <p className="text-white/60 text-xs mb-1">VALID THRU</p>
                        <p className="text-white font-mono text-sm">
                          {showDetails[card.id] ? card.expiryDate : '••/••'}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/60 text-xs mb-1">CVV</p>
                        <p className="text-white font-mono text-sm">
                          {showDetails[card.id] ? card.cvv : '•••'}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => toggleDetails(card.id)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {showDetails[card.id] ? (
                        <EyeOff className="h-5 w-5 text-white" />
                      ) : (
                        <Eye className="h-5 w-5 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Add New Card */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-effect border-2 border-dashed border-white/20 rounded-3xl p-8 h-64 flex flex-col items-center justify-center hover:border-cyan-500/50 hover:bg-white/5 transition-all group"
          >
            <div className="p-4 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform mb-4">
              <Plus className="h-8 w-8" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Add New Card</h3>
            <p className="text-slate-400 text-sm">Request a new virtual or physical card</p>
          </motion.button>
        </div>
        
        {/* Card Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass-effect rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">{card.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  card.type === 'Credit' ? 'bg-purple-500/20 text-purple-400' : 'bg-cyan-500/20 text-cyan-400'
                }`}>
                  {card.type}
                </span>
              </div>
              
              {card.type === 'Credit' ? (
                <>
                  {/* Credit Limit Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">Available Credit</span>
                      <span className="text-sm font-medium text-white">
                        ${(card.limit - card.spent).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transition-all duration-500"
                        style={{ width: `${(card.spent / card.limit) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-slate-500">
                        Spent: ${card.spent.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                      <span className="text-xs text-slate-500">
                        Limit: ${card.limit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Balance */}
                  <div className="mb-6">
                    <p className="text-sm text-slate-400 mb-2">Available Balance</p>
                    <h2 className="text-3xl font-bold text-white">
                      ${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </h2>
                  </div>
                </>
              )}
              
              {/* Card Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                  <div className="p-2 bg-cyan-500/20 rounded-lg">
                    <Zap className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Contactless</p>
                    <p className="text-sm font-medium text-white">Enabled</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Shield className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Security</p>
                    <p className="text-sm font-medium text-white">Active</p>
                  </div>
                </div>
              </div>
              
              {/* Card Actions */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <button className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-colors">
                  Freeze
                </button>
                <button className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-colors">
                  Settings
                </button>
                <button className="px-4 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-xl text-sm font-medium text-cyan-400 transition-colors">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardsPage
