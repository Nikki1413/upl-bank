import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Lock, Smartphone, Wallet } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your money is protected with 256-bit encryption and multi-factor authentication",
      color: "cyan"
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Send and receive money instantly to anyone, anywhere in the world",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Smart Investing",
      description: "Grow your wealth with AI-powered investment recommendations",
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Complete banking experience in your pocket with our mobile app",
      color: "pink"
    }
  ]
  
  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl gradient-text">UPLBank</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#security" className="text-slate-300 hover:text-white transition-colors">Security</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <Link to="/dashboard" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 gradient-bg">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mb-8">
                <Lock className="h-4 w-4 text-cyan-400" />
                <span className="text-sm text-slate-300">Secured by 256-bit encryption</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Banking for the
                <span className="block gradient-text mt-2">Digital Age</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience the future of banking with instant transfers, smart investments, 
                and unparalleled security—all in one beautiful platform.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/dashboard"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all inline-flex items-center space-x-2"
                >
                  <span>Open Free Account</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="px-8 py-4 glass-effect border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-all inline-flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-12 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>2M+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span>$10B+ Transacted</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative glass-effect border border-white/20 rounded-3xl p-2 max-w-5xl mx-auto">
              <div className="bg-slate-900/50 rounded-2xl p-8 backdrop-blur-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">Total Balance</p>
                    <h3 className="text-2xl font-bold text-white mt-1">$24,567.89</h3>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">This Month</p>
                    <h3 className="text-2xl font-bold text-white mt-1">+$5,420</h3>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">Investments</p>
                    <h3 className="text-2xl font-bold text-white mt-1">$12,104</h3>
                  </div>
                </div>
                <div className="h-48 bg-slate-800/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-cyan-400 mx-auto mb-2" />
                    <p className="text-slate-400">Interactive Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Everything you need in
              <span className="gradient-text"> one place</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful features that make managing your money effortless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const colorClasses = {
                cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400',
                purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400',
                blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
                pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400'
              }
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group bg-gradient-to-br ${colorClasses[feature.color]} border backdrop-blur-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`${colorClasses[feature.color]} mb-4 inline-block p-3 rounded-xl`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Ready to take control of
              <span className="gradient-text block mt-2">your finances?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Join millions of users who trust UPLBank for their financial future
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all group"
            >
              <span>Start Banking Today</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl gradient-text">UPLBank</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 UPLBank. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
