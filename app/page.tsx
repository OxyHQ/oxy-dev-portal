import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Key, Layers, Lock, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded-full" />
              <span className="inline-block font-bold">Oxy Developers</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/docs"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Documentation
              </Link>
              <Link
                href="/apis"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                APIs
              </Link>
              <Link
                href="/sdks"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                SDKs
              </Link>
              <Link
                href="/community"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Community
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Get API Keys</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Build with Oxy</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Integrate with our ecosystem of applications and services designed to build a more equitable,
                    connected, and sustainable future.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/docs/getting-started">
                    <Button size="lg" className="gap-1.5">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button size="lg" variant="outline">
                      Explore the Docs
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                  <div className="grid gap-4">
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Mention</h3>
                        <p className="text-sm text-muted-foreground">
                          Social network focused on privacy and freedom of expression
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Layers className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Horizon</h3>
                        <p className="text-sm text-muted-foreground">
                          Community and governance system for essential services
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Lock className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">FairCoin</h3>
                        <p className="text-sm text-muted-foreground">
                          Sustainable cryptocurrency with low energy consumption
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Key className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Homiio</h3>
                        <p className="text-sm text-muted-foreground">Platform offering affordable housing solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Ecosystem</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Powerful APIs for Every Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Integrate with our suite of applications and services to build solutions that promote equity,
                  connection, and sustainability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Mention API</h3>
                      <p className="text-sm text-muted-foreground">Build social features with privacy at the core</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Horizon API</h3>
                      <p className="text-sm text-muted-foreground">Access community governance and service tools</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">FairCoin API</h3>
                      <p className="text-sm text-muted-foreground">Integrate sustainable cryptocurrency transactions</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Homiio API</h3>
                      <p className="text-sm text-muted-foreground">Connect with affordable housing solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get Started in Minutes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow our simple steps to integrate with the Oxy ecosystem.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <div className="text-xl font-bold text-primary">1</div>
                  </div>
                  <h3 className="text-xl font-bold">Create an Account</h3>
                  <p className="text-sm text-muted-foreground">Sign up for a developer account to access our APIs</p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <div className="text-xl font-bold text-primary">2</div>
                  </div>
                  <h3 className="text-xl font-bold">Generate API Keys</h3>
                  <p className="text-sm text-muted-foreground">Create and manage API keys for each service</p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <div className="text-xl font-bold text-primary">3</div>
                  </div>
                  <h3 className="text-xl font-bold">Integrate & Build</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our SDKs and documentation to build your application
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/docs/getting-started">
                <Button size="lg" className="gap-1.5">
                  Start Building
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Oxy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

