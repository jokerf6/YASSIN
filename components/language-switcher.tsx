"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("English")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-white hover:text-fuchsia-400">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Globe className="h-4 w-4" />
          </motion.div>
          <span className="hidden md:inline">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/90 backdrop-blur-lg border border-white/10">
        <DropdownMenuItem
          onClick={() => setLanguage("English")}
          className="text-white hover:text-fuchsia-400 focus:text-fuchsia-400 focus:bg-white/10"
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("العربية")}
          className="text-white hover:text-fuchsia-400 focus:text-fuchsia-400 focus:bg-white/10"
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
