import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Key, Layers, Lock, Search, Users } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function DocsPage() {
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
              <Link href="/docs" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
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
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
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
      <div className="grid flex-1 md:grid-cols-[250px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-4">
              <nav className="grid items-start px-4 text-sm font-medium">
                <div className="pb-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Getting Started</h4>
                  <Link
                    href="/docs/introduction"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/docs/quickstart"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Quickstart
                  </Link>
                  <Link
                    href="/docs/authentication"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Authentication
                  </Link>
                </div>
                <div className="pb-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">APIs</h4>
                  <Link
                    href="/docs/mention-api"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Mention API
                  </Link>
                  <Link
                    href="/docs/horizon-api"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Horizon API
                  </Link>
                  <Link
                    href="/docs/faircoin-api"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    FairCoin API
                  </Link>
                  <Link
                    href="/docs/homiio-api"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Homiio API
                  </Link>
                </div>
                <div className="pb-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">SDKs</h4>
                  <Link
                    href="/docs/javascript-sdk"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    JavaScript
                  </Link>
                  <Link
                    href="/docs/python-sdk"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Python
                  </Link>
                  <Link
                    href="/docs/ruby-sdk"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Ruby
                  </Link>
                </div>
                <div className="pb-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Guides</h4>
                  <Link
                    href="/docs/best-practices"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Best Practices
                  </Link>
                  <Link
                    href="/docs/error-handling"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Error Handling
                  </Link>
                  <Link
                    href="/docs/rate-limits"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Rate Limits
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-2xl">Documentation</h1>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Learn the basics of the Oxy ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2 text-sm">
                      <li>
                        <Link href="/docs/introduction" className="text-primary hover:underline">
                          Introduction to Oxy
                        </Link>
                      </li>
                      <li>
                        <Link href="/docs/quickstart" className="text-primary hover:underline">
                          Quickstart Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/docs/authentication" className="text-primary hover:underline">
                          Authentication
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>API References</CardTitle>
                    <CardDescription>Detailed documentation for all Oxy APIs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2 text-sm">
                      <li>
                        <Link href="/docs/mention-api" className="text-primary hover:underline">
                          Mention API
                        </Link>
                      </li>
                      <li>
                        <Link href="/docs/horizon-api" className="text-primary hover:underline">
                          Horizon API
                        </Link>
                      </li>
                      <li>
                        <Link href="/docs/faircoin-api" className="text-primary hover:underline">
                          FairCoin API
                        </Link>
                      </li>
                      <li>
                        <Link href="/docs/homiio-api" className="text-primary hover:underline">
                          Homiio API
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <Tabs defaultValue="mention" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="mention">Mention</TabsTrigger>
                  <TabsTrigger value="horizon">Horizon</TabsTrigger>
                  <TabsTrigger value="faircoin">FairCoin</TabsTrigger>
                  <TabsTrigger value="homiio">Homiio</TabsTrigger>
                </TabsList>
                <TabsContent value="mention" className="space-y-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>Mention API</CardTitle>
                        <CardDescription>Social network focused on privacy and freedom of expression</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <p className="text-sm text-muted-foreground">
                          The Mention API allows developers to integrate with our privacy-focused social network. Build
                          features that respect user privacy while enabling meaningful connections.
                        </p>
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
                        <div className="flex justify-end">
                          <Link href="/docs/mention-api">
                            <Button variant="outline" className="gap-1.5">
                              View Documentation
                              <ArrowRight className="h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="horizon" className="space-y-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Layers className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>Horizon API</CardTitle>
                        <CardDescription>Community and governance system for essential services</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <p className="text-sm text-muted-foreground">
                          The Horizon API provides access to our community governance system. Build applications that
                          connect users with essential services and democratic decision-making processes.
                        </p>
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
                        <div className="flex justify-end">
                          <Link href="/docs/horizon-api">
                            <Button variant="outline" className="gap-1.5">
                              View Documentation
                              <ArrowRight className="h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="faircoin" className="space-y-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Lock className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>FairCoin API</CardTitle>
                        <CardDescription>Sustainable cryptocurrency with low energy consumption</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <p className="text-sm text-muted-foreground">
                          The FairCoin API enables integration with our sustainable cryptocurrency. Build financial
                          applications that prioritize environmental responsibility and equitable access.
                        </p>
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
                        <div className="flex justify-end">
                          <Link href="/docs/faircoin-api">
                            <Button variant="outline" className="gap-1.5">
                              View Documentation
                              <ArrowRight className="h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="homiio" className="space-y-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Key className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle>Homiio API</CardTitle>
                        <CardDescription>Platform offering affordable housing solutions</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <p className="text-sm text-muted-foreground">
                          The Homiio API connects developers with our affordable housing platform. Build applications
                          that help make housing accessible and equitable for all.
                        </p>
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
                        <div className="flex justify-end">
                          <Link href="/docs/homiio-api">
                            <Button variant="outline" className="gap-1.5">
                              View Documentation
                              <ArrowRight className="h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

