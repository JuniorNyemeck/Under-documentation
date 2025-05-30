
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { documentationData, DocSection, DocItem } from '@/data/documentation';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSection: string;
  activeItem: string;
  onItemSelect: (sectionId: string, itemId: string) => void;
  className?: string;
}

const Sidebar = ({ activeSection, activeItem, onItemSelect, className }: SidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['prologue', 'getting-started']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <aside className={cn("w-72 border-r bg-background h-screen overflow-y-auto", className)}>
      <div className="p-6">
        <nav className="space-y-2">
          {documentationData.map((section: DocSection) => (
            <div key={section.id} className="space-y-1">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-left hover:bg-muted rounded-md transition-colors"
              >
                <span className="text-foreground">{section.title}</span>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
                <div className="ml-4 space-y-1">
                  {section.items.map((item: DocItem) => (
                    <button
                      key={item.id}
                      onClick={() => onItemSelect(section.id, item.id)}
                      className={cn(
                        "w-full px-3 py-2 text-sm text-left hover:bg-muted rounded-md transition-colors",
                        activeSection === section.id && activeItem === item.id
                          ? "bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400 border-l-2 border-red-500"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
