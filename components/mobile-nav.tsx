"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80 bg-black border-white/10">
        <div className="flex flex-col gap-8 mt-12">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-2xl font-bold hover:text-fuchsia-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-2xl font-bold hover:text-fuchsia-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/gallery"
            onClick={() => setOpen(false)}
            className="text-2xl font-bold hover:text-fuchsia-400 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="text-2xl font-bold hover:text-fuchsia-400 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-2xl font-bold hover:text-fuchsia-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
