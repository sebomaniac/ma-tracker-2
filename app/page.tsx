import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, FileDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">M&A Tracker</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
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

      <main>
        <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-accent/10">
          <div className="container mx-auto max-w-4xl">
            <Badge variant="secondary" className="mb-6">
              Powered by BigQuery Financial Data
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Find Your Next M&A Opportunity
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-powered search through Norwegian company financials. Find high-growth, profitable companies perfect for acquisition or investment.
            </p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Try: 'Companies with 20% revenue growth 2023-2024'"
                  className="w-full pl-12 pr-4 py-4 text-lg border rounded-xl bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Sign up to start searching through 100,000+ Norwegian companies
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-8">
                  Start Finding Companies
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  View Pricing
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Badge variant="outline" className="text-xs">Free</Badge>
                <span>3 searches/month</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Badge variant="outline" className="text-xs">Export</Badge>
                <span>CSV & Excel downloads</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Badge variant="outline" className="text-xs">Real-time</Badge>
                <span>2024 financial data</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Turn Financial Data Into Opportunities
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stop spending hours analyzing spreadsheets. Find acquisition targets in seconds with AI-powered financial analysis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
                <p className="text-muted-foreground">
                  Natural language queries like "profitable SaaS companies" or "distressed retail opportunities"
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Financial Analysis</h3>
                <p className="text-muted-foreground">
                  Growth rates, profit margins, debt ratios, and M&A suitability scores calculated automatically
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileDown className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Export Ready</h3>
                <p className="text-muted-foreground">
                  Download detailed financial reports, company lists, or executive summaries for your team
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-accent/5">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Example Searches</h2>
              <p className="text-muted-foreground">
                See what our M&A professionals and investors are finding
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Badge className="mb-3">High Growth</Badge>
                <h4 className="font-semibold mb-2">"Companies with 25%+ revenue growth"</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Found 47 companies with strong growth trajectories, average valuation 12x revenue
                </p>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Top performer:</span>
                    <span className="text-primary">+180% growth</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average revenue:</span>
                    <span>42M NOK</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <Badge className="mb-3" variant="secondary">Profitable</Badge>
                <h4 className="font-semibold mb-2">"Profitable tech companies under 20M revenue"</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Found 23 companies with healthy margins, ready for acquisition
                </p>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Average margin:</span>
                    <span className="text-secondary">18.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Debt-to-equity:</span>
                    <span>0.3x average</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <Badge className="mb-3" variant="outline">Distressed</Badge>
                <h4 className="font-semibold mb-2">"Companies with good assets, high debt"</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Found 12 turnaround opportunities with strong underlying businesses
                </p>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Average assets:</span>
                    <span>85M NOK</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recovery potential:</span>
                    <span className="text-orange-600">High</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <Badge className="mb-3" variant="outline">Cash Rich</Badge>
                <h4 className="font-semibold mb-2">"Cash-rich companies, low debt"</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Found 31 companies with strong balance sheets and expansion capital
                </p>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Average cash:</span>
                    <span>15M NOK</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Debt ratio:</span>
                    <span className="text-primary">0.1x average</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Next Deal?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join M&A professionals already using our platform to find opportunities faster
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-8">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  See Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold">M&A Tracker</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered M&A opportunity discovery for Norwegian companies
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="#" className="hover:text-foreground">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
            © 2024 M&A Tracker. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
