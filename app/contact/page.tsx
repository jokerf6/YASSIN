"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  TwitterIcon as TikTok,
} from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { motion } from "framer-motion";
import { SOCIAL } from "@/utils/social";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formState);
    alert("Thank you for your message! Yassin will get back to you soon.");
    setFormState({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="flex flex-col bg-black text-white">
      <header className="fixed w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500"
          >
            YASSIN
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/shop"
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors text-fuchsia-400"
            >
              Contact
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1 pt-24">
        <div className="container py-12">
          <h1 className="text-5xl font-black mb-2 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              Contact Yassin
            </span>
          </h1>
          <p className="text-lg text-white/70 mb-12 max-w-3xl">
            Get in touch for commissions, inquiries, or collaborations. Yassin
            is always open to discussing new projects and opportunities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/70">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-fuchsia-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/70">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-fuchsia-500 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/70">Subject</Label>
                  <RadioGroup
                    value={formState.subject}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="General Inquiry"
                        id="general"
                        className="border-white/30 text-fuchsia-400"
                      />
                      <Label htmlFor="general" className="text-white">
                        General Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Commission Request"
                        id="commission"
                        className="border-white/30 text-fuchsia-400"
                      />
                      <Label htmlFor="commission" className="text-white">
                        Commission Request
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Artwork Purchase"
                        id="purchase"
                        className="border-white/30 text-fuchsia-400"
                      />
                      <Label htmlFor="purchase" className="text-white">
                        Artwork Purchase
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="Collaboration"
                        id="collaboration"
                        className="border-white/30 text-fuchsia-400"
                      />
                      <Label htmlFor="collaboration" className="text-white">
                        Collaboration
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/70">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-white/5 border-white/10 focus:border-fuchsia-500 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-fuchsia-500/20 text-fuchsia-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Email</h3>
                      <p className="text-white/60">contact@yassindraw.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Phone</h3>
                      <p className="text-white/60">+20 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-violet-500/20 text-violet-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">
                        Studio Location
                      </h3>
                      <p className="text-white/60">Cairo, Egypt</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                  Follow Yassin
                </h2>
                <div className="space-y-4">
                  {SOCIAL.map((social, i) => (
                    <Link
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center   gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="p-5 rounded-full relative bg-gradient-to-br overflow-hidden ">
                        <Image
                          alt="social"
                          fill
                          src={social.icon}
                          className="h-4 w-4"
                        />{" "}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">
                          {social.name}
                        </h3>
                        <p className="text-white/60">@yassindraw</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Yassin's studio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center">
                  <p className="text-white text-xl font-medium">
                    Yassin's Studio in Cairo
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container text-center text-white/40">
          <p>© {new Date().getFullYear()} Yassin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
