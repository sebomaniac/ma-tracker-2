import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Check, ArrowLeft, Zap, Crown } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">M&A Tracker</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the plan that fits your M&A research needs. Start free, upgrade as you grow.
          </p>
          
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Check className="w-4 h-4 text-primary" />
            <span>No setup fees</span>
            <span>•</span>
            <Check className="w-4 h-4 text-primary" />
            <span>Cancel anytime</span>
            <span>•</span>
            <Check className="w-4 h-4 text-primary" />
            <span>Real-time data</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Free Plan */}
          <Card className="relative border-2 border-muted">
            <CardHeader className="pb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-xl">Free</CardTitle>
                  <p className="text-sm text-muted-foreground">Perfect for testing the waters</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold">kr 0</div>
                <p className="text-sm text-muted-foreground">Forever free</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">3 searches per month</div>
                    <div className="text-sm text-muted-foreground">Find companies with AI-powered queries</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Top 20 results per search</div>
                    <div className="text-sm text-muted-foreground">Most relevant matches for your criteria</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Basic CSV export</div>
                    <div className="text-sm text-muted-foreground">Company list with key financial metrics</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Financial health scores</div>
                    <div className="text-sm text-muted-foreground">M&A suitability indicators</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">2024 financial data</div>
                    <div className="text-sm text-muted-foreground">Latest Norwegian company financials</div>
                  </div>
                </div>
              </div>
              
              <Link href="/auth/signup" className="block">
                <Button variant="outline" className="w-full">
                  Get Started Free
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-2 border-primary shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-4">
                Most Popular
              </Badge>
            </div>
            
            <CardHeader className="pb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Crown className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Pro</CardTitle>
                  <p className="text-sm text-muted-foreground">For serious M&A professionals</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold">kr 499</div>
                <p className="text-sm text-muted-foreground">per month, billed monthly</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">25 searches per month</div>
                    <div className="text-sm text-muted-foreground">8x more than free plan</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Top 20 results per search</div>
                    <div className="text-sm text-muted-foreground">Premium quality matches</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Advanced export options</div>
                    <div className="text-sm text-muted-foreground">CSV, Excel, and PDF reports</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Detailed financial analysis</div>
                    <div className="text-sm text-muted-foreground">Full income statements & balance sheets</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Advanced filters & sorting</div>
                    <div className="text-sm text-muted-foreground">Industry, size, growth, profitability</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Search history & templates</div>
                    <div className="text-sm text-muted-foreground">Save and reuse your best queries</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Priority support</div>
                    <div className="text-sm text-muted-foreground">Email support within 24 hours</div>
                  </div>
                </div>
              </div>
              
              <Link href="/auth/signup" className="block">
                <Button className="w-full">
                  Start Pro Trial
                </Button>
              </Link>
              
              <p className="text-xs text-center text-muted-foreground">
                14-day free trial, then kr 499/month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">What data sources do you use?</h3>
              <p className="text-sm text-muted-foreground">
                We use official Norwegian company financial data from public filings, updated regularly through BigQuery. 
                This includes income statements, balance sheets, and calculated financial ratios for comprehensive analysis.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Can I cancel my subscription anytime?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, you can cancel your Pro subscription at any time. You'll continue to have access to Pro features 
                until the end of your current billing period, then you'll automatically switch to the free plan.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">How current is the financial data?</h3>
              <p className="text-sm text-muted-foreground">
                Our data includes the latest available financial reports, typically including 2024 data where filed. 
                We update our database regularly to ensure you have access to the most recent company information.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">What file formats are available for export?</h3>
              <p className="text-sm text-muted-foreground">
                Free users get basic CSV exports. Pro users can export as CSV, Excel (with multiple sheets and formatting), 
                and PDF reports including executive summaries and financial analysis.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium">Do you offer enterprise plans?</h3>
              <p className="text-sm text-muted-foreground">
                We're working on enterprise features including team collaboration, custom reports, and API access. 
                Contact us if you're interested in discussing enterprise needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-4">Ready to start finding deals?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join M&A professionals who use our platform to discover opportunities faster than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="px-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}