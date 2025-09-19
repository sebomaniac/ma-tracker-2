"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Filter,
  TrendingUp,
  Building2,
  DollarSign,
  Calendar,
  ArrowLeft,
  Play,
  Tags
} from "lucide-react";

export default function QueryPage() {
  const [query, setQuery] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [revenueMin, setRevenueMin] = useState("");
  const [revenueMax, setRevenueMax] = useState("");
  const [growthMin, setGrowthMin] = useState("");
  const [profitMarginMin, setProfitMarginMin] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const availableCategories = [
    "B2B", "B2C", "SaaS", "Software Development", "Cloud Services", "Digital Transformation",
    "Business Consulting", "Process Optimization", "Management Advisory", "Renewable Energy",
    "Solar Solutions", "Energy Storage", "Sustainability", "Digital Marketing", "Performance Marketing",
    "Marketing Automation", "FinTech", "Payment Solutions", "API Integration", "Financial Services",
    "E-commerce", "Manufacturing", "Healthcare", "Education", "Real Estate", "Logistics", "Food & Beverage"
  ];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const exampleQueries = [
    "Companies with 20% revenue growth from 2023-2024",
    "Profitable tech companies under 50M NOK revenue", 
    "High-growth SaaS companies with low debt",
    "Cash-rich companies ready for acquisition",
    "Distressed companies with valuable assets",
    "Family businesses with succession opportunities"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    // Mock search - replace with actual API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to results page
      window.location.href = "/dashboard/results/mock-id";
    }, 2000);
  };

  const handleExampleClick = (example: string) => {
    setQuery(example);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Find Companies</h1>
            <p className="text-muted-foreground">
              Use natural language to search through Norwegian company financials
            </p>
          </div>
        </div>
        
        <Badge variant="outline" className="gap-2">
          <Calendar className="w-3 h-3" />
          2024 Data Available
        </Badge>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Query Builder */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Describe What You're Looking For
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Use natural language to describe your ideal acquisition or investment target
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="query" className="text-base">Your Search Query</Label>
                  <div className="relative">
                    <Textarea
                      id="query"
                      placeholder="Example: Find profitable companies with 15%+ revenue growth that have less than 100M NOK in revenue..."
                      className="min-h-[120px] resize-none pr-12"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                      {query.length}/500
                    </div>
                  </div>
                </div>

                {/* Advanced Filters */}
                <div className="space-y-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Advanced Filters
                    {showAdvanced ? (
                      <ChevronUp className="w-4 h-4 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-2" />
                    )}
                  </Button>

                  {showAdvanced && (
                    <Card>
                      <CardContent className="pt-6 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Revenue Range */}
                          <div className="space-y-3">
                            <Label className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4" />
                              Revenue Range (NOK)
                            </Label>
                            <div className="flex gap-2">
                              <Input
                                placeholder="Min (e.g., 1M)"
                                value={revenueMin}
                                onChange={(e) => setRevenueMin(e.target.value)}
                              />
                              <span className="flex items-center text-muted-foreground">to</span>
                              <Input
                                placeholder="Max (e.g., 100M)"
                                value={revenueMax}
                                onChange={(e) => setRevenueMax(e.target.value)}
                              />
                            </div>
                          </div>

                          {/* Growth Rate */}
                          <div className="space-y-3">
                            <Label className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4" />
                              Minimum Growth Rate
                            </Label>
                            <Select value={growthMin} onValueChange={setGrowthMin}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select minimum growth" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0">Any growth</SelectItem>
                                <SelectItem value="5">5%+</SelectItem>
                                <SelectItem value="10">10%+</SelectItem>
                                <SelectItem value="15">15%+</SelectItem>
                                <SelectItem value="20">20%+</SelectItem>
                                <SelectItem value="25">25%+</SelectItem>
                                <SelectItem value="50">50%+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Profit Margin */}
                          <div className="space-y-3">
                            <Label>Minimum Profit Margin</Label>
                            <Select value={profitMarginMin} onValueChange={setProfitMarginMin}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select minimum margin" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0">Any margin</SelectItem>
                                <SelectItem value="5">5%+</SelectItem>
                                <SelectItem value="10">10%+</SelectItem>
                                <SelectItem value="15">15%+</SelectItem>
                                <SelectItem value="20">20%+</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Company Size */}
                          <div className="space-y-3">
                            <Label className="flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              Company Size
                            </Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Any size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="micro">Micro (&lt;1M NOK)</SelectItem>
                                <SelectItem value="small">Small (1-10M NOK)</SelectItem>
                                <SelectItem value="medium">Medium (10-100M NOK)</SelectItem>
                                <SelectItem value="large">Large (100M+ NOK)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Categories */}
                        <div className="space-y-3 md:col-span-2">
                          <Label className="flex items-center gap-2">
                            <Tags className="w-4 h-4" />
                            Company Categories
                          </Label>
                          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-3 border rounded-md bg-background">
                            {availableCategories.map(category => (
                              <button
                                key={category}
                                type="button"
                                onClick={() => handleCategoryToggle(category)}
                                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                                  selectedCategories.includes(category)
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                }`}
                              >
                                {category}
                              </button>
                            ))}
                          </div>
                          {selectedCategories.length > 0 && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>Selected: {selectedCategories.length} categories</span>
                              <button
                                type="button"
                                onClick={() => setSelectedCategories([])}
                                className="text-primary hover:underline"
                              >
                                Clear all
                              </button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Query Preview */}
                {query && (
                  <Card className="bg-accent/5">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <Label className="text-sm font-medium">Search Preview</Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Looking for companies matching: "{query}"
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Estimated results: 15-45 companies
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Submit Button */}
                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={!query.trim() || isLoading}
                    className="flex-1 gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4" />
                        Find Companies
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg"
                    onClick={() => setQuery("")}
                    disabled={!query}
                  >
                    Clear
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with Examples */}
        <div className="space-y-6">
          {/* Example Queries */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Example Searches</CardTitle>
              <p className="text-sm text-muted-foreground">
                Click any example to use it as a starting point
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {exampleQueries.map((example, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full text-left justify-start h-auto p-3 whitespace-normal"
                  onClick={() => handleExampleClick(example)}
                >
                  <div className="flex items-start gap-2">
                    <Play className="w-3 h-3 mt-1 flex-shrink-0" />
                    <span className="text-sm">{example}</span>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Search Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="space-y-2">
                <p className="font-medium">Be specific about metrics:</p>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>• "15% revenue growth"</li>
                  <li>• "Profit margin above 10%"</li>
                  <li>• "Debt-to-equity under 0.5"</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium">Include business context:</p>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>• Industry or sector</li>
                  <li>• Company size preferences</li>
                  <li>• Geographic focus</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Usage Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Monthly Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Searches used</span>
                  <span>1 of 3</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-1/3"></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Upgrade to Pro for 25 searches/month
                </p>
                <Link href="/pricing">
                  <Button variant="outline" size="sm" className="w-full">
                    Upgrade Plan
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}