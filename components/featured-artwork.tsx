"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface FeaturedArtworkProps {
  title: string
  category: string
  imageSrc: string
  slug: string
}

export default function FeaturedArtwork({ title, category, imageSrc, slug }: FeaturedArtworkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/gallery/${slug}`}>
      <motion.div
        className="group relative"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-sm font-medium text-fuchsia-400 mb-1">{category}</div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>

          <motion.div
            className="absolute inset-0 border-2 border-white/0 rounded-xl"
            animate={{ borderColor: isHovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0)" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </Link>
  )
}
