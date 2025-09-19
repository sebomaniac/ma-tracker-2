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
  Clock, 
  Search, 
  Filter,
  ArrowLeft,
  Play,
  Trash2,
  Download,
  CheckCircle,
  AlertCircle,
  XCircle
} from "lucide-react";

const mockHistory = [
  {
    id: "q-001",
    query: "Companies with 20%+ revenue growth from 2023-2024",
    results: 47,
    date: "2024-01-15",
    time: "14:32",
    status: "completed" as const,
    runtime: "2.3s"
  },
  {
    id: "q-002",
    query: "Profitable tech companies under 50M NOK revenue",
    results: 23, 
    date: "2024-01-14",
    time: "09:15",
    status: "completed" as const,
    runtime: "1.8s"
  },
  {
    id: "q-003",
    query: "High-growth SaaS companies with low debt ratios",
    results: 31,
    date: "2024-01-12", 
    time: "16:45",
    status: "completed" as const,
    runtime: "3.1s"
  },
  {
    id: "q-004",
    query: "Cash-rich companies ready for acquisition opportunities",
    results: 0,
    date: "2024-01-11",
    time: "11:22", 
    status: "failed" as const,
    runtime: "timeout"
  }
];

export default function HistoryPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "running":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="secondary" className="text-green-700 bg-green-50">Completed</Badge>;
      case "running":
        return <Badge variant="secondary" className="text-yellow-700 bg-yellow-50">Running</Badge>;
      case "failed":
        return <Badge variant="secondary" className="text-red-700 bg-red-50">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold">Query History</h1>
            <p className="text-muted-foreground">
              Review and manage your previous searches
            </p>
          </div>
        </div>
        
        <Link href="/dashboard/query">
          <Button className="w-full sm:w-auto">
            <Search className="w-4 h-4 mr-2" />
            New Query
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search your queries..."
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="recent">
              <SelectTrigger className="w-full sm:w-48">
                <Clock className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="results">Most Results</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Query List */}
      <div className="space-y-4">
        {mockHistory.map((query) => (
          <Card key={query.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-2">
                    {getStatusIcon(query.status)}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm lg:text-base truncate">
                        {query.query}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-1 text-xs lg:text-sm text-muted-foreground">
                        <span>{query.date} at {query.time}</span>
                        {query.status === "completed" && (
                          <>
                            <span>•</span>
                            <span>{query.results} results</span>
                          </>
                        )}
                        <span>•</span>
                        <span>{query.runtime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between lg:justify-end gap-2 pt-2 lg:pt-0 border-t lg:border-t-0">
                  {getStatusBadge(query.status)}
                  
                  <div className="flex items-center gap-2">
                    {query.status === "completed" && (
                      <Link href={`/dashboard/results/${query.id}`}>
                        <Button variant="outline" size="sm" className="text-xs">
                          <Play className="w-3 h-3 mr-1" />
                          View Results
                        </Button>
                      </Link>
                    )}
                    
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      Export
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="text-xs text-red-600 hover:text-red-700">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {mockHistory.length === 0 && (
        <Card>
          <CardContent className="pt-12 pb-12 text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-medium mb-2">No search history</h3>
            <p className="text-muted-foreground mb-4">
              Your completed queries will appear here
            </p>
            <Link href="/dashboard/query">
              <Button>
                <Search className="w-4 h-4 mr-2" />
                Create Your First Query
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Pagination */}
      {mockHistory.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <p className="text-sm text-muted-foreground">
            Showing 4 of 4 queries
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}