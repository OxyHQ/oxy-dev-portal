import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Key, Layers, Lock, Search, Users } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ApisPage() {
  return (
    <div className="flex min-h-screen flex-col">
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
              <Link href="/apis" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
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
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search APIs..."
                  className="h-9 w-full rounded-md pl-8 md:w-[200px] lg:w-[300px]"
                />
              </div>
            </div>
            <nav className="flex items-center space-x-2">
              <Link href="/dashboard">
                <Button size="sm">Dashboard</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Oxy API Ecosystem</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Integrate with our suite of applications and services to build solutions that promote equity,
                  connection, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Mention API</CardTitle>
                    <CardDescription>Social network focused on privacy and freedom of expression</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Key Features:</h3>
                      <ul className="grid gap-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          User authentication with privacy controls
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Content creation and sharing
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Privacy-preserving social graph
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          End-to-end encrypted messaging
                        </li>
                      </ul>
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Popular Endpoints:</h3>
                      <ul className="grid gap-1 text-sm">
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">GET</code>
                          <span>/api/mention/users/{"{userId}"}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">POST</code>
                          <span>/api/mention/posts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">GET</code>
                          <span>/api/mention/feed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Link href="/docs/mention-api">
                    <Button variant="outline" className="gap-1.5">
                      View Documentation
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                  <Link href="/dashboard/api-keys">
                    <Button className="gap-1.5">
                      Get API Key
                      <Key className="h-3 w-3" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Layers className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Horizon API</CardTitle>
                    <CardDescription>Community and governance system for essential services</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Key Features:</h3>
                      <ul className="grid gap-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Community governance mechanisms
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Service access management
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Voting and proposal systems
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Resource allocation tools
                        </li>
                      </ul>
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Popular Endpoints:</h3>
                      <ul className="grid gap-1 text-sm">
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">GET</code>
                          <span>/api/horizon/communities/{"{communityId}"}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">POST</code>
                          <span>/api/horizon/proposals</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">POST</code>
                          <span>/api/horizon/votes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Link href="/docs/horizon-api">
                    <Button variant="outline" className="gap-1.5">
                      View Documentation
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                  <Link href="/dashboard/api-keys">
                    <Button className="gap-1.5">
                      Get API Key
                      <Key className="h-3 w-3" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Lock className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>FairCoin API</CardTitle>
                    <CardDescription>Sustainable cryptocurrency with low energy consumption</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Key Features:</h3>
                      <ul className="grid gap-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Wallet creation and management
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Transaction processing
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Energy-efficient consensus
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Smart contract integration
                        </li>
                      </ul>
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Popular Endpoints:</h3>
                      <ul className="grid gap-1 text-sm">
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">GET</code>
                          <span>/api/faircoin/wallets/{"{walletId}"}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">POST</code>
                          <span>/api/faircoin/transactions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">GET</code>
                          <span>/api/faircoin/balance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Link href="/docs/faircoin-api">
                    <Button variant="outline" className="gap-1.5">
                      View Documentation
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                  <Link href="/dashboard/api-keys">
                    <Button className="gap-1.5">
                      Get API Key
                      <Key className="h-3 w-3" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Key className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>Homiio API</CardTitle>
                    <CardDescription>Platform offering affordable housing solutions</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Key Features:</h3>
                      <ul className="grid gap-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Housing inventory management
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Application processing
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Community housing models
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Affordability calculators
                        </li>
                      </ul>
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Popular Endpoints:</h3>
                      <ul className="grid gap-1 text-sm">
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">GET</code>
                          <span>/api/homiio/listings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">POST</code>
                          <span>/api/homiio/applications</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-1 py-0.5 rounded">GET</code>
                          <span>/api/homiio/applications/{"{applicationId}"}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-6">
                  <Link href="/docs/homiio-api">
                    <Button variant="outline" className="gap-1.5">
                      View Documentation
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                  <Link href="/dashboard/api-keys">
                    <Button className="gap-1.5">
                      Get API Key
                      <Key className="h-3 w-3" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Oxy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

