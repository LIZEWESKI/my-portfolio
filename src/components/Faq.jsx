import React from 'react'
import { motion } from "framer-motion"
import { faq } from '../data/faq'
const Faq = () => {
  return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto"
        >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Commonly Asked Questions</h3>
              <p className="text-muted-foreground">Quick answers to common questions</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {faq.map(faq => (
                    <div className="bg-card/50 border border-border/40 rounded-xl p-6">
                        <h4 className="font-bold mb-2">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">
                        {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
  )
}

export default Faq