"use client"

import { useState } from "react"
import type { LinkScanResult } from "@/lib/link-scanner"
import { logLinkScanResults } from "@/lib/actions/link-scan-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ExternalLink } from "lucide-react"

interface LinkScanResultsProps {
  result: LinkScanResult
  onClose: () => void
}

export function LinkScanResults({ result, onClose }: LinkScanResultsProps) {
  const [verifiedBrokenLinks, setVerifiedBrokenLinks] = useState<any[]>([])
  const [isVerifying, setIsVerifying] = useState(false)

  const handleVerifyLinks = async () => {
    setIsVerifying(true)
    try {
      const verified = await logLinkScanResults(result)
      setVerifiedBrokenLinks(verified)
    } catch (error) {
      console.error("Error verifying links:", error)
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-auto">
        <CardHeader>
          <CardTitle>Link Scan Results</CardTitle>
          <CardDescription>
            Found {result.unlinkedElements.length} unlinked elements and {result.brokenLinks.length} potential broken
            links
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="unlinked">
            <TabsList className="mb-4">
              <TabsTrigger value="unlinked">
                Unlinked Elements{" "}
                <Badge variant="outline" className="ml-2">
                  {result.unlinkedElements.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="broken">
                Potential Broken Links{" "}
                <Badge variant="outline" className="ml-2">
                  {result.brokenLinks.length}
                </Badge>
              </TabsTrigger>
              {verifiedBrokenLinks.length > 0 && (
                <TabsTrigger value="verified">
                  Verified Broken Links{" "}
                  <Badge variant="outline" className="ml-2">
                    {verifiedBrokenLinks.length}
                  </Badge>
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="unlinked" className="space-y-4">
              {result.unlinkedElements.length === 0 ? (
                <p className="text-muted-foreground">No unlinked elements found.</p>
              ) : (
                <div className="space-y-4">
                  {result.unlinkedElements.map((item, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{item.text}</p>
                          <p className="text-sm text-muted-foreground">Location: {item.location}</p>
                        </div>
                        <Badge variant="outline" className="bg-primary/10">
                          Suggested: {item.suggestedLink}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="broken" className="space-y-4">
              {result.brokenLinks.length === 0 ? (
                <p className="text-muted-foreground">No potential broken links found.</p>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      These links need to be verified server-side to confirm if they're broken.
                    </p>
                    <Button onClick={handleVerifyLinks} disabled={isVerifying} size="sm">
                      {isVerifying ? "Verifying..." : "Verify Links"}
                    </Button>
                  </div>

                  {result.brokenLinks.map((item, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{item.text || "[No Text]"}</p>
                          <p className="text-sm text-muted-foreground">Location: {item.location}</p>
                        </div>
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500">
                          {item.href}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            {verifiedBrokenLinks.length > 0 && (
              <TabsContent value="verified" className="space-y-4">
                <div className="space-y-4">
                  {verifiedBrokenLinks.map((item, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{item.text || "[No Text]"}</p>
                          <p className="text-sm text-muted-foreground">Location: {item.location}</p>
                          <div className="flex items-center mt-2">
                            <AlertCircle className="h-4 w-4 text-red-500 mr-1" />
                            <p className="text-sm text-red-500">Missing page: {item.href}</p>
                          </div>
                          <div className="flex items-center mt-1">
                            <ExternalLink className="h-4 w-4 text-primary mr-1" />
                            <p className="text-sm">Fallback: {item.fallbackPage}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-red-500/10 text-red-500">
                          Broken Link
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-xs text-muted-foreground">
            Scan completed at {new Date(result.timestamp).toLocaleString()}
          </p>
          <Button onClick={onClose}>Close</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
