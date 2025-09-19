"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  ArrowLeft,
  Download, 
  Filter,
  Search,
  TrendingUp,
  TrendingDown,
  Building2,
  DollarSign,
  BarChart3,
  ExternalLink,
  ArrowUpDown,
  CheckCircle
} from "lucide-react";
import { formatCurrency, formatPercentage, calculateGrowthRate } from "@/utils/financial";

// Mock data - replace with actual API data
const mockResults = [
  {
    orgnr: "987654321",
    name: "TechFlow AS",
    revenue: 45000000,
    revenue_prev_year: 34000000,
    profit: 8100000,
    total_assets: 52000000,
    total_debt: 15000000,
    equity: 37000000,
    industry: "Software Development",
    location: "Oslo",
    categories: ["B2B", "Software Development", "Cloud Services", "Digital Transformation"],
    description: "TechFlow delivers cutting-edge software solutions for enterprise clients, specializing in cloud-based applications and digital transformation services. The company has built a strong reputation in the Nordic market with its innovative approach to business automation and system integration.",
    website: "https://techflow.no",
    founded_year: 2018,
    employee_count: 42
  },
  {
    orgnr: "876543210", 
    name: "Nordic Solutions",
    revenue: 78000000,
    revenue_prev_year: 66000000,
    profit: 12480000,
    total_assets: 89000000,
    total_debt: 23000000,
    equity: 66000000,
    industry: "Business Services", 
    location: "Bergen",
    categories: ["B2B", "Business Consulting", "Process Optimization", "Management Advisory"],
    description: "Nordic Solutions provides comprehensive business consulting services to mid-market companies across Scandinavia. Their expertise in process optimization and strategic planning has helped over 200 companies improve operational efficiency and drive sustainable growth.",
    website: "https://nordicsolutions.no",
    founded_year: 2015,
    employee_count: 68
  },
  {
    orgnr: "765432109",
    name: "Green Energy Co",
    revenue: 120000000,
    revenue_prev_year: 96000000,
    profit: 18000000,
    total_assets: 145000000,
    total_debt: 45000000,
    equity: 100000000,
    industry: "Renewable Energy",
    location: "Stavanger",
    categories: ["B2B", "Renewable Energy", "Solar Solutions", "Energy Storage", "Sustainability"],
    description: "Green Energy Co is a leading provider of renewable energy solutions, specializing in solar installations and energy storage systems for commercial and industrial clients. The company has rapidly expanded across Norway and is now entering the broader European market.",
    website: "https://greenenergy.no",
    founded_year: 2019,
    employee_count: 95
  },
  {
    orgnr: "654321098",
    name: "Digital Marketing AS", 
    revenue: 32000000,
    revenue_prev_year: 24000000,
    profit: 4800000,
    total_assets: 28000000,
    total_debt: 8000000,
    equity: 20000000,
    industry: "Marketing Services",
    location: "Trondheim",
    categories: ["B2B", "Digital Marketing", "Performance Marketing", "Marketing Automation"],
    description: "Digital Marketing AS offers comprehensive digital marketing services including performance marketing, SEO, and marketing automation platforms. The agency has built strong partnerships with over 150 B2B companies, helping them achieve measurable growth through data-driven marketing strategies.",
    website: "https://digitalmarketing.no",
    founded_year: 2017,
    employee_count: 28
  },
  {
    orgnr: "543210987",
    name: "FinTech Innovation",
    revenue: 56000000,
    revenue_prev_year: 42000000, 
    profit: 11200000,
    total_assets: 67000000,
    total_debt: 18000000,
    equity: 49000000,
    industry: "Financial Technology",
    location: "Oslo",
    categories: ["B2B", "FinTech", "Payment Solutions", "API Integration", "Financial Services"],
    description: "FinTech Innovation develops advanced payment solutions and financial APIs for banks and financial institutions across Europe. Their white-label payment platform processes millions of transactions monthly and provides seamless integration capabilities for enterprise clients.",
    website: "https://fintech-innovation.no",
    founded_year: 2016,
    employee_count: 78
  }
];

