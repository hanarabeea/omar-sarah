"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function CeremonySection() {
  const { t } = useLanguage()

  return (
    <motion.section
      className="relative py-20 px-4 md:py-32 overflow-visible"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
            {t('katbKetab')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-orange-300 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Katb Ketab Ceremony */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3">
                  {t('katbKetab')}
                </h3>
                <p className="text-xl text-pink-600 font-medium mb-4">
                  {t('katbKetabTime')}
                </p>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t('katbKetabDescription')}
              </p>
              
              <div className="flex justify-center space-x-2 text-2xl text-gray-400">
                <span>Ceremony</span>
                <span>•</span>
                <span>Union</span>
              </div>
            </div>
          </motion.div>

          {/* After Party */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-3">
                  {t('afterParty')}
                </h3>
                <p className="text-xl text-purple-300 font-medium mb-4">
                  {t('afterPartyTime')}
                </p>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('afterPartyDescription')}
              </p>
              
              <div className="flex justify-center space-x-2 text-2xl text-gray-300">
                <span>Party</span>
                <span>•</span>
                <span>Night</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-4 text-gray-500">
            <div className="h-px w-20 bg-gray-300"></div>
            <span className="text-sm uppercase tracking-wider">Timeline</span>
            <div className="h-px w-20 bg-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
