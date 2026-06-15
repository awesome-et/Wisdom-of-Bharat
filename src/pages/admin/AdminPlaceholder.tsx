import { useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Construction } from 'lucide-react';

export default function AdminPlaceholder() {
  const location = useLocation();
  const name = location.pathname.split('/').pop() || 'Page';
  const title = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-12 text-center border-border/50">
        <Construction className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-2xl font-bold font-serif mb-2">{title}</h1>
        <p className="text-muted-foreground">This admin section is ready for content management. Connect a database to enable full CRUD operations.</p>
      </Card>
    </div>
  );
}
