import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Heart, Share2, ShoppingCart } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";

interface ArtworkPageProps {
  params: {
    slug: string;
  };
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  // In a real application, you would fetch this data from a database or API
  // based on the slug parameter
  const artwork = {
    title: "Palestinian Hope",
    description:
      "A powerful portrayal of resilience and hope amidst struggle. This hyper-realistic portrait captures the determination in the eyes of a young Palestinian, symbolizing the enduring spirit of a people facing adversity with dignity and strength.",
    category: "Palestine",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "90 x 120 cm",
    price: 1200,
    status: "For Sale",
    image: "/placeholder.svg?height=1200&width=1000",
    detailImages: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  };

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
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors text-fuchsia-400"
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
          <Button
            variant="ghost"
            className="mb-8 pl-0 text-white hover:text-fuchsia-400 hover:bg-white/5"
            asChild
          >
            <Link href="/gallery" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {artwork.detailImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-white/10 group"
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${artwork.title} detail ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">{artwork.title}</h1>
                <p className="text-fuchsia-400 font-medium">
                  {artwork.category}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-white/70 text-lg">{artwork.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h3 className="text-sm font-medium text-white/50 mb-1">
                    Year
                  </h3>
                  <p className="text-lg">{artwork.year}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h3 className="text-sm font-medium text-white/50 mb-1">
                    Medium
                  </h3>
                  <p className="text-lg">{artwork.medium}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h3 className="text-sm font-medium text-white/50 mb-1">
                    Dimensions
                  </h3>
                  <p className="text-lg">{artwork.dimensions}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <h3 className="text-sm font-medium text-white/50 mb-1">
                    Status
                  </h3>
                  <p className="text-lg">{artwork.status}</p>
                </div>
              </div>

              <div className="border-t border-b border-white/10 py-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-sm font-medium text-white/50 mb-1">
                      Price
                    </h3>
                    <p className="text-4xl font-bold">${artwork.price}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 bg-black/50 hover:bg-white/10 h-12 w-12"
                    >
                      <Heart className="h-5 w-5" />
                      <span className="sr-only">Add to favorites</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 bg-black/50 hover:bg-white/10 h-12 w-12"
                    >
                      <Share2 className="h-5 w-5" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0 h-12">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-white/20 bg-black/50 hover:bg-white/10 h-12"
                    asChild
                  >
                    <Link href="/contact">Inquire</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                  About the Artist
                </h3>
                <p className="mb-4 text-white/70">
                  Yassin is a young, talented Egyptian painter whose work blends
                  hyper-realistic portraiture with deep cultural and political
                  themes — especially focused on Palestinian resistance, rural
                  Egyptian life, and emotional human expressions.
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-fuchsia-400 hover:text-fuchsia-300"
                  asChild
                >
                  <Link href="/about">Learn more about Yassin</Link>
                </Button>
              </div>
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
