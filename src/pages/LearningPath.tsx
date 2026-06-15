import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { wisdomPaths, sampleLessons } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle, Lock, Play } from 'lucide-react';

export default function LearningPath() {
  const { id } = useParams();
  const path = wisdomPaths.find(p => p.id === id) || wisdomPaths[0];

  const pathLessons = sampleLessons.slice(0, path.lessons).map((l, i) => ({
    ...l,
    completed: i < Math.floor(path.lessons * path.progress / 100),
    locked: i > Math.floor(path.lessons * path.progress / 100) + 2,
  }));

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/paths" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" /> All Paths
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {/* Header */}
        <Card className="p-6 md:p-8 mb-8 border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-start gap-4">
            <div className="text-5xl">{path.icon}</div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold font-serif mb-2">{path.name}</h1>
              <p className="text-muted-foreground mb-4">{path.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {path.characters.map(c => <Badge key={c} variant="secondary">{c}</Badge>)}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span>{path.lessons} lessons</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {path.time}</span>
              </div>
              <Progress value={path.progress} className="h-3" />
              <p className="text-sm font-medium mt-2">{path.progress}% complete</p>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-4">
            {pathLessons.map((lesson, i) => (
              <motion.div key={lesson.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <div className="flex items-start gap-4 relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    lesson.completed ? 'bg-primary text-primary-foreground' : lesson.locked ? 'bg-muted text-muted-foreground' : 'bg-card border-2 border-primary text-primary'
                  }`}>
                    {lesson.completed ? <CheckCircle className="w-5 h-5" /> : lesson.locked ? <Lock className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </div>
                  <Card className={`flex-1 p-4 border-border/50 ${lesson.locked ? 'opacity-50' : 'hover:shadow-md transition-shadow'}`}>
                    {lesson.locked ? (
                      <div>
                        <h3 className="font-serif font-semibold">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Complete previous lessons to unlock</p>
                      </div>
                    ) : (
                      <Link to={`/lesson/${lesson.id}`} className="block">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-serif font-semibold">{lesson.title}</h3>
                              {lesson.completed && <Badge variant="secondary" className="text-xs">Done</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {lesson.duration}</span>
                              <Badge variant="outline" className="text-xs">{lesson.difficulty}</Badge>
                            </div>
                          </div>
                          <div className="text-3xl shrink-0 ml-4">{lesson.thumbnail}</div>
                        </div>
                      </Link>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
