import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  TrendingUp, 
  Clock, 
  Plus,
  BarChart3,
  Building2
} from "lucide-react";

export default function DashboardPage() {
  const recentQueries = [
    {
      id: "1",
      query: "Companies with 20%+ revenue growth",
      results: 47,
      date: "2 hours ago",
      status: "completed" as const
    },
    {
      id: "2", 
      query: "Profitable tech companies under 50M NOK",
      results: 23,
      date: "1 day ago",
      status: "completed" as const
    },
    {
      id: "3",
      query: "Cash-rich companies, low debt",
      results: 31,
      date: "3 days ago", 
      status: "completed" as const
    }
  ];

  const exampleCompanies = [
    {
      name: "TechFlow AS",
      orgnr: "987654321",
      revenue: "45M NOK",
      growth: "+32%",
      sector: "Software"
    },
    {
      name: "Nordic Solutions",
      orgnr: "876543210", 
      revenue: "78M NOK",
      growth: "+18%",
      sector: "Services"
    },
    {
      name: "Green Energy Co",
      orgnr: "765432109",
      revenue: "120M NOK", 
      growth: "+25%",
      sector: "Energy"
    }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Find your next M&A opportunity with AI-powered search
          </p>
        </div>
        
        <Link href="/dashboard/query">
          <Button size="lg" className="gap-2">
            <Plus className="w-4 h-4" />
            New Search
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Queries This Month</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">of 3 available</p>
            <Progress value={33} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Companies Found</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">101</div>
            <p className="text-xs text-muted-foreground">across all searches</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">+24%</div>
            <p className="text-xs text-muted-foreground">in found companies</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Plan Status</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Free</div>
            <Link href="/pricing">
              <Button variant="link" className="text-xs p-0 h-auto text-primary">
                Upgrade to Pro →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Queries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Searches
            </CardTitle>
            <Link href="/dashboard/history">
              <Button variant="ghost" size="sm">
                View all
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentQueries.map((query) => (
              <div key={query.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{query.query}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{query.results} results</span>
                    <span>•</span>
                    <span>{query.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {query.status}
                  </Badge>
                  <Link href={`/dashboard/results/${query.id}`}>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
            
            {recentQueries.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No searches yet</p>
                <Link href="/dashboard/query">
                  <Button variant="link" className="mt-2">
                    Create your first search
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sample Results Preview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Sample Companies
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              Example Data
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {exampleCompanies.map((company, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{company.name}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{company.orgnr}</span>
                    <Badge variant="outline" className="text-xs">
                      {company.sector}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{company.revenue}</p>
                  <p className="text-sm text-primary">{company.growth}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Ready to find real opportunities?
              </p>
              <Link href="/dashboard/query">
                <Button className="w-full">
                  Start Your First Search
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <p className="text-sm text-muted-foreground">
            Common search patterns used by M&A professionals
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/dashboard/query">
              <Button variant="outline" className="h-auto p-4 justify-start text-left">
                <div>
                  <div className="font-medium mb-1">High Growth Companies</div>
                  <div className="text-xs text-muted-foreground">
                    Find companies with 15%+ revenue growth
                  </div>
                </div>
              </Button>
            </Link>
            
            <Link href="/dashboard/query">
              <Button variant="outline" className="h-auto p-4 justify-start text-left">
                <div>
                  <div className="font-medium mb-1">Profitable Businesses</div>
                  <div className="text-xs text-muted-foreground">
                    Companies with healthy profit margins
                  </div>
                </div>
              </Button>
            </Link>
            
            <Link href="/dashboard/query">
              <Button variant="outline" className="h-auto p-4 justify-start text-left">
                <div>
                  <div className="font-medium mb-1">Cash-Rich Targets</div>
                  <div className="text-xs text-muted-foreground">
                    Low debt, high cash positions
                  </div>
                </div>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}