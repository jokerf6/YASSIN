import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Facebook,
  Instagram,
  TwitchIcon,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ArtworkSlider from "@/components/artwork-slider";
import FeaturedArtwork from "@/components/featured-artwork";
import LanguageSwitcher from "@/components/language-switcher";
import { MobileNav } from "@/components/mobile-nav";
import RootLayout from "./layout";
import { SOCIAL } from "@/utils/social";

export default function Home() {
  return (
    <div className="flex flex-col  bg-black text-white overflow-hidden">
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
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <LanguageSwitcher /> */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 bg-black/50 hover:bg-white/10"
              asChild
            >
              <Link
                href="https://www.instagram.com/yassindraws/?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 bg-black/50 hover:bg-white/10"
              asChild
            >
              <Link
                href="https://www.tiktok.com/@yassindraw?_t=ZS-8uw9Mx3xswi&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">TikTok</span>
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section className="relative h-screen">
          <ArtworkSlider />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-4xl p-6 text-center">
              <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-lg mb-4 tracking-tighter">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                  YASSIN
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl mx-auto font-light">
                Hyper-realistic portraiture blending cultural heritage with
                contemporary expression
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0 text-white"
                >
                  <Link href="/gallery">Explore Gallery</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-black/30 text-white border-white/20 hover:bg-white/10"
                >
                  <Link href="/shop">Shop Artwork</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-fuchsia-700 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-700 rounded-full blur-3xl opacity-20"></div>
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                  About the Artist
                </h2>
                <p className="text-lg mb-6 text-white/70">
                  Yassin is a young, talented Egyptian painter whose work blends
                  hyper-realistic portraiture with deep cultural and political
                  themes — especially focused on Palestinian resistance, rural
                  Egyptian life, and emotional human expressions.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-fuchsia-400 p-0 h-auto font-medium"
                >
                  <Link href="/about" className="flex items-center">
                    Read more about Yassin
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur-xl opacity-50 -m-2"></div>
                  <Image
                    src="/art/art4.jpg"
                    alt="Yassin in his studio"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl object-cover aspect-square relative z-10 border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="container">
            <h2 className="text-5xl font-black mb-2 text-center tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                Featured Artwork
              </span>
            </h2>
            <p className="text-lg text-white/70 mb-16 text-center max-w-2xl mx-auto">
              Explore Yassin's most celebrated pieces that capture the essence
              of his artistic vision
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:mt-16">
                <FeaturedArtwork
                  title="Palestinian Hope"
                  category="Palestine"
                  imageSrc="/art/art5.jpg"
                  slug="palestinian-hope"
                />
              </div>
              <div className="md:-mt-8">
                <FeaturedArtwork
                  title="Rural Egyptian Life"
                  category="Egypt"
                  imageSrc="/art/art6.jpg"
                  slug="rural-egyptian-life"
                />
              </div>
              <div className="md:mt-16">
                <FeaturedArtwork
                  title="Portrait of Resilience"
                  category="Portraits"
                  imageSrc="/art/art7.jpg"
                  slug="portrait-of-resilience"
                />
              </div>
            </div>
            <div className="text-center mt-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0"
              >
                <Link href="/gallery">View All Artwork</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 to-cyan-900/30"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Commission Your Own Artwork
              </h2>
              <p className="text-lg mb-8 text-white/70">
                Interested in a custom piece? Yassin creates personalized
                artwork that captures your vision and emotions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0"
              >
                <Link href="/contact">Request a Commission</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                YASSIN
              </h3>
              <p className="text-white/60">
                Egyptian fine artist blending hyper-realistic portraiture with
                cultural and political themes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/gallery"
                    className="text-white/60 hover:text-fuchsia-400 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="text-white/60 hover:text-fuchsia-400 transition-colors"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/60 hover:text-fuchsia-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/60 hover:text-fuchsia-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                {SOCIAL.map((social, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="icon"
                    className="rounded-full px-4 border-white/20 bg-black/50 hover:bg-white/10"
                    asChild
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      className="relative  overflow-hidden"
                      rel="noopener noreferrer"
                    >
                      <Image
                        alt="social"
                        fill
                        src={social.icon}
                        className="h-4 w-4"
                      />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </Button>
                ))}

                <p className="mt-4 text-white/60">
                  Follow Yassin's journey on social media
                </p>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40">
              <p>© {new Date().getFullYear()} Yassin. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
