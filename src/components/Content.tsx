
import { useMemo } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { documentationData, DocItem } from '@/data/documentation';

interface ContentProps {
  activeSection: string;
  activeItem: string;
  searchResults: DocItem[];
  onItemSelect: (sectionId: string, itemId: string) => void;
}

const Content = ({ activeSection, activeItem, searchResults, onItemSelect }: ContentProps) => {
  const currentContent = useMemo(() => {
    if (searchResults.length > 0) {
      return null; // We'll show search results instead
    }

    const section = documentationData.find(s => s.id === activeSection);
    if (!section) return null;
    
    const item = section.items.find(i => i.id === activeItem);
    return item;
  }, [activeSection, activeItem, searchResults]);

  const breadcrumbs = useMemo(() => {
    const section = documentationData.find(s => s.id === activeSection);
    if (!section) return [];
    
    return [
      { title: 'Documentation', href: '#' },
      { title: section.title, href: '#' },
      { title: currentContent?.title || '', href: '#' }
    ];
  }, [activeSection, currentContent]);

  const navigation = useMemo(() => {
    const allItems: Array<{ sectionId: string; item: DocItem }> = [];
    
    documentationData.forEach(section => {
      section.items.forEach(item => {
        allItems.push({ sectionId: section.id, item });
      });
    });

    const currentIndex = allItems.findIndex(
      ({ sectionId, item }) => sectionId === activeSection && item.id === activeItem
    );

    return {
      prev: currentIndex > 0 ? allItems[currentIndex - 1] : null,
      next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null
    };
  }, [activeSection, activeItem]);

  if (searchResults.length > 0) {
    return (
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Search Results</h1>
            <p className="text-muted-foreground">Found {searchResults.length} results</p>
          </div>
          
          <div className="space-y-6">
            {searchResults.map((item) => (
              <div
                key={item.id}
                className="p-6 border rounded-lg hover:border-red-200 transition-colors cursor-pointer"
                onClick={() => {
                  const section = documentationData.find(s => 
                    s.items.some(i => i.id === item.id)
                  );
                  if (section) {
                    onItemSelect(section.id, item.id);
                  }
                }}
              >
                <h3 className="text-xl font-semibold mb-2 text-red-600">{item.title}</h3>
                <p className="text-muted-foreground line-clamp-3">
                  {item.content?.substring(0, 200)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (!currentContent) {
    return (
      <main className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl px-6 py-8">
          <div className="text-center py-20">
            <Home className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Welcome to Laravel Documentation</h1>
            <p className="text-muted-foreground">Select a topic from the sidebar to get started.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="container max-w-4xl px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
              <span className={index === breadcrumbs.length - 1 ? "text-foreground font-medium" : ""}>
                {crumb.title}
              </span>
            </div>
          ))}
        </nav>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: currentContent.content?.replace(/\n/g, '<br>') || '' }} />
        </article>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t">
          {navigation.prev ? (
            <Button
              variant="outline"
              onClick={() => onItemSelect(navigation.prev!.sectionId, navigation.prev!.item.id)}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium">{navigation.prev.item.title}</div>
              </div>
            </Button>
          ) : (
            <div />
          )}

          {navigation.next ? (
            <Button
              variant="outline"
              onClick={() => onItemSelect(navigation.next!.sectionId, navigation.next!.item.id)}
              className="flex items-center space-x-2"
            >
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium">{navigation.next.item.title}</div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
};

export default Content;
