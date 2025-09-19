export function calculateGrowthRate(current: number | null, previous: number | null): number | null {
  if (!current || !previous || previous === 0) return null;
  return ((current - previous) / Math.abs(previous)) * 100;
}

export function calculateMargin(profit: number | null, revenue: number | null): number | null {
  if (!profit || !revenue || revenue === 0) return null;
  return (profit / revenue) * 100;
}

export function calculateDebtRatio(debt: number | null, equity: number | null): number | null {
  if (!debt || !equity || equity === 0) return null;
  return debt / Math.abs(equity);
}

export function formatCurrency(amount: number | null, currency: string = 'NOK'): string {
  if (amount === null) return '-';
  
  return new Intl.NumberFormat('nb-NO', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercentage(value: number | null, decimals: number = 1): string {
  if (value === null) return '-';
  return `${value.toFixed(decimals)}%`;
}

export function getFinancialHealthScore(
  revenue: number | null,
  growth: number | null,
  profit: number | null,
  debtRatio: number | null
): number | null {
  if (!revenue) return null;
  
  let score = 50; // Base score
  
  // Revenue size (0-20 points)
  if (revenue > 100_000_000) score += 20;
  else if (revenue > 50_000_000) score += 15;
  else if (revenue > 10_000_000) score += 10;
  else if (revenue > 1_000_000) score += 5;
  
  // Growth rate (0-30 points)
  if (growth !== null) {
    if (growth > 50) score += 30;
    else if (growth > 25) score += 25;
    else if (growth > 15) score += 20;
    else if (growth > 10) score += 15;
    else if (growth > 5) score += 10;
    else if (growth > 0) score += 5;
    else if (growth < -10) score -= 10;
  }
  
  // Profitability (0-30 points)
  if (profit !== null) {
    const margin = calculateMargin(profit, revenue);
    if (margin !== null) {
      if (margin > 20) score += 30;
      else if (margin > 15) score += 25;
      else if (margin > 10) score += 20;
      else if (margin > 5) score += 15;
      else if (margin > 0) score += 10;
      else score -= 15;
    }
  }
  
  // Debt ratio (-20 to 0 points)
  if (debtRatio !== null) {
    if (debtRatio < 0.3) score += 0;
    else if (debtRatio < 0.5) score -= 5;
    else if (debtRatio < 1) score -= 10;
    else score -= 20;
  }
  
  return Math.min(Math.max(score, 0), 100);
}