export interface FinancialData {
  year: number;
  value_prev_year: number | null;
  value_year: number | null;
  chapter: string;
  note: string | null;
  sub_category: string;
  orgnr: string;
  doc: string;
  category: string;
  currency: string;
}

export interface Company {
  orgnr: string;
  name?: string;
  revenue: number | null;
  revenue_prev_year: number | null;
  revenue_growth?: number;
  profit: number | null;
  profit_prev_year: number | null;
  total_assets: number | null;
  total_debt: number | null;
  equity: number | null;
  industry?: string;
  location?: string;
  categories?: string[];
  description?: string;
  website?: string;
  founded_year?: number;
  employee_count?: number;
}

export interface QueryFilter {
  revenue_min?: number;
  revenue_max?: number;
  growth_min?: number;
  growth_max?: number;
  profit_margin_min?: number;
  debt_ratio_max?: number;
  industry?: string[];
  location?: string[];
}

export interface SearchQuery {
  id: string;
  user_id: string;
  query_text: string;
  filters: QueryFilter;
  result_count: number;
  created_at: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface User {
  id: string;
  email: string;
  plan: 'free' | 'pro';
  queries_used: number;
  queries_limit: number;
  created_at: string;
}

export interface ExportRequest {
  query_id: string;
  format: 'csv' | 'excel' | 'pdf';
  include_details: boolean;
}