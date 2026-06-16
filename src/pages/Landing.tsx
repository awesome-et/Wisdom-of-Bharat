import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { categories, wisdomPaths, testimonials, sampleLessons } from '@/lib/mock-data';
import { useAuth } from '@/lib/auth-supabase';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Target, Trophy, CheckCircle, Star, Sparkles, Clock, ChevronLeft, ChevronRight, LogIn } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTheme } from '@/lib/theme';
import { Sun, Moon } from 'lucide-react';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

function getLessonsForCategory(categoryName: string) {
  return sampleLessons.filter((l) => l.category === categoryName);
}

function getTotalMinutes(lessons: typeof sampleLessons) {
  return lessons.reduce((sum, l) => {
    const match = l.duration.match(/(\d+)/);
    return sum + (match ? parseInt(match[1], 10) : 0);
  }, 0);
}

function formatTime(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hrs = Math.round(minutes / 60 * 10) / 10;
  return hrs % 1 === 0 ? `${hrs} hrs` : `${hrs} hrs`;
}

function LandingNav() {
  const { theme, toggle } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();

  const links = [
    { label: 'Categories', href: '#categories' },
    // { label: 'Paths', href: '#paths' },
    // { label: 'Pricing', href: '#pricing' }
  ];


  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span>Wisdom Of <span className="text-primary">Bharat</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md">
              {l.label}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} className="rounded-full">
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
          {user ?
            <Link to="/library">
              <Button size="sm">Go to Library <ArrowRight className="w-3 h-3 ml-1" /></Button>
            </Link> :
            <>
              <Button variant="ghost" size="sm" className="hidden md:inline-flex" onClick={() => navigate('/auth/login')}>
                <LogIn className="w-4 h-4 mr-1" /> Log in
              </Button>
            </>
          }
        </div>
      </div>
    </header>);

}

function Hero() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="max-w-3xl mx-auto text-center" {...fadeUp}>
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Timeless Wisdom, Modern Application
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-6">
            Ancient Wisdom for{' '}
            <span className="text-gradient">Modern Life</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn leadership, confidence, discipline, ethics, and life skills through timeless stories from Indian epics and wisdom traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ?
              <Link to="/library">
                <Button size="lg" className="text-base px-8 h-12 w-full sm:w-auto">
                  Go to Library <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link> :

              <>
                <Button size="lg" className="text-base px-8 h-12 w-full sm:w-auto" onClick={() => navigate('/auth/login')}>
                  Start Learning <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </>
            }
          </div> 
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-primary" /> {sampleLessons.length} Lessons</span>
            <span className="flex items-center gap-1.5"><Target className="w-4 h-4 text-primary" /> {categories.length} Categories</span>
            <span className="flex items-center gap-1.5"><Trophy className="w-4 h-4 text-primary" /> {wisdomPaths.length} Paths</span>
          </div>
        </motion.div>








      </div>
    </section>);

}

function HowItWorks() {
  const steps = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Read engaging stories', desc: 'Dive into captivating tales from Indian epics and traditions.' },
    { icon: <Brain className="w-6 h-6" />, title: 'Understand the lesson', desc: 'Discover the life skills and values embedded in each story.' },
    { icon: <Target className="w-6 h-6" />, title: 'Apply it to real life', desc: 'Learn how ancient wisdom solves modern challenges.' },
    { icon: <Trophy className="w-6 h-6" />, title: 'Earn your progress', desc: 'Complete quizzes, earn badges, and track your growth.' }];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A simple journey from reading stories to building real-world skills.</p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) =>
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <Card className="p-6 text-center h-full border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-primary mb-2">Step {i + 1}</div>
                <h3 className="font-serif font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}

