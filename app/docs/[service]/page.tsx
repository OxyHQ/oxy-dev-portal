import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Code, Copy } from "lucide-react"

export default function ApiDocPage({ params }: { params: { service: string } }) {
  const service = params.service

  // This would normally be fetched from a database or API
  const apiDetails = {
    "mention-api": {
      title: "Mention API",
      description: "Social network focused on privacy and freedom of expression",
      endpoints: [
        { name: "Get User Profile", method: "GET", path: "/api/mention/users/{userId}" },
        { name: "Create Post", method: "POST", path: "/api/mention/posts" },
        { name: "Get Feed", method: "GET", path: "/api/mention/feed" },
        { name: "Send Message", method: "POST", path: "/api/mention/messages" },
      ],
    },
    "horizon-api": {
      title: "Horizon API",
      description: "Community and governance system for essential services",
      endpoints: [
        { name: "Get Community", method: "GET", path: "/api/horizon/communities/{communityId}" },
        { name: "Create Proposal", method: "POST", path: "/api/horizon/proposals" },
        { name: "Cast Vote", method: "POST", path: "/api/horizon/votes" },
        { name: "Get Resources", method: "GET", path: "/api/horizon/resources" },
      ],
    },
    "faircoin-api": {
      title: "FairCoin API",
      description: "Sustainable cryptocurrency with low energy consumption",
      endpoints: [
        { name: "Get Wallet", method: "GET", path: "/api/faircoin/wallets/{walletId}" },
        { name: "Create Transaction", method: "POST", path: "/api/faircoin/transactions" },
        { name: "Get Balance", method: "GET", path: "/api/faircoin/balance" },
        { name: "Get Exchange Rate", method: "GET", path: "/api/faircoin/exchange-rate" },
      ],
    },
    "homiio-api": {
      title: "Homiio API",
      description: "Platform offering affordable housing solutions",
      endpoints: [
        { name: "Get Listings", method: "GET", path: "/api/homiio/listings" },
        { name: "Apply for Housing", method: "POST", path: "/api/homiio/applications" },
        { name: "Get Application Status", method: "GET", path: "/api/homiio/applications/{applicationId}" },
        { name: "Get Housing Resources", method: "GET", path: "/api/homiio/resources" },
      ],
    },
  }[service] || {
    title: "API Documentation",
    description: "Detailed documentation for Oxy APIs",
    endpoints: [],
  }

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
                <Link href="/docs" className="flex items-center gap-2 py-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Documentation
                </Link>
                <div className="py-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Endpoints</h4>
                  {apiDetails.endpoints.map((endpoint, index) => (
                    <Link
                      key={index}
                      href={`#${endpoint.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                    >
                      {endpoint.name}
                    </Link>
                  ))}
                </div>
                <div className="py-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Guides</h4>
                  <Link
                    href="#authentication"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Authentication
                  </Link>
                  <Link
                    href="#errors"
                    className="flex items-center gap-3 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-foreground"
                  >
                    Error Handling
                  </Link>
                  <Link
                    href="#rate-limits"
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
              <h1 className="font-semibold text-lg md:text-2xl">{apiDetails.title}</h1>
            </div>
            <p className="text-muted-foreground">{apiDetails.description}</p>

            <div className="grid gap-6">
              <Card id="authentication">
                <CardHeader>
                  <CardTitle>Authentication</CardTitle>
                  <CardDescription>How to authenticate with the {apiDetails.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <p className="text-sm text-muted-foreground">
                      All API requests must include your API key in the Authorization header:
                    </p>
                    <div className="relative rounded-md bg-muted p-4">
                      <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy code</span>
                      </Button>
                      <pre className="text-sm font-mono">{`Authorization: Bearer YOUR_API_KEY`}</pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="endpoints" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="sdks">SDKs</TabsTrigger>
                </TabsList>
                <TabsContent value="endpoints" className="space-y-4">
                  {apiDetails.endpoints.map((endpoint, index) => (
                    <Card key={index} id={endpoint.name.toLowerCase().replace(/\s+/g, "-")}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 text-xs font-bold rounded ${
                              endpoint.method === "GET"
                                ? "bg-blue-100 text-blue-800"
                                : endpoint.method === "POST"
                                  ? "bg-green-100 text-green-800"
                                  : endpoint.method === "PUT"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                          >
                            {endpoint.method}
                          </span>
                          {endpoint.name}
                        </CardTitle>
                        <CardDescription>{endpoint.path}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          <div>
                            <h3 className="text-sm font-medium mb-2">Request</h3>
                            <div className="relative rounded-md bg-muted p-4">
                              <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy code</span>
                              </Button>
                              <pre className="text-sm font-mono">
                                {`curl -X ${endpoint.method} \\
  ${endpoint.path} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                              </pre>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium mb-2">Response</h3>
                            <div className="relative rounded-md bg-muted p-4">
                              <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy code</span>
                              </Button>
                              <pre className="text-sm font-mono">
                                {`{
  "success": true,
  "data": {
    // Response data will appear here
  }
}`}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="examples" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Code Examples</CardTitle>
                      <CardDescription>How to use the {apiDetails.title} in different languages</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="javascript">
                        <TabsList className="mb-4">
                          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                          <TabsTrigger value="python">Python</TabsTrigger>
                          <TabsTrigger value="ruby">Ruby</TabsTrigger>
                        </TabsList>
                        <TabsContent value="javascript">
                          <div className="relative rounded-md bg-muted p-4">
                            <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy code</span>
                            </Button>
                            <pre className="text-sm font-mono">
                              {`// Using fetch API
const apiKey = 'YOUR_API_KEY';

fetch('${apiDetails.endpoints[0]?.path.replace("{userId}", "123")}', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                            </pre>
                          </div>
                        </TabsContent>
                        <TabsContent value="python">
                          <div className="relative rounded-md bg-muted p-4">
                            <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy code</span>
                            </Button>
                            <pre className="text-sm font-mono">
                              {`# Using requests library
import requests

api_key = 'YOUR_API_KEY'
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

response = requests.get('${apiDetails.endpoints[0]?.path.replace("{userId}", "123")}', headers=headers)
data = response.json()
print(data)`}
                            </pre>
                          </div>
                        </TabsContent>
                        <TabsContent value="ruby">
                          <div className="relative rounded-md bg-muted p-4">
                            <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy code</span>
                            </Button>
                            <pre className="text-sm font-mono">
                              {`# Using Net::HTTP
require 'net/http'
require 'json'
require 'uri'

api_key = 'YOUR_API_KEY'
uri = URI('${apiDetails.endpoints[0]?.path.replace("{userId}", "123")}')

request = Net::HTTP::Get.new(uri)
request['Authorization'] = "Bearer #{api_key}"
request['Content-Type'] = 'application/json'

response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end

data = JSON.parse(response.body)
puts data`}
                            </pre>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="sdks" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>SDKs</CardTitle>
                      <CardDescription>Official SDKs for the {apiDetails.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex items-center gap-4 rounded-lg border p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Code className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">JavaScript SDK</h3>
                            <p className="text-sm text-muted-foreground">
                              Official JavaScript SDK for Node.js and browser
                            </p>
                          </div>
                          <div className="ml-auto">
                            <Button variant="outline" size="sm">
                              Install
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-lg border p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Code className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Python SDK</h3>
                            <p className="text-sm text-muted-foreground">Official Python SDK</p>
                          </div>
                          <div className="ml-auto">
                            <Button variant="outline" size="sm">
                              Install
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-lg border p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Code className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Ruby SDK</h3>
                            <p className="text-sm text-muted-foreground">Official Ruby SDK</p>
                          </div>
                          <div className="ml-auto">
                            <Button variant="outline" size="sm">
                              Install
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card id="errors">
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                  <CardDescription>Common errors and how to handle them</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <p className="text-sm text-muted-foreground">
                      The API uses standard HTTP status codes to indicate the success or failure of requests.
                    </p>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                        <div className="font-medium">400</div>
                        <div>Bad Request - The request was malformed or contains invalid parameters.</div>
                      </div>
                      <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                        <div className="font-medium">401</div>
                        <div>Unauthorized - Authentication failed or API key is missing.</div>
                      </div>
                      <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                        <div className="font-medium">403</div>
                        <div>Forbidden - The API key doesn't have permission to perform the request.</div>
                      </div>
                      <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                        <div className="font-medium">404</div>
                        <div>Not Found - The requested resource doesn't exist.</div>
                      </div>
                      <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                        <div className="font-medium">429</div>
                        <div>Too Many Requests - Rate limit exceeded.</div>
                      </div>
                      <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                        <div className="font-medium">500</div>
                        <div>Internal Server Error - Something went wrong on our end.</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="rate-limits">
                <CardHeader>
                  <CardTitle>Rate Limits</CardTitle>
                  <CardDescription>Understanding API rate limits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <p className="text-sm text-muted-foreground">
                      To ensure fair usage and system stability, the API enforces rate limits on requests.
                    </p>
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Rate Limit Headers</h3>
                      <div className="grid grid-cols-[200px_1fr] gap-2 text-sm">
                        <div className="font-medium">X-RateLimit-Limit</div>
                        <div>The maximum number of requests you're permitted to make per hour.</div>
                      </div>
                      <div className="grid grid-cols-[200px_1fr] gap-2 text-sm">
                        <div className="font-medium">X-RateLimit-Remaining</div>
                        <div>The number of requests remaining in the current rate limit window.</div>
                      </div>
                      <div className="grid grid-cols-[200px_1fr] gap-2 text-sm">
                        <div className="font-medium">X-RateLimit-Reset</div>
                        <div>The time at which the current rate limit window resets in UTC epoch seconds.</div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-sm font-medium">Rate Limit Tiers</h3>
                      <div className="grid grid-cols-[150px_1fr] gap-2 text-sm">
                        <div className="font-medium">Developer</div>
                        <div>10,000 requests per hour</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] gap-2 text-sm">
                        <div className="font-medium">Business</div>
                        <div>50,000 requests per hour</div>
                      </div>
                      <div className="grid grid-cols-[150px_1fr] gap-2 text-sm">
                        <div className="font-medium">Enterprise</div>
                        <div>Custom limits based on your needs</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

