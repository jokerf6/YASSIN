import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MobileNav } from "@/components/mobile-nav";

export default function GalleryPage() {
  const categories = [
    { id: "all", name: "All Works" },
    { id: "palestine", name: "Palestine" },
    { id: "egypt", name: "Egypt" },
    { id: "portraits", name: "Portraits" },
  ];

  const artworks = [
    {
      id: 1,
      title: "Palestinian Hope",
      category: "palestine",
      image: "/placeholder.svg?height=600&width=500",
      slug: "palestinian-hope",
    },
    {
      id: 2,
      title: "Rural Egyptian Life",
      category: "egypt",
      image: "/placeholder.svg?height=600&width=500",
      slug: "rural-egyptian-life",
    },
    {
      id: 3,
      title: "Portrait of Resilience",
      category: "portraits",
      image: "/placeholder.svg?height=600&width=500",
      slug: "portrait-of-resilience",
    },
    {
      id: 4,
      title: "Gaza Sunrise",
      category: "palestine",
      image: "/placeholder.svg?height=600&width=500",
      slug: "gaza-sunrise",
    },
    {
      id: 5,
      title: "Nile Fisherman",
      category: "egypt",
      image: "/placeholder.svg?height=600&width=500",
      slug: "nile-fisherman",
    },
    {
      id: 6,
      title: "The Elder",
      category: "portraits",
      image: "/placeholder.svg?height=600&width=500",
      slug: "the-elder",
    },
    {
      id: 7,
      title: "Olive Harvest",
      category: "palestine",
      image: "/placeholder.svg?height=600&width=500",
      slug: "olive-harvest",
    },
    {
      id: 8,
      title: "Cairo Streets",
      category: "egypt",
      image: "/placeholder.svg?height=600&width=500",
      slug: "cairo-streets",
    },
    {
      id: 9,
      title: "Mother's Gaze",
      category: "portraits",
      image: "/placeholder.svg?height=600&width=500",
      slug: "mothers-gaze",
    },
  ];

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
          <h1 className="text-5xl font-black mb-2 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              Gallery
            </span>
          </h1>
          <p className="text-lg text-white/70 mb-12 max-w-3xl">
            Explore Yassin's artwork collection, showcasing his unique blend of
            hyper-realistic portraiture with cultural and political themes.
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-12 bg-white/5 border border-white/10 p-1 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-600 data-[state=active]:to-violet-600 data-[state=active]:text-white rounded-full"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {artworks
                    .filter(
                      (artwork) =>
                        category.id === "all" ||
                        artwork.category === category.id
                    )
                    .map((artwork) => (
                      <Link key={artwork.id} href={`/gallery/${artwork.slug}`}>
                        <div className="group relative">
                          <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                            <Image
                              src={artwork.image || "/placeholder.svg"}
                              alt={artwork.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="text-xl font-bold text-white">
                                {artwork.title}
                              </h3>
                              <p className="text-sm font-medium text-fuchsia-400 mt-1 capitalize">
                                {artwork.category}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
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
