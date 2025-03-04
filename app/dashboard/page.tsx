import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Code, Key, Lock, RefreshCw, Settings, Users, Layers } from "lucide-react"
import Link from "next/link"
import { ApiKeyCard } from "@/components/api-key-card"
import { UsageStats } from "@/components/usage-stats"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-primary rounded-full" />
              <span className="inline-block font-bold">Oxy Developers</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
              <Button variant="ghost" size="sm">
                Sign Out
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[220px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-2 text-sm font-medium">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all"
                >
                  <Code className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/api-keys"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Key className="h-4 w-4" />
                  API Keys
                </Link>
                <Link
                  href="/dashboard/usage"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <RefreshCw className="h-4 w-4" />
                  Usage
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-2xl">Dashboard</h1>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="api-keys">API Keys</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total API Calls</CardTitle>
                      <RefreshCw className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12,234</div>
                      <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active API Keys</CardTitle>
                      <Key className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4</div>
                      <p className="text-xs text-muted-foreground">Across all services</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Services Used</CardTitle>
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">Out of 4 available</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Plan</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">Developer</div>
                      <p className="text-xs text-muted-foreground">10,000 requests/month</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>API Usage</CardTitle>
                      <CardDescription>Your API usage over time</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <UsageStats />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent API Keys</CardTitle>
                      <CardDescription>Your recently created API keys</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                              <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div className="grid gap-1">
                              <p className="text-sm font-medium leading-none">Mention API</p>
                              <p className="text-sm text-muted-foreground">Created 2 days ago</p>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ArrowUpRight className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                              <Lock className="h-5 w-5 text-primary" />
                            </div>
                            <div className="grid gap-1">
                              <p className="text-sm font-medium leading-none">FairCoin API</p>
                              <p className="text-sm text-muted-foreground">Created 5 days ago</p>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ArrowUpRight className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                              <Key className="h-5 w-5 text-primary" />
                            </div>
                            <div className="grid gap-1">
                              <p className="text-sm font-medium leading-none">Homiio API</p>
                              <p className="text-sm text-muted-foreground">Created 1 week ago</p>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ArrowUpRight className="h-4 w-4" />
                                <span className="sr-only">View</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="api-keys" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                  <ApiKeyCard
                    title="Mention API"
                    description="Social network focused on privacy"
                    icon={<Users className="h-5 w-5" />}
                    keyValue="oxy_mention_1a2b3c4d5e6f7g8h9i0j"
                    createdAt="2 days ago"
                  />
                  <ApiKeyCard
                    title="Horizon API"
                    description="Community and governance system"
                    icon={<Layers className="h-5 w-5" />}
                    keyValue="oxy_horizon_1a2b3c4d5e6f7g8h9i0j"
                    createdAt="3 days ago"
                  />
                  <ApiKeyCard
                    title="FairCoin API"
                    description="Sustainable cryptocurrency"
                    icon={<Lock className="h-5 w-5" />}
                    keyValue="oxy_faircoin_1a2b3c4d5e6f7g8h9i0j"
                    createdAt="5 days ago"
                  />
                  <ApiKeyCard
                    title="Homiio API"
                    description="Affordable housing platform"
                    icon={<Key className="h-5 w-5" />}
                    keyValue="oxy_homiio_1a2b3c4d5e6f7g8h9i0j"
                    createdAt="1 week ago"
                  />
                </div>
                <div className="flex justify-end">
                  <Button>Generate New API Key</Button>
                </div>
              </TabsContent>
              <TabsContent value="usage" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>API Usage Statistics</CardTitle>
                    <CardDescription>Your API usage across all Oxy services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UsageStats />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

