import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { wisdomPaths } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export default function Paths() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-serif mb-1">Wisdom Paths</h1>
        <p className="text-muted-foreground">Structured learning journeys to master specific life skills.</p>
      </motion.div>

      <div className="space-y-4">
        {wisdomPaths.map((path, i) => (
          <motion.div key={path.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <Link to={`/paths/${path.id}`}>
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer border-border/50 group">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{path.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h2 className="font-serif font-bold text-lg">{path.name}</h2>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{path.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {path.characters.map(c => <Badge key={c} variant="secondary" className="text-xs">{c}</Badge>)}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <span>{path.lessons} lessons</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {path.time}</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">{path.progress}% complete</p>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
