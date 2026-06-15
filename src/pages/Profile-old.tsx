import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { achievements, wisdomPaths, levels } from '@/lib/mock-data';
import { useAuth } from '@/lib/auth';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, Trophy, Download, Mail, LogOut } from 'lucide-react';

const currentXP = 350;
const currentLevel = levels.find(l => currentXP >= l.min && currentXP < l.max) || levels[2];

const certificates = [
  { id: '1', title: 'Confidence Builder - Foundation', date: '2026-05-25', path: 'Confidence Builder' },
  { id: '2', title: 'Panchatantra Basics', date: '2026-05-15', path: 'Panchatantra' },
  { id: '3', title: 'Bhagavad Gita Introduction', date: '2026-06-01', path: 'Bhagavad Gita' },
];

export default function Profile() {
  const { user, logout } = useAuth();

  const displayName = user?.firstName
    ? `${user.firstName} ${user.lastName ?? ''}`.trim()
    : user?.email?.split('@')[0] ?? 'Learner';

  const initials = user
    ? `${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase() || user.email[0].toUpperCase()
    : '?';

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {/* Profile Header */}
        <Card className="p-6 md:p-8 mb-8 border-border/50">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl text-primary-foreground font-bold">
              {initials}
            </div>
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl font-bold font-serif">{displayName}</h1>
              <p className="text-muted-foreground flex items-center gap-1 justify-center sm:justify-start">
                <Mail className="w-3 h-3" /> {user?.email}
              </p>
            </div>
            <Button variant="outline" onClick={() => logout()} className="gap-2">
              <LogOut className="w-4 h-4" /> Log out
            </Button>
          </div>
        </Card>

        {/* Toggle to true in the future to re-enable this entire section */}
        {false && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { icon: <BookOpen className="w-5 h-5" />, label: 'Lessons', value: '28' },
                { icon: <Clock className="w-5 h-5" />, label: 'Hours', value: '14.5' },
                { icon: <Award className="w-5 h-5" />, label: 'Certificates', value: '3' },
                { icon: <Trophy className="w-5 h-5" />, label: 'Badges', value: '4' },
              ].map(s => (
                <Card key={s.label} className="p-4 text-center border-border/50">
                  <div className="text-primary mx-auto w-fit mb-1">{s.icon}</div>
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Completed Paths */}
              <Card className="p-5 border-border/50">
                <h2 className="font-serif font-bold text-lg mb-4">Learning Paths</h2>
                <div className="space-y-3">
                  {wisdomPaths.map(p => (
                    <div key={p.id} className="flex items-center gap-3">
                      <span className="text-xl">{p.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{p.name}</p>
                        <Progress value={p.progress} className="h-1.5 mt-1" />
                      </div>
                      <span className="text-xs text-muted-foreground">{p.progress}%</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Certificates */}
              <Card className="p-5 border-border/50">
                <h2 className="font-serif font-bold text-lg mb-4">Certificates</h2>
                <div className="space-y-3">
                  {certificates.map(cert => (
                    <div key={cert.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="text-sm font-medium">{cert.title}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
  
}
