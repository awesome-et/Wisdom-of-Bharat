import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, TrendingUp, IndianRupee } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const stats = [
  { label: 'Total Users', value: '12,458', change: '+12%', icon: <Users className="w-5 h-5" />, color: 'text-blue-500' },
  { label: 'Premium Users', value: '3,241', change: '+8%', icon: <IndianRupee className="w-5 h-5" />, color: 'text-accent' },
  { label: 'Lessons Completed', value: '89,432', change: '+24%', icon: <BookOpen className="w-5 h-5" />, color: 'text-primary' },
  { label: 'Certificates Issued', value: '4,567', change: '+15%', icon: <Award className="w-5 h-5" />, color: 'text-green-500' },
];

const monthlyUsers = [
  { month: 'Jan', users: 2100 }, { month: 'Feb', users: 3200 }, { month: 'Mar', users: 4500 },
  { month: 'Apr', users: 6100 }, { month: 'May', users: 8900 }, { month: 'Jun', users: 12458 },
];

const categoryPopularity = [
  { name: 'Ramayana', value: 28 }, { name: 'Mahabharata', value: 24 }, { name: 'Bhagavad Gita', value: 18 },
  { name: 'Panchatantra', value: 15 }, { name: 'Others', value: 15 },
];
const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

const weeklyLessons = [
  { day: 'Mon', count: 1250 }, { day: 'Tue', count: 1480 }, { day: 'Wed', count: 1320 },
  { day: 'Thu', count: 1560 }, { day: 'Fri', count: 1890 }, { day: 'Sat', count: 2100 }, { day: 'Sun', count: 1750 },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold font-serif mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="p-4 border-border/50">
              <div className="flex items-center justify-between mb-2">
                <div className={s.color}>{s.icon}</div>
                <span className="text-xs text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">{s.change}</span>
              </div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-5 border-border/50">
          <h2 className="font-serif font-bold mb-4">User Growth</h2>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyUsers}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }} />
                <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ fill: 'hsl(var(--primary))', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5 border-border/50">
          <h2 className="font-serif font-bold mb-4">Popular Categories</h2>
          <div className="h-52 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryPopularity} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name }) => name}>
                  {categoryPopularity.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5 border-border/50 lg:col-span-2">
          <h2 className="font-serif font-bold mb-4">Lessons Completed This Week</h2>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyLessons}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis hide />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }} />
                <Bar dataKey="count" fill="hsl(var(--chart-2))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
