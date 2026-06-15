import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { sampleLessons, wisdomPaths, weeklyProgress, achievements, levels } from '@/lib/mock-data';
import { useAuth } from '@/lib/auth';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Flame, BookOpen, Clock, Award, TrendingUp, ArrowRight, Zap } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

const currentXP = 350;
const currentLevel = levels.find(l => currentXP >= l.min && currentXP < l.max) || levels[2];
const levelProgress = ((currentXP - currentLevel.min) / (currentLevel.max - currentLevel.min)) * 100;

export default function Dashboard() {
  const { user } = useAuth();
  const displayName = user?.firstName || user?.email?.split('@')[0] || 'Learner';

  const stats = [
    { label: 'Day Streak', value: '12', icon: <Flame className="w-5 h-5" />, color: 'text-orange-500' },
    { label: 'Lessons Done', value: '28', icon: <BookOpen className="w-5 h-5" />, color: 'text-primary' },
    { label: 'Hours Learned', value: '14.5', icon: <Clock className="w-5 h-5" />, color: 'text-blue-500' },
    { label: 'Certificates', value: '3', icon: <Award className="w-5 h-5" />, color: 'text-accent' },
  ];

  const recommended = wisdomPaths.slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div {...fadeUp} className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-serif mb-1">Welcome back, {displayName}! 👋</h1>
        <p className="text-muted-foreground">Continue your journey of wisdom and growth.</p>
      </motion.div>

      {/* Level card */}
      <motion.div {...fadeUp} transition={{ delay: 0.05 }}>
        <Card className="p-5 mb-6 border-border/50 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-center gap-4">
            <div className="text-3xl">{currentLevel.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif font-bold">{currentLevel.name}</span>
                <Badge variant="secondary" className="text-xs">{currentXP} XP</Badge>
              </div>
              <Progress value={levelProgress} className="h-2.5" />
              <p className="text-xs text-muted-foreground mt-1">{currentLevel.max - currentXP} XP to next level</p>
            </div>
            <Zap className="w-5 h-5 text-accent" />
          </div>
        </Card>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} {...fadeUp} transition={{ delay: 0.1 + i * 0.05 }}>
            <Card className="p-4 border-border/50">
              <div className={`${s.color} mb-2`}>{s.icon}</div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning */}
          <Card className="p-5 border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif font-bold text-lg">Continue Learning</h2>
              <Link to="/library"><Button variant="ghost" size="sm">See all <ArrowRight className="w-3 h-3 ml-1" /></Button></Link>
            </div>
            <div className="space-y-3">
              {sampleLessons.filter(l => !l.completed).slice(0, 3).map(lesson => (
                <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl shrink-0">{lesson.thumbnail}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground">{lesson.category} · {lesson.duration}</p>
                  </div>
                  <Badge variant="outline" className="text-xs shrink-0">{lesson.difficulty}</Badge>
                </Link>
              ))}
            </div>
          </Card>

          {/* Weekly Progress */}
          <Card className="p-5 border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <h2 className="font-serif font-bold text-lg">Weekly Progress</h2>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyProgress}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis hide />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid hsl(var(--border))' }} />
                  <Bar dataKey="minutes" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recommended Paths */}
          <Card className="p-5 border-border/50">
            <h2 className="font-serif font-bold text-lg mb-4">Recommended Paths</h2>
            <div className="space-y-3">
              {recommended.map(p => (
                <Link key={p.id} to={`/paths/${p.id}`} className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <p className="font-medium text-sm">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.lessons} lessons · {p.time}</p>
                    </div>
                  </div>
                  <Progress value={p.progress} className="h-1.5 mt-2" />
                </Link>
              ))}
            </div>
          </Card>

          {/* Recent Achievements */}
          <Card className="p-5 border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif font-bold text-lg">Achievements</h2>
              <Link to="/achievements"><Button variant="ghost" size="sm">All</Button></Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {achievements.filter(a => a.earned).slice(0, 3).map(a => (
                <div key={a.id} className="text-center p-2">
                  <div className="text-3xl mb-1">{a.icon}</div>
                  <p className="text-xs font-medium truncate">{a.name}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