export default function ResultsPage({ params }: { params: { id: string } }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("revenue");
  const [sortDirection, setSortDirection] = useState("desc");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isExporting, setIsExporting] = useState(false);

  // Process and sort results
  const processedResults = mockResults.map((company, index) => ({
    ...company,
    revenue_growth: calculateGrowthRate(company.revenue, company.revenue_prev_year),
    profit_margin: ((company.profit / company.revenue) * 100),
    debt_ratio: company.total_debt / company.equity,
    health_score: Math.round(75 + (index * 3)) // Deterministic score based on index
  }));

  const filteredResults = processedResults
    .filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.orgnr.includes(searchTerm);
      const matchesIndustry = industryFilter === "all" || company.industry === industryFilter;
      const matchesCategory = categoryFilter === "all" || company.categories.includes(categoryFilter);
      return matchesSearch && matchesIndustry && matchesCategory;
    })
    .sort((a, b) => {
      const aValue = a[sortField as keyof typeof a] as number;
      const bValue = b[sortField as keyof typeof b] as number;
      return sortDirection === "desc" ? bValue - aValue : aValue - bValue;
    });

  const handleExport = async (format: "csv" | "excel" | "pdf") => {
    setIsExporting(true);
    
    // Mock export - replace with actual export logic
    setTimeout(() => {
      setIsExporting(false);
      // Simulate download
      console.log(`Exporting ${filteredResults.length} companies as ${format}`);
    }, 2000);
  };

  const industries = Array.from(new Set(mockResults.map(c => c.industry)));
  const allCategories = Array.from(new Set(mockResults.flatMap(c => c.categories)));

  return (
    <div className="p-8 space-y-6">
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
            <h1 className="text-2xl font-bold">Search Results</h1>
            <p className="text-muted-foreground">
              Companies with 20%+ revenue growth • {filteredResults.length} results
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-2">
            <CheckCircle className="w-3 h-3" />
            Query Complete
          </Badge>
          
          <Select onValueChange={handleExport} disabled={isExporting}>
            <SelectTrigger className="w-32">
              <Download className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Export" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="csv">Export CSV</SelectItem>
              <SelectItem value="excel">Export Excel</SelectItem>
              <SelectItem value="pdf">Export PDF</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search companies by name or org number..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {allCategories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={`${sortField}-${sortDirection}`} onValueChange={(value) => {
              const [field, direction] = value.split('-');
              setSortField(field);
              setSortDirection(direction);
            }}>
              <SelectTrigger className="w-48">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revenue-desc">Revenue (High to Low)</SelectItem>
                <SelectItem value="revenue-asc">Revenue (Low to High)</SelectItem>
                <SelectItem value="revenue_growth-desc">Growth (High to Low)</SelectItem>
                <SelectItem value="revenue_growth-asc">Growth (Low to High)</SelectItem>
                <SelectItem value="profit_margin-desc">Margin (High to Low)</SelectItem>
                <SelectItem value="health_score-desc">Health Score (Best First)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Companies Found ({filteredResults.length})
            </span>
            <Badge variant="secondary">
              Free Plan: Top 20 results
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-medium">Company</TableHead>
                  <TableHead className="text-right">Revenue (2024)</TableHead>
                  <TableHead className="text-right">Growth</TableHead>
                  <TableHead className="text-right">Profit Margin</TableHead>
                  <TableHead className="text-right">Health Score</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResults.slice(0, 20).map((company, index) => (
                  <TableRow key={company.orgnr} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <Link 
                          href={`/dashboard/company/${company.orgnr}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {company.name}
                        </Link>
                        <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <span>{company.orgnr}</span>
                          <span>•</span>
                          <span>{company.location}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">
                            {company.industry}
                          </Badge>
                          {company.categories.slice(0, 3).map(category => (
                            <Badge key={category} variant="secondary" className="text-xs">
                              {category}
                            </Badge>
                          ))}
                          {company.categories.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{company.categories.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-medium">
                        {formatCurrency(company.revenue)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {formatCurrency(company.revenue_prev_year)} (2023)
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className={`flex items-center justify-end gap-1 font-medium ${
                        (company.revenue_growth || 0) > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {(company.revenue_growth || 0) > 0 ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {formatPercentage(company.revenue_growth)}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-medium">
                        {formatPercentage(company.profit_margin)}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="font-medium">{company.health_score}/100</div>
                        <div className={`w-2 h-2 rounded-full ${
                          company.health_score >= 80 ? 'bg-green-500' :
                          company.health_score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ExternalLink className="w-3 h-3" />
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredResults.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Building2 className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No companies match your current filters</p>
              <Button 
                variant="link" 
                className="mt-2"
                onClick={() => {
                  setSearchTerm("");
                  setIndustryFilter("all");
                  setCategoryFilter("all");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{filteredResults.length}</div>
                <div className="text-sm text-muted-foreground">Companies Found</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">+32%</div>
                <div className="text-sm text-muted-foreground">Avg Growth</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">65M</div>
                <div className="text-sm text-muted-foreground">Avg Revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">78</div>
                <div className="text-sm text-muted-foreground">Avg Health Score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Status */}
      {isExporting && (
        <Card className="border-primary bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              <span className="font-medium">Preparing your export...</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}