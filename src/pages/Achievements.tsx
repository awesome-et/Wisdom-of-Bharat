import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { achievements, levels } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const currentXP = 350;

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-serif mb-1">Achievements & Levels</h1>
        <p className="text-muted-foreground">Track your growth and celebrate milestones.</p>
      </motion.div>

      {/* Levels */}
      <Card className="p-6 mb-8 border-border/50">
        <h2 className="font-serif font-bold text-lg mb-4">Your Journey</h2>
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {levels.map((level, i) => {
            const reached = currentXP >= level.min;
            const current = currentXP >= level.min && currentXP < level.max;
            return (
              <div key={level.name} className="flex items-center">
                <div className={`flex flex-col items-center px-4 py-3 rounded-xl min-w-[90px] ${current ? 'bg-primary/10 ring-2 ring-primary' : reached ? 'bg-muted' : 'opacity-40'}`}>
                  <span className="text-2xl mb-1">{level.icon}</span>
                  <span className="text-xs font-semibold">{level.name}</span>
                  <span className="text-[10px] text-muted-foreground">{level.min} XP</span>
                </div>
                {i < levels.length - 1 && <div className={`w-8 h-0.5 ${reached ? 'bg-primary' : 'bg-border'}`} />}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Badges */}
      <h2 className="font-serif font-bold text-lg mb-4">Badges</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((a, i) => (
          <motion.div key={a.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
            <Card className={`p-5 text-center border-border/50 ${!a.earned ? 'opacity-50' : ''}`}>
              <div className="text-4xl mb-2 relative inline-block">
                {a.icon}
                {!a.earned && <Lock className="w-4 h-4 absolute -bottom-1 -right-1 text-muted-foreground" />}
              </div>
              <h3 className="font-semibold text-sm mb-1">{a.name}</h3>
              <p className="text-xs text-muted-foreground">{a.description}</p>
              {a.earned && a.date && (
                <Badge variant="secondary" className="text-[10px] mt-2">Earned {a.date}</Badge>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
