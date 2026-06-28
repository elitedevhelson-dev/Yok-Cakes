'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  label?: string
  title: string
  titleAccent?: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionTitle({
  label,
  title,
  titleAccent,
  subtitle,
  center = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mb-10 sm:mb-14',
        center && 'text-center flex flex-col items-center',
        className
      )}
    >
      {label && (
        <span className="section-label">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse-soft" />
          {label}
        </span>
      )}
      <h2 className="section-title">
        {title}{' '}
        {titleAccent && (
          <em className="gradient-text not-italic font-serif">{titleAccent}</em>
        )}
      </h2>
      {subtitle && (
        <p className={cn('section-subtitle', center && 'mx-auto text-center')}>{subtitle}</p>
      )}
    </motion.div>
  )
}
