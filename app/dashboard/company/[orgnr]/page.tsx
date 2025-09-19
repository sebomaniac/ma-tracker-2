"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  ExternalLink,
  Building2,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  Globe
} from "lucide-react";
import { formatCurrency, formatPercentage, calculateGrowthRate } from "@/utils/financial";

// Mock company data - replace with actual API data
const mockCompanyData = {
  "987654321": {
    orgnr: "987654321",
    name: "TechFlow AS",
    revenue: 45000000,
    revenue_prev_year: 34000000,
    profit: 8100000,
    profit_prev_year: 6200000,
    total_assets: 52000000,
    total_debt: 15000000,
    equity: 37000000,
    equity_prev_year: 31000000,
    industry: "Software Development",
    location: "Oslo",
    categories: ["B2B", "Software Development", "Cloud Services", "Digital Transformation"],
    description: "TechFlow delivers cutting-edge software solutions for enterprise clients, specializing in cloud-based applications and digital transformation services. The company has built a strong reputation in the Nordic market with its innovative approach to business automation and system integration.",
    website: "https://techflow.no",
    founded_year: 2018,
    employee_count: 42,
    financial_details: {
      resultatregnskap: [
        { category: "Salgsinntekt", value_year: 45000000, value_prev_year: 34000000, note: "Hovedinntekt fra software-løsninger" },
        { category: "Varekostnad", value_year: -8000000, value_prev_year: -6800000, note: "Direkte kostnader knyttet til leveranser" },
        { category: "Lønnskostnad", value_year: -18500000, value_prev_year: -14200000, note: "Lønn og sosiale kostnader" },
        { category: "Avskrivning på driftsmidler", value_year: -2800000, value_prev_year: -2400000, note: "IT-utstyr og software" },
        { category: "Annen driftskostnad", value_year: -7600000, value_prev_year: -6400000, note: "Kontorlokaler, markedsføring og øvrige driftskostnader" },
        { category: "Driftsresultat", value_year: 8100000, value_prev_year: 4200000, note: "Resultat før finansposter" },
        { category: "Finansinntekt", value_year: 320000, value_prev_year: 180000, note: "Renteinntekter og utbytte" },
        { category: "Finanskostnad", value_year: -450000, value_prev_year: -380000, note: "Rentekostnader og bankkostnader" },
        { category: "Ordinært resultat før skattekostnad", value_year: 7970000, value_prev_year: 4000000, note: "Resultat før skatt" },
        { category: "Skattekostnad på ordinært resultat", value_year: -1750000, value_prev_year: -880000, note: "22% selskapsskatt" },
        { category: "Årsresultat", value_year: 6220000, value_prev_year: 3120000, note: "Netto resultat etter skatt" }
      ],
      balanse: [
        { category: "Anleggsmidler", subcategory: "Immaterielle eiendeler", value_year: 2800000, value_prev_year: 3200000, note: "Programvare og lisenser" },
        { category: "Anleggsmidler", subcategory: "Varige driftsmidler", value_year: 4600000, value_prev_year: 5200000, note: "Kontorutstyr og IT-infrastruktur" },
        { category: "Anleggsmidler", subcategory: "Finansielle anleggsmidler", value_year: 1800000, value_prev_year: 1500000, note: "Langsiktige investeringer" },
        { category: "Omløpsmidler", subcategory: "Varer", value_year: 1200000, value_prev_year: 900000, note: "Software og hardware på lager" },
        { category: "Omløpsmidler", subcategory: "Fordringer", value_year: 12400000, value_prev_year: 9800000, note: "Kundefordringer og andre fordringer" },
        { category: "Omløpsmidler", subcategory: "Bankinnskudd og kontanter", value_year: 29200000, value_prev_year: 24400000, note: "Likviditet" },
        { category: "Egenkapital", subcategory: "Innskutt egenkapital", value_year: 5000000, value_prev_year: 5000000, note: "Aksjekapital og overkurs" },
        { category: "Egenkapital", subcategory: "Opptjent egenkapital", value_year: 32000000, value_prev_year: 26000000, note: "Akkumulert overskudd" },
        { category: "Gjeld", subcategory: "Avsetninger for forpliktelser", value_year: 2200000, value_prev_year: 1800000, note: "Pensjonsforpliktelser og garantier" },
        { category: "Gjeld", subcategory: "Annen langsiktig gjeld", value_year: 6800000, value_prev_year: 8200000, note: "Banklån og andre langsiktige lån" },
        { category: "Gjeld", subcategory: "Kortsiktig gjeld", value_year: 6000000, value_prev_year: 4000000, note: "Leverandørgjeld og påløpte kostnader" }
      ]
    }
  }
};

