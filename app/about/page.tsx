import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import RootLayout from "../layout";

export default function AboutPage() {
  return (
    <div className="flex flex-col  bg-black text-white">
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
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors text-fuchsia-400"
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
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>
      <main className="flex-1 pt-24">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-black mb-8 tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                About Yassin
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-16 mb-24">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
                  <Image
                    src="/art/art4.jpg"
                    alt="Yassin in his studio"
                    width={600}
                    height={800}
                    className="rounded-2xl shadow-2xl object-cover relative z-10 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                  The Artist
                </h2>
                <p className="text-lg mb-4 text-white/70">
                  Yassin is a young, talented Egyptian painter whose work has
                  gained recognition for its powerful blend of hyper-realistic
                  portraiture with deep cultural and political themes.
                </p>
                <p className="text-lg mb-4 text-white/70">
                  Born and raised in Egypt, Yassin developed a passion for art
                  at an early age, drawing inspiration from the rich cultural
                  heritage of his homeland and the complex socio-political
                  landscape of the Middle East.
                </p>
                <p className="text-lg mb-4 text-white/70">
                  His work is particularly focused on Palestinian resistance,
                  rural Egyptian life, and emotional human expressions that
                  capture the depth of human experience in the region.
                </p>
                <div className="flex gap-4 mt-8">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0"
                  >
                    <Link href="/gallery">View Artwork</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 bg-black/50 hover:bg-white/10"
                  >
                    <Link href="/contact">Contact Yassin</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mb-24 relative">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-fuchsia-700 rounded-full blur-3xl opacity-10"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-700 rounded-full blur-3xl opacity-10"></div>
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                Artistic Journey
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-fuchsia-500/50 transition-colors">
                  <h3 className="text-xl font-medium mb-3 text-fuchsia-400">
                    Early Beginnings
                  </h3>
                  <p className="text-white/70">
                    Yassin began his artistic journey by sketching scenes from
                    his neighborhood and portraits of family members. His
                    natural talent for capturing likeness and emotion was
                    evident from the start.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                  <h3 className="text-xl font-medium mb-3 text-cyan-400">
                    Formal Education
                  </h3>
                  <p className="text-white/70">
                    After completing his formal art education, Yassin developed
                    his distinctive style that combines technical precision with
                    emotional depth, allowing his portraits to tell powerful
                    stories.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-violet-500/50 transition-colors">
                  <h3 className="text-xl font-medium mb-3 text-violet-400">
                    Social Media Recognition
                  </h3>
                  <p className="text-white/70">
                    Yassin's work gained significant attention on TikTok and
                    Instagram, where his time-lapse videos of creating
                    hyper-realistic portraits captivated audiences worldwide.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-colors">
                  <h3 className="text-xl font-medium mb-3 text-pink-400">
                    Current Focus
                  </h3>
                  <p className="text-white/70">
                    Today, Yassin's work explores themes of identity,
                    resistance, and cultural heritage, using his art as a
                    powerful medium for storytelling and advocacy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                Artistic Mission
              </h2>
              <div className="bg-gradient-to-br from-fuchsia-900/30 to-cyan-900/30 p-12 rounded-2xl border border-white/10">
                <blockquote className="text-2xl italic text-white mb-6 leading-relaxed">
                  "My art aims to capture the dignity, resilience, and humanity
                  of people whose stories often go untold. Through my
                  brushstrokes, I hope to create a bridge of understanding and
                  empathy across cultures."
                </blockquote>
                <p className="text-right font-medium text-fuchsia-400">
                  — Yassin
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                Recognition & Exhibitions
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-6 items-start">
                  <div className="p-4 rounded-full bg-gradient-to-br from-fuchsia-600 to-violet-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <path d="M12 8a2.83 2.83 0 0 0-3.17 3.17c0 .45 0 .8.17 1.17C9.5 13.9 13 17 12 17c-1 0 2.5-3.1 3-4.66.17-.37.17-.72.17-1.17A2.83 2.83 0 0 0 12 8Z" />
                      <path d="M12 8V2" />
                      <path d="m4.93 10.93-.66-.66" />
                      <path d="M20.07 11.07c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l.66-.66c.3-.3.77-.3 1.06 0 .3.3.3.77 0 1.06l-.66.66Z" />
                      <path d="M12 19v3" />
                      <path d="M18 19h-6" />
                    </svg>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex-1">
                    <h3 className="font-bold text-xl mb-2">
                      Cairo International Art Fair
                    </h3>
                    <p className="text-white/70">
                      Featured artist showcasing works on Palestinian
                      resistance, 2023
                    </p>
                  </div>
                </li>
                <li className="flex gap-6 items-start">
                  <div className="p-4 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <path d="M12 8a2.83 2.83 0 0 0-3.17 3.17c0 .45 0 .8.17 1.17C9.5 13.9 13 17 12 17c-1 0 2.5-3.1 3-4.66.17-.37.17-.72.17-1.17A2.83 2.83 0 0 0 12 8Z" />
                      <path d="M12 8V2" />
                      <path d="m4.93 10.93-.66-.66" />
                      <path d="M20.07 11.07c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l.66-.66c.3-.3.77-.3 1.06 0 .3.3.3.77 0 1.06l-.66.66Z" />
                      <path d="M12 19v3" />
                      <path d="M18 19h-6" />
                    </svg>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex-1">
                    <h3 className="font-bold text-xl mb-2">
                      Alexandria Cultural Center
                    </h3>
                    <p className="text-white/70">
                      Solo exhibition "Faces of Resilience", 2022
                    </p>
                  </div>
                </li>
                <li className="flex gap-6 items-start">
                  <div className="p-4 rounded-full bg-gradient-to-br from-violet-600 to-purple-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <path d="M12 8a2.83 2.83 0 0 0-3.17 3.17c0 .45 0 .8.17 1.17C9.5 13.9 13 17 12 17c-1 0 2.5-3.1 3-4.66.17-.37.17-.72.17-1.17A2.83 2.83 0 0 0 12 8Z" />
                      <path d="M12 8V2" />
                      <path d="m4.93 10.93-.66-.66" />
                      <path d="M20.07 11.07c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l.66-.66c.3-.3.77-.3 1.06 0 .3.3.3.77 0 1.06l-.66.66Z" />
                      <path d="M12 19v3" />
                      <path d="M18 19h-6" />
                    </svg>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex-1">
                    <h3 className="font-bold text-xl mb-2">
                      Middle East Art Collective
                    </h3>
                    <p className="text-white/70">
                      Featured in "Voices of the Region" traveling exhibition,
                      2021-2022
                    </p>
                  </div>
                </li>
              </ul>
            </div>
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
