import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { sampleLessons, lessonContents } from '@/lib/mock-data';
import { allAdditionalContents } from '@/lib/additional-lessons';
import { getLessonContent } from '@/lib/lessons-20-62';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BookOpen, CheckCircle, Lightbulb, Target, MessageSquare, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Lesson() {
  const { id } = useParams();
  const lesson = sampleLessons.find(l => l.id === id) || sampleLessons[0];
  const content = lessonContents[lesson.id] || allAdditionalContents[lesson.id] || getLessonContent(lesson.id) || lessonContents['1'];
  const lessonIdx = sampleLessons.findIndex(l => l.id === (id || '1'));
  const prevLesson = lessonIdx > 0 ? sampleLessons[lessonIdx - 1] : null;
  const nextLesson = lessonIdx < sampleLessons.length - 1 ? sampleLessons[lessonIdx + 1] : null;

  const [reflectionText, setReflectionText] = useState<Record<number, string>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [completed, setCompleted] = useState(lesson.completed);

  const quizScore = quizSubmitted ? content.quiz.filter((q, i) => quizAnswers[i] === q.correct).length : 0;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-3 max-w-4xl flex items-center justify-between">
          <Link to="/library" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" /> Library
          </Link>
          <div className="flex items-center gap-3">
            <Badge variant="secondary">{lesson.category}</Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {lesson.duration}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Title */}
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">{lesson.thumbnail}</div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3">{lesson.title}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">{lesson.description}</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
              <Badge variant="outline">{lesson.difficulty}</Badge>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {lesson.duration} read</span>
            </div>
          </div>

          {/* Story */}
          <Card className="p-6 md:p-8 mb-8 border-border/50">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="font-serif font-bold text-xl">The Story</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {content.story.split('\n\n').map((para, i) => (
                <p key={i} className="text-foreground/90 leading-relaxed mb-4 last:mb-0">{para}</p>
              ))}
            </div>
          </Card>

          {/* Learning Points */}
          <Card className="p-6 md:p-8 mb-8 border-border/50 bg-primary/5">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h2 className="font-serif font-bold text-xl">What Can We Learn?</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.learningPoints.map((point, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <div className="text-2xl shrink-0">{point.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Modern Applications */}
          <Card className="p-6 md:p-8 mb-8 border-border/50">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="font-serif font-bold text-xl">Applying This Today</h2>
            </div>
            <div className="space-y-5">
              {content.applications.map((app, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Badge variant="secondary" className="shrink-0 mt-0.5">{app.context}</Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">{app.text}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Reflection */}
          <Card className="p-6 md:p-8 mb-8 border-border/50">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="font-serif font-bold text-xl">Reflect & Write</h2>
            </div>
            <div className="space-y-6">
              {content.reflections.map((q, i) => (
                <div key={i}>
                  <p className="font-medium text-sm mb-2 italic text-foreground/80">"{q}"</p>
                  <Textarea
                    placeholder="Write your thoughts..."
                    value={reflectionText[i] || ''}
                    onChange={e => setReflectionText(prev => ({ ...prev, [i]: e.target.value }))}
                    className="min-h-[80px]"
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Quiz */}
          <Card className="p-6 md:p-8 mb-8 border-border/50">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-accent" />
              <h2 className="font-serif font-bold text-xl">Quick Quiz</h2>
            </div>
            <div className="space-y-6">
              {content.quiz.map((q, qi) => (
                <div key={qi}>
                  <p className="font-medium mb-3">{qi + 1}. {q.question}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oi) => {
                      const isSelected = quizAnswers[qi] === oi;
                      const isCorrect = quizSubmitted && oi === q.correct;
                      const isWrong = quizSubmitted && isSelected && oi !== q.correct;
                      return (
                        <button
                          key={oi}
                          onClick={() => !quizSubmitted && setQuizAnswers(prev => ({ ...prev, [qi]: oi }))}
                          className={`p-3 rounded-lg border text-left text-sm font-medium transition-all cursor-pointer ${quizSubmitted ? 'cursor-default' : 'hover:border-blue-500/50'} ${
                            isCorrect ? 'border-green-500 bg-green-500/10 text-green-700 dark:text-green-400' :
                            isWrong ? 'border-red-500 bg-red-500/10 text-red-700 dark:text-red-400' :
                            isSelected ? 'border-blue-500 bg-blue-500/10 text-blue-700 dark:text-blue-400' :
                            'border-border text-foreground'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            {!quizSubmitted ? (
              <Button className="mt-6" onClick={() => setQuizSubmitted(true)} disabled={Object.keys(quizAnswers).length < content.quiz.length}>
                Submit Quiz
              </Button>
            ) : (
              <div className="mt-6 p-4 rounded-lg bg-muted">
                <p className="font-semibold">Score: {quizScore}/{content.quiz.length}</p>
                <p className="text-sm text-muted-foreground">
                  {quizScore === content.quiz.length ? 'Perfect! You\'ve mastered this lesson! 🎉' : `You got ${quizScore} right. Review the story and try again to deepen your understanding.`}
                </p>
              </div>
            )}
          </Card>

          {/* Key Takeaways */}
          <Card className="p-6 md:p-8 mb-8 border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="font-serif font-bold text-xl mb-4">Key Takeaways</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.takeaways.map((t, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border/50">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4">
            {prevLesson ? (
              <Link to={`/lesson/${prevLesson.id}`}>
                <Button variant="outline"><ChevronLeft className="w-4 h-4 mr-1" /> Previous</Button>
              </Link>
            ) : <div />}
            <Button
              onClick={() => { setCompleted(true); toast.success('Lesson marked as complete! +25 XP 🎉'); }}
              disabled={completed}
              className={completed ? 'opacity-50' : ''}
            >
              {completed ? <><CheckCircle className="w-4 h-4 mr-1" /> Completed</> : 'Mark Complete'}
            </Button>
            {nextLesson ? (
              <Link to={`/lesson/${nextLesson.id}`}>
                <Button variant="outline">Next <ChevronRight className="w-4 h-4 ml-1" /></Button>
              </Link>
            ) : <div />}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
