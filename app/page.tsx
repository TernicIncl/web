import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cpu, Server, Zap, Code } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6">
              Building the Future of
              <span className="text-primary block animate-pulse-glow">Computing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
              Ternic develops cutting-edge custom servers and proprietary CPU architecture, pushing the boundaries of
              what's possible in modern computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-pulse-glow">
                Explore Our Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* TODO: Add a documentation URL. */}
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Innovations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pioneering hardware solutions that redefine performance and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:scale-105 transition-all duration-300 animate-float">
              <CardHeader>
                <Server className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle>Custom Servers</CardTitle>
                <CardDescription>High-performance server solutions tailored for specific workloads</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/servers">
                  <Button variant="ghost" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="group hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <Cpu className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle>CPU Development</CardTitle>
                <CardDescription>Revolutionary processor designs optimized for next-gen computing</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/cpu-progress">
                  <Button variant="ghost" className="w-full">
                    View Progress <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="group hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle>Custom ISA</CardTitle>
                <CardDescription>Proprietary instruction set architecture for maximum efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/isa">
                  <Button variant="ghost" className="w-full">
                    Explore ISA <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card
              className="group hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
                <CardTitle>Performance</CardTitle>
                <CardDescription>Unmatched speed and efficiency in every component we design</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full">
                  Benchmarks <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/50 backdrop-blur-sm animate-pulse-glow">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join us in revolutionizing computing with our cutting-edge hardware solutions.
              </p>
              <Button size="lg" className="animate-pulse-glow">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