export default function CompanyDetailPage({ params }: { params: { orgnr: string } }) {
  const [activeTab, setActiveTab] = useState("overview");
  
  const company = mockCompanyData[params.orgnr as keyof typeof mockCompanyData];
  
  if (!company) {
    return (
      <div className="p-8 text-center">
        <Building2 className="w-12 h-12 mx-auto mb-4 opacity-20" />
        <h1 className="text-xl font-semibold mb-2">Company not found</h1>
        <p className="text-muted-foreground mb-4">The company with organization number {params.orgnr} was not found.</p>
        <Link href="/dashboard/results/1">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Results
          </Button>
        </Link>
      </div>
    );
  }

  const revenue_growth = calculateGrowthRate(company.revenue, company.revenue_prev_year);
  const profit_growth = calculateGrowthRate(company.profit, company.profit_prev_year);
  const profit_margin = (company.profit / company.revenue) * 100;
  const debt_ratio = company.total_debt / company.equity;
  const health_score = Math.round(75 + (Math.random() * 20));

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <Link href="/dashboard/results/1">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Results
            </Button>
          </Link>
          
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">{company.name}</h1>
              {company.website && (
                <a 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {company.orgnr}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {company.location}
              </span>
              {company.founded_year && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Founded {company.founded_year}
                </span>
              )}
              {company.employee_count && (
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {company.employee_count} employees
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">{company.industry}</Badge>
              {company.categories.map(category => (
                <Badge key={category} variant="outline">{category}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Description */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground leading-relaxed">{company.description}</p>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-sm text-muted-foreground">Revenue</span>
            </div>
            <div className="text-2xl font-bold">{formatCurrency(company.revenue)}</div>
            <div className={`text-sm flex items-center gap-1 ${revenue_growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {revenue_growth > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {formatPercentage(revenue_growth)} growth
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Profit</span>
            </div>
            <div className="text-2xl font-bold">{formatCurrency(company.profit)}</div>
            <div className={`text-sm flex items-center gap-1 ${profit_growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {profit_growth > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {formatPercentage(profit_growth)} growth
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground">Profit Margin</span>
            </div>
            <div className="text-2xl font-bold">{formatPercentage(profit_margin)}</div>
            <div className="text-sm text-muted-foreground">Industry avg: 15%</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground">Debt Ratio</span>
            </div>
            <div className="text-2xl font-bold">{debt_ratio.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Debt/Equity</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground">Health Score</span>
              <div className={`w-2 h-2 rounded-full ${
                health_score >= 80 ? 'bg-green-500' :
                health_score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`} />
            </div>
            <div className="text-2xl font-bold">{health_score}/100</div>
            <div className="text-sm text-muted-foreground">
              {health_score >= 80 ? 'Excellent' : health_score >= 60 ? 'Good' : 'Needs attention'}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2 border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("income")}
            className={`py-2 border-b-2 transition-colors ${
              activeTab === "income"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Income Statement
          </button>
          <button
            onClick={() => setActiveTab("balance")}
            className={`py-2 border-b-2 transition-colors ${
              activeTab === "balance"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Balance Sheet
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Assets</span>
                <span className="font-medium">{formatCurrency(company.total_assets)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span>Total Debt</span>
                <span className="font-medium">{formatCurrency(company.total_debt)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span>Equity</span>
                <span className="font-medium">{formatCurrency(company.equity)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span>Revenue (2024)</span>
                <span className="font-medium">{formatCurrency(company.revenue)}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span>Profit (2024)</span>
                <span className="font-medium">{formatCurrency(company.profit)}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <span className="text-sm font-medium">Industry</span>
                <p>{company.industry}</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <span className="text-sm font-medium">Categories</span>
                <div className="flex flex-wrap gap-2">
                  {company.categories.map(category => (
                    <Badge key={category} variant="outline">{category}</Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <span className="text-sm font-medium">Website</span>
                {company.website ? (
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <Globe className="w-4 h-4" />
                    {company.website}
                  </a>
                ) : (
                  <p className="text-muted-foreground">Not available</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "income" && (
        <Card>
          <CardHeader>
            <CardTitle>Income Statement (Resultatregnskap)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {company.financial_details.resultatregnskap.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start py-2">
                    <div className="flex-1">
                      <div className="font-medium">{item.category}</div>
                      {item.note && <div className="text-sm text-muted-foreground mt-1">{item.note}</div>}
                    </div>
                    <div className="text-right space-y-1">
                      <div className={`font-medium ${
                        item.value_year && item.value_year < 0 ? 'text-red-600' : ''
                      }`}>
                        {formatCurrency(item.value_year || 0)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatCurrency(item.value_prev_year || 0)} (2023)
                      </div>
                    </div>
                  </div>
                  {index < company.financial_details.resultatregnskap.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "balance" && (
        <Card>
          <CardHeader>
            <CardTitle>Balance Sheet (Balanse)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {["Anleggsmidler", "Omløpsmidler", "Egenkapital", "Gjeld"].map(mainCategory => (
                <div key={mainCategory}>
                  <h3 className="font-semibold text-lg mb-3 text-primary">{mainCategory}</h3>
                  <div className="space-y-2">
                    {company.financial_details.balanse
                      .filter(item => item.category === mainCategory)
                      .map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-start py-2">
                            <div className="flex-1">
                              <div className="font-medium">{item.subcategory}</div>
                              {item.note && <div className="text-sm text-muted-foreground mt-1">{item.note}</div>}
                            </div>
                            <div className="text-right space-y-1">
                              <div className="font-medium">{formatCurrency(item.value_year || 0)}</div>
                              <div className="text-sm text-muted-foreground">
                                {formatCurrency(item.value_prev_year || 0)} (2023)
                              </div>
                            </div>
                          </div>
                          {index < company.financial_details.balanse.filter(i => i.category === mainCategory).length - 1 && 
                            <Separator />
                          }
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}