function Categories() {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Learning Categories</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Explore wisdom from diverse Indian traditions and texts.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((c, i) =>
            <motion.div key={c.id} {...fadeUp} transition={{ delay: i * 0.05, duration: 0.4 }}>
              <Card className="p-5 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group border-border/50">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                  {c.emoji}
                </div>
                <h3 className="font-serif font-semibold mb-2">{c.name}</h3>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span>{getLessonsForCategory(c.name).length} lessons</span>
                  <span>·</span>
                  <span>{c.difficulty}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {formatTime(getTotalMinutes(getLessonsForCategory(c.name)))}
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}

function Paths() {
  return (
    <section id="paths" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Wisdom Paths</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Structured learning tracks to build specific life skills.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {wisdomPaths.map((p, i) =>
            <motion.div key={p.id} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-border/50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{p.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-lg mb-1">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.characters.map((c) =>
                        <Badge key={c} variant="secondary" className="text-xs">{c}</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{p.lessons} lessons</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.time}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">What Learners Say</h2>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center border-border/50">
            <div className="text-5xl mb-4">{testimonials[idx].avatar}</div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
            </div>
            <p className="text-lg italic text-muted-foreground mb-6">"{testimonials[idx].text}"</p>
            <p className="font-semibold">{testimonials[idx].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[idx].role}</p>
          </Card>
          <div className="flex justify-center gap-2 mt-6">
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) =>
                <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-primary' : 'bg-border'}`} />
              )}
            </div>
            <Button variant="outline" size="icon" className="rounded-full" onClick={() => setIdx((i) => (i + 1) % testimonials.length)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>);

}

function Pricing() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground">Start free, upgrade when you're ready.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div {...fadeUp}>
            <Card className="p-8 border-border/50 h-full">
              <h3 className="font-serif text-xl font-bold mb-1">Free</h3>
              <p className="text-3xl font-bold mb-1">₹0 <span className="text-sm font-normal text-muted-foreground">/ forever</span></p>
              <p className="text-sm text-muted-foreground mb-6">Get started with the basics.</p>
              <ul className="space-y-3 text-sm mb-8">
                {[`${sampleLessons.length} free lessons`, 'Basic quizzes', `${wisdomPaths.length} learning paths`, 'Community access'].map((f) =>
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> {f}</li>
                )}
              </ul>
              {user ?
                <Link to="/library"><Button variant="outline" className="w-full">Go to Library</Button></Link> :

                <Button variant="outline" className="w-full" onClick={() => navigate('/auth/login')}>Get Started</Button>
              }
            </Card>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <Card className="p-8 border-primary/50 ring-2 ring-primary/20 relative h-full">
              <Badge className="absolute -top-3 right-6">Most Popular</Badge>
              <h3 className="font-serif text-xl font-bold mb-1">Premium</h3>
              <p className="text-3xl font-bold mb-1">₹299 <span className="text-sm font-normal text-muted-foreground">/ month</span></p>
              <p className="text-sm text-muted-foreground mb-6">Unlock the full experience.</p>
              <ul className="space-y-3 text-sm mb-8">
                {[`Full lesson library (${sampleLessons.length} lessons)`, `All ${wisdomPaths.length} learning paths`, 'Progress tracking & analytics', 'Certificates of completion', 'Exclusive premium content', 'Ad-free experience'].map((f) =>
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> {f}</li>
                )}
              </ul>
              {user ?
                <Link to="/library"><Button className="w-full">Go to Library</Button></Link> :

                <Button className="w-full" onClick={() => navigate('/auth/login')}>Start Premium</Button>
              }
            </Card>
          </motion.div>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-serif text-lg font-bold">
            <BookOpen className="w-5 h-5 text-primary" />
            Wisdom Of<span className="text-primary">Bharat</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Wisdom Of Bharat. Ancient wisdom for modern life.</p>
        </div>
      </div>
    </footer>);

}

export default function Landing() {
  return (
    <div>
      <LandingNav />
      <Hero />
      <HowItWorks />
      <Categories />
      {/* <Paths /> 
      <Testimonials />
      <Pricing /> */}
      <Footer />
    </div>);

}