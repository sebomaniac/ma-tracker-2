import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  ArrowLeft,
  User,
  Crown,
  CreditCard,
  Bell,
  Download,
  Trash2,
  Shield,
  Eye,
  EyeOff,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-4 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 max-w-4xl">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Account Information
            </CardTitle>
            <CardDescription>
              Update your account details and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john@company.com" />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-medium">Change Password</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Billing & Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="w-5 h-5" />
              Plan & Billing
            </CardTitle>
            <CardDescription>
              Manage your subscription and usage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 border rounded-lg">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium">Free Plan</h4>
                  <Badge variant="outline">Current Plan</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  3 searches per month with basic export functionality
                </p>
              </div>
              <Link href="/pricing">
                <Button>
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade to Pro
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Current Usage</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Searches this month</span>
                  <span className="font-medium">1 of 3</span>
                </div>
                <Progress value={33} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Resets on the 1st of each month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export Preferences
            </CardTitle>
            <CardDescription>
              Set your default export settings and formats
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Default Export Format</Label>
                <Select defaultValue="csv">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV (Comma-separated)</SelectItem>
                    <SelectItem value="excel" disabled>
                      Excel (Pro only)
                    </SelectItem>
                    <SelectItem value="pdf" disabled>
                      PDF Report (Pro only)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Include in Exports</Label>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Company contact information</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Financial ratios and metrics</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Detailed financial statements</span>
                    <Badge variant="outline" className="text-xs ml-1">Pro</Badge>
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Choose what notifications you'd like to receive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Query Completion</div>
                  <div className="text-sm text-muted-foreground">
                    Get notified when your searches are complete
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Usage Alerts</div>
                  <div className="text-sm text-muted-foreground">
                    Alerts when you're close to your monthly limit
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Product Updates</div>
                  <div className="text-sm text-muted-foreground">
                    News about new features and improvements
                  </div>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Control your data and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Data Retention</div>
                  <div className="text-sm text-muted-foreground">
                    How long we keep your search history
                  </div>
                </div>
                <Select defaultValue="12">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 months</SelectItem>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Analytics Sharing</div>
                  <div className="text-sm text-muted-foreground">
                    Help improve our service with anonymized usage data
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h4 className="font-medium text-red-600">Danger Zone</h4>
              <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div className="flex-1">
                    <h5 className="font-medium text-red-900">Delete Account</h5>
                    <p className="text-sm text-red-700 mt-1">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive" size="sm" className="mt-3">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}