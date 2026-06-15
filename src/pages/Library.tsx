import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { sampleLessons, categories } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { Search, Clock, CheckCircle2, BookOpen, Filter, X } from 'lucide-react';

export default function Library() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return sampleLessons.filter(l => {
      if (search && !l.title.toLowerCase().includes(search.toLowerCase()) && !l.description.toLowerCase().includes(search.toLowerCase())) return false;
      if (category !== 'all' && l.category !== category) return false;
      if (difficulty !== 'all' && l.difficulty !== difficulty) return false;
      return true;
    });
  }, [search, category, difficulty]);

  const activeFilters = (category !== 'all' ? 1 : 0) + (difficulty !== 'all' ? 1 : 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold font-serif mb-1">Library</h1>
        <p className="text-muted-foreground">Explore our complete collection of wisdom lessons.</p>
      </motion.div>

      {/* Search & Filters */}
      <div className="space-y-3 mb-8">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search lessons..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
          </div>
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="relative">
            <Filter className="w-4 h-4 mr-2" /> Filters
            {activeFilters > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">{activeFilters}</span>
            )}
          </Button>
        </div>
        {showFilters && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex flex-wrap gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-48"><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {[...new Set(sampleLessons.map(l => l.category))].map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="w-44"><SelectValue placeholder="Difficulty" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            {activeFilters > 0 && (
              <Button variant="ghost" size="sm" onClick={() => { setCategory('all'); setDifficulty('all'); }}>
                <X className="w-3 h-3 mr-1" /> Clear
              </Button>
            )}
          </motion.div>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{filtered.length} lesson{filtered.length !== 1 ? 's' : ''} found</p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((lesson, i) => (
          <motion.div key={lesson.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i * 0.02, 0.3) }}>
            <Link to={`/lesson/${lesson.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-border/50 h-full">
                <div className="h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-5xl">
                  {lesson.thumbnail}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif font-semibold line-clamp-1">{lesson.title}</h3>
                    {lesson.completed && <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{lesson.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{lesson.category}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" /> {lesson.duration}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-serif text-lg font-semibold mb-2">No lessons found</h3>
          <p className="text-muted-foreground text-sm">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
