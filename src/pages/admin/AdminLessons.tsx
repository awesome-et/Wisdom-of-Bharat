import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { sampleLessons as initialLessons, categories } from '@/lib/mock-data';
import { Search, Plus, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

type Lesson = typeof initialLessons[0];

export default function AdminLessons() {
  const [lessons, setLessons] = useState(initialLessons);
  const [search, setSearch] = useState('');
  const [editLesson, setEditLesson] = useState<Lesson | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(() => lessons.filter(l => l.title.toLowerCase().includes(search.toLowerCase())), [lessons, search]);

  const openNew = () => {
    setEditLesson({ id: String(Date.now()), title: '', category: '', duration: '', difficulty: 'Beginner', completed: false, thumbnail: '📖', description: '' });
    setIsNew(true);
  };

  const save = () => {
    if (!editLesson?.title) return;
    if (isNew) {
      setLessons(prev => [editLesson!, ...prev]);
      toast.success('Lesson created!');
    } else {
      setLessons(prev => prev.map(l => l.id === editLesson!.id ? editLesson! : l));
      toast.success('Lesson updated!');
    }
    setEditLesson(null);
    setIsNew(false);
  };

  const doDelete = () => {
    if (deleteId) {
      setLessons(prev => prev.filter(l => l.id !== deleteId));
      toast.success('Lesson deleted');
      setDeleteId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-serif">Lessons</h1>
        <Button onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add Lesson</Button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search lessons..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
      </div>

      <Card className="border-border/50 overflow-hidden">
        <div className="divide-y divide-border">
          {filtered.map(lesson => (
            <div key={lesson.id} className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
              <div className="text-2xl shrink-0">{lesson.thumbnail}</div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{lesson.title}</p>
                <p className="text-xs text-muted-foreground">{lesson.category} · {lesson.duration} · {lesson.difficulty}</p>
              </div>
              <div className="flex gap-1 shrink-0">
                <Button variant="ghost" size="icon" onClick={() => { setEditLesson(lesson); setIsNew(false); }}><Pencil className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" onClick={() => setDeleteId(lesson.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="p-8 text-center text-muted-foreground">No lessons found.</p>}
        </div>
      </Card>

      {/* Edit / Create Dialog */}
      <Dialog open={!!editLesson} onOpenChange={open => { if (!open) { setEditLesson(null); setIsNew(false); } }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif">{isNew ? 'New Lesson' : 'Edit Lesson'}</DialogTitle>
          </DialogHeader>
          {editLesson && (
            <div className="space-y-4">
              <div><Label>Title</Label><Input value={editLesson.title} onChange={e => setEditLesson({ ...editLesson, title: e.target.value })} className="mt-1.5" /></div>
              <div><Label>Description</Label><Textarea value={editLesson.description} onChange={e => setEditLesson({ ...editLesson, description: e.target.value })} className="mt-1.5" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select value={editLesson.category} onValueChange={v => setEditLesson({ ...editLesson, category: v })}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>{categories.map(c => <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Difficulty</Label>
                  <Select value={editLesson.difficulty} onValueChange={v => setEditLesson({ ...editLesson, difficulty: v })}>
                    <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div><Label>Duration</Label><Input value={editLesson.duration} onChange={e => setEditLesson({ ...editLesson, duration: e.target.value })} placeholder="e.g. 10 min" className="mt-1.5" /></div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => { setEditLesson(null); setIsNew(false); }}>Cancel</Button>
            <Button onClick={save}>{isNew ? 'Create' : 'Save'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={open => { if (!open) setDeleteId(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete lesson?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={doDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
