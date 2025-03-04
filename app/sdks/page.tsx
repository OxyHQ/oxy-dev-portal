import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Copy, Download, Search, CheckCircle, HelpCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SdksPage() {
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
              <Link
                href="/apis"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                APIs
              </Link>
              <Link href="/sdks" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
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
                  placeholder="Search SDKs..."
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Oxy SDKs</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seamlessly integrate with the Oxy ecosystem using our official SDKs for your favorite programming
                  languages.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#sdks">
                  <Button size="lg">Explore SDKs</Button>
                </Link>
                <Link href="/docs/sdk-quickstart">
                  <Button variant="outline" size="lg">
                    Quick Start Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="sdks" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Choose Your SDK</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { name: "JavaScript", icon: "js", description: "For Node.js and browser applications" },
                { name: "Python", icon: "python", description: "For Python applications and scripts" },
                { name: "Ruby", icon: "ruby", description: "For Ruby applications and scripts" },
              ].map((sdk) => (
                <Card key={sdk.name} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <img src={`/icons/${sdk.icon}.svg`} alt={`${sdk.name} icon`} className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{sdk.name} SDK</CardTitle>
                      <CardDescription>{sdk.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <h3 className="text-sm font-medium">Installation</h3>
                        <div className="relative rounded-md bg-muted p-4">
                          <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy code</span>
                          </Button>
                          <pre className="text-sm font-mono">
                            {sdk.name === "JavaScript"
                              ? "npm install @oxy/sdk"
                              : sdk.name === "Python"
                                ? "pip install oxy-sdk"
                                : "gem install oxy-sdk"}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t p-6">
                    <Link href={`/docs/${sdk.name.toLowerCase()}-sdk`}>
                      <Button variant="outline" className="gap-1.5">
                        Documentation
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                    <Link href={`https://github.com/oxy/${sdk.name.toLowerCase()}-sdk`}>
                      <Button className="gap-1.5">
                        Download
                        <Download className="h-3 w-3" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">SDK Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  All our SDKs provide a consistent experience across languages with these powerful features.
                </p>
              </div>
            </div>

            <Tabs defaultValue="features" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Core Features</TabsTrigger>
                <TabsTrigger value="services">Service Coverage</TabsTrigger>
                <TabsTrigger value="examples">Code Examples</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Authentication", description: "Simple API key authentication" },
                    { title: "Error Handling", description: "Consistent error patterns" },
                    { title: "Rate Limiting", description: "Automatic rate limit handling" },
                    { title: "Type Safety", description: "Strong typing for all APIs" },
                    { title: "Pagination", description: "Simplified list handling" },
                    { title: "Logging", description: "Configurable logging" },
                  ].map((feature) => (
                    <Card key={feature.title}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="services" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Coverage</CardTitle>
                    <CardDescription>All SDKs provide access to the complete Oxy ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      {[
                        {
                          name: "Mention API",
                          features: [
                            "User management",
                            "Content creation and retrieval",
                            "Feed management",
                            "Messaging",
                          ],
                        },
                        {
                          name: "Horizon API",
                          features: [
                            "Community management",
                            "Proposal creation and voting",
                            "Resource allocation",
                            "Service access",
                          ],
                        },
                        {
                          name: "FairCoin API",
                          features: [
                            "Wallet management",
                            "Transaction processing",
                            "Balance checking",
                            "Exchange rate information",
                          ],
                        },
                        {
                          name: "Homiio API",
                          features: [
                            "Housing listings",
                            "Application processing",
                            "Status checking",
                            "Resource management",
                          ],
                        },
                      ].map((service) => (
                        <div key={service.name}>
                          <h3 className="text-lg font-medium mb-2">{service.name}</h3>
                          <ul className="grid gap-1 text-sm">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="examples" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Code Examples</CardTitle>
                    <CardDescription>Common usage patterns across our SDKs</CardDescription>
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
                          <pre className="text-sm font-mono overflow-x-auto">
                            {`import { OxyClient } from '@oxy/sdk';

const client = new OxyClient({
  apiKey: 'YOUR_API_KEY',
  timeout: 30000,
  retryOnRateLimit: true
});

async function getMentionData() {
  try {
    const user = await client.mention.getUser('user123');
    console.log('User:', user);
    
    const post = await client.mention.createPost({
      content: 'Hello from the Oxy SDK!',
      visibility: 'public'
    });
    console.log('Created post:', post);
    
    const feed = await client.mention.getFeed({
      limit: 10,
      cursor: null
    });
    console.log('Feed items:', feed.items);
    console.log('Next cursor:', feed.nextCursor);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.type === 'rate_limit_exceeded') {
      console.log('Rate limit exceeded. Retry after:', error.retryAfter);
    }
  }
}`}
                          </pre>
                        </div>
                      </TabsContent>
                      <TabsContent value="python">
                        <div className="relative rounded-md bg-muted p-4">
                          <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy code</span>
                          </Button>
                          <pre className="text-sm font-mono overflow-x-auto">
                            {`from oxy_sdk import OxyClient
from oxy_sdk.exceptions import RateLimitExceeded, ApiError

client = OxyClient(
    api_key='YOUR_API_KEY',
    timeout=30.0,
    retry_on_rate_limit=True
)

def manage_community():
    try:
        community = client.horizon.get_community('community123')
        print(f"Community: {community.name}")
        
        proposal = client.horizon.create_proposal(
            community_id='community123',
            title='New Community Initiative',
            description='A proposal to improve our community',
            options=['Approve', 'Reject', 'Abstain']
        )
        print(f"Created proposal: {proposal.id}")
        
        vote = client.horizon.cast_vote(
            proposal_id=proposal.id,
            option='Approve'
        )
        print(f"Vote recorded: {vote.id}")
        
    except RateLimitExceeded as e:
        print(f"Rate limit exceeded. Retry after: {e.retry_after} seconds")
    except ApiError as e:
        print(f"API error: {e.message} (Code: {e.code})")`}
                          </pre>
                        </div>
                      </TabsContent>
                      <TabsContent value="ruby">
                        <div className="relative rounded-md bg-muted p-4">
                          <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8">
                            <Copy className="h-4 w-4" />
                            <span className="sr-only">Copy code</span>
                          </Button>
                          <pre className="text-sm font-mono overflow-x-auto">
                            {`require 'oxy_sdk'

client = OxySdk::Client.new(
  api_key: 'YOUR_API_KEY',
  timeout: 30,
  retry_on_rate_limit: true
)

begin
  listings = client.homiio.get_listings(
    location: 'San Francisco',
    max_price: 2000,
    bedrooms: 2
  )
  puts "Found #{listings.count} listings"
  
  application = client.homiio.create_application(
    listing_id: listings.first.id,
    applicant: {
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '555-123-4567'
    },
    income_verification: true
  )
  puts "Application submitted: #{application.id}"
  
  status = client.homiio.get_application_status(
    application_id: application.id
  )
  puts "Application status: #{status.current_status}"
  
rescue OxySdk::RateLimitExceeded => e
  puts "Rate limit exceeded. Retry after: #{e.retry_after} seconds"
rescue OxySdk::ApiError => e
  puts "API error: #{e.message} (Code: #{e.code})"
end`}
                          </pre>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Get Started in 4 Easy Steps</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these steps to start using our SDKs in your projects.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Get API Keys",
                  description: "Sign up for a developer account and generate API keys for the services you need.",
                  link: "/dashboard/api-keys",
                  linkText: "Get API Keys",
                },
                {
                  title: "Install SDK",
                  description: "Install the SDK for your preferred programming language using your package manager.",
                  link: "#sdks",
                  linkText: "Choose SDK",
                },
                {
                  title: "Configure",
                  description: "Initialize the SDK with your API keys and configure options like timeouts and retries.",
                  link: "/docs/sdk-configuration",
                  linkText: "Configuration Guide",
                },
                {
                  title: "Start Building",
                  description: "Use the SDK to interact with Oxy services and build your application.",
                  link: "/docs/sdk-examples",
                  linkText: "View Examples",
                },
              ].map((step, index) => (
                <Card key={step.title} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-foreground"></div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <div className="text-xl font-bold">{index + 1}</div>
                      </div>
                      <CardTitle>{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={step.link}>
                      <Button variant="outline" className="w-full">
                        {step.linkText}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our SDKs and integration process.
                </p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "Which SDK should I choose?",
                  answer:
                    "Choose the SDK that matches your preferred programming language and development environment. We offer SDKs for JavaScript (Node.js and browser), Python, and Ruby.",
                },
                {
                  question: "Are the SDKs open-source?",
                  answer:
                    "Yes, all our SDKs are open-source and available on GitHub. You can contribute, report issues, or suggest improvements.",
                },
                {
                  question: "How often are the SDKs updated?",
                  answer:
                    "We regularly update our SDKs to ensure compatibility with the latest API changes and to add new features. Check the GitHub repositories for the most recent updates.",
                },
                {
                  question: "Can I use multiple SDKs in the same project?",
                  answer:
                    "Yes, you can use multiple SDKs if your project requires integration with different programming languages or environments.",
                },
                {
                  question: "Is there a limit to API calls using the SDKs?",
                  answer:
                    "API call limits depend on your account type and the specific API you're using. Refer to our API documentation for detailed information on rate limits.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

