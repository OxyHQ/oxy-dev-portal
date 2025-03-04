"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

interface ApiKeyCardProps {
  title: string
  description: string
  icon: React.ReactNode
  keyValue: string
  createdAt: string
}

export function ApiKeyCard({ title, description, icon, keyValue, createdAt }: ApiKeyCardProps) {
  const [showKey, setShowKey] = useState(false)

  const toggleShowKey = () => {
    setShowKey(!showKey)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(keyValue)
    toast({
      title: "API Key copied",
      description: "The API key has been copied to your clipboard.",
    })
  }

  const maskedKey =
    keyValue.substring(0, 10) + "•".repeat(keyValue.length - 14) + keyValue.substring(keyValue.length - 4)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">{icon}</div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="text-sm font-medium">API Key</div>
          <div className="flex items-center gap-2 rounded-md border bg-muted/50 p-2 text-sm font-mono">
            {showKey ? keyValue : maskedKey}
            <Button variant="ghost" size="icon" className="ml-auto h-8 w-8" onClick={toggleShowKey}>
              {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span className="sr-only">{showKey ? "Hide" : "Show"} API key</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy API key</span>
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">Created {createdAt}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Regenerate
        </Button>
        <Button variant="destructive" size="sm">
          Revoke
        </Button>
      </CardFooter>
    </Card>
  )
}

