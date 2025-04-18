import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MobileNav } from "@/components/mobile-nav";

export default function ShopPage() {
  const artworks = [
    {
      id: 1,
      title: "Palestinian Hope",
      price: 1200,
      status: "For Sale",
      image: "/placeholder.svg?height=600&width=500",
      slug: "palestinian-hope",
      category: "palestine",
    },
    {
      id: 2,
      title: "Rural Egyptian Life",
      price: 950,
      status: "For Sale",
      image: "/placeholder.svg?height=600&width=500",
      slug: "rural-egyptian-life",
      category: "egypt",
    },
    {
      id: 3,
      title: "Portrait of Resilience",
      price: 1500,
      status: "Auction",
      image: "/placeholder.svg?height=600&width=500",
      slug: "portrait-of-resilience",
      category: "portraits",
      auctionEnds: "2023-12-31",
      currentBid: 1200,
    },
    {
      id: 4,
      title: "Gaza Sunrise",
      price: 1100,
      status: "For Sale",
      image: "/placeholder.svg?height=600&width=500",
      slug: "gaza-sunrise",
      category: "palestine",
    },
    {
      id: 5,
      title: "Nile Fisherman",
      price: 850,
      status: "For Sale",
      image: "/placeholder.svg?height=600&width=500",
      slug: "nile-fisherman",
      category: "egypt",
    },
    {
      id: 6,
      title: "The Elder",
      price: 1800,
      status: "Auction",
      image: "/placeholder.svg?height=600&width=500",
      slug: "the-elder",
      category: "portraits",
      auctionEnds: "2023-12-15",
      currentBid: 1500,
    },
  ];

  return (
    <div className="flex flex-col  bg-black  text-white">
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
              className="font-medium text-sm hover:text-fuchsia-400 transition-colors text-fuchsia-400"
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
          <h1 className="text-5xl font-black mb-2 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              Shop Artwork
            </span>
          </h1>
          <p className="text-lg text-white/70 mb-12 max-w-3xl">
            Browse and purchase original artwork by Yassin. Each piece is unique
            and comes with a certificate of authenticity.
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-12 bg-white/5 border border-white/10 p-1 rounded-full">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-violet-600 data-[state=active]:text-white rounded-full"
              >
                All Artwork
              </TabsTrigger>
              <TabsTrigger
                value="for-sale"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-violet-600 data-[state=active]:text-white rounded-full"
              >
                For Sale
              </TabsTrigger>
              <TabsTrigger
                value="auction"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-violet-600 data-[state=active]:text-white rounded-full"
              >
                Auction
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artworks.map((artwork) => (
                  <div key={artwork.id} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                      <div className="relative aspect-[4/5]">
                        <Image
                          src={artwork.image || "/placeholder.svg"}
                          alt={artwork.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge
                            className={
                              artwork.status === "Auction"
                                ? "bg-gradient-to-r from-fuchsia-600 to-violet-600 border-0"
                                : "bg-gradient-to-r from-emerald-600 to-cyan-600 border-0"
                            }
                          >
                            {artwork.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {artwork.title}
                        </h3>
                        <p className="text-sm font-medium text-fuchsia-400 mb-4 capitalize">
                          {artwork.category}
                        </p>

                        {artwork.status === "Auction" ? (
                          <div className="mb-4">
                            <p className="text-sm text-white/50">Current Bid</p>
                            <p className="text-2xl font-bold">
                              ${artwork.currentBid}
                            </p>
                            <p className="text-sm text-white/50 mt-1">
                              Auction ends: {new Date().toLocaleDateString()}
                            </p>
                          </div>
                        ) : (
                          <div className="mb-4">
                            <p className="text-sm text-white/50">Price</p>
                            <p className="text-2xl font-bold">
                              ${artwork.price}
                            </p>
                          </div>
                        )}

                        <div className="flex gap-4">
                          {artwork.status === "Auction" ? (
                            <Button className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0">
                              Place Bid
                            </Button>
                          ) : (
                            <Button className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0">
                              Buy Now
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            className="w-full border-white/20 bg-black/50 hover:bg-white/10"
                            asChild
                          >
                            <Link href={`/gallery/${artwork.slug}`}>
                              Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="for-sale" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artworks
                  .filter((artwork) => artwork.status === "For Sale")
                  .map((artwork) => (
                    <div key={artwork.id} className="group relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                      <div className="relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={artwork.image || "/placeholder.svg"}
                            alt={artwork.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-gradient-to-r from-emerald-600 to-cyan-600 border-0">
                              For Sale
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">
                            {artwork.title}
                          </h3>
                          <p className="text-sm font-medium text-fuchsia-400 mb-4 capitalize">
                            {artwork.category}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm text-white/50">Price</p>
                            <p className="text-2xl font-bold">
                              ${artwork.price}
                            </p>
                          </div>

                          <div className="flex gap-4">
                            <Button className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0">
                              Buy Now
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full border-white/20 bg-black/50 hover:bg-white/10"
                              asChild
                            >
                              <Link href={`/gallery/${artwork.slug}`}>
                                Details
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="auction" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artworks
                  .filter((artwork) => artwork.status === "Auction")
                  .map((artwork) => (
                    <div key={artwork.id} className="group relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                      <div className="relative bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={artwork.image || "/placeholder.svg"}
                            alt={artwork.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-gradient-to-r from-fuchsia-600 to-violet-600 border-0">
                              Auction
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">
                            {artwork.title}
                          </h3>
                          <p className="text-sm font-medium text-fuchsia-400 mb-4 capitalize">
                            {artwork.category}
                          </p>

                          <div className="mb-4">
                            <p className="text-sm text-white/50">Current Bid</p>
                            <p className="text-2xl font-bold">
                              ${artwork.currentBid}
                            </p>
                            <p className="text-sm text-white/50 mt-1">
                              Auction ends: {new Date().toLocaleDateString()}
                            </p>
                          </div>

                          <div className="flex gap-4">
                            <Button className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 border-0">
                              Place Bid
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full border-white/20 bg-black/50 hover:bg-white/10"
                              asChild
                            >
                              <Link href={`/gallery/${artwork.slug}`}>
                                Details
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
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
