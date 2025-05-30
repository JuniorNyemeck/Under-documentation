
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';
import { DocItem } from '@/data/documentation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('prologue');
  const [activeItem, setActiveItem] = useState('release-notes');
  const [searchResults, setSearchResults] = useState<DocItem[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleItemSelect = (sectionId: string, itemId: string) => {
    setActiveSection(sectionId);
    setActiveItem(itemId);
    setSearchResults([]); // Clear search when navigating
    setSidebarOpen(false); // Close sidebar on mobile
  };

  const handleSearchResults = (results: DocItem[]) => {
    setSearchResults(results);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    // Set initial theme
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        onSearchResults={handleSearchResults}
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar
            activeSection={activeSection}
            activeItem={activeItem}
            onItemSelect={handleItemSelect}
          />
        </div>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
            <Sidebar
              activeSection={activeSection}
              activeItem={activeItem}
              onItemSelect={handleItemSelect}
              className="fixed left-0 top-16 h-[calc(100vh-4rem)] z-50"
            />
          </div>
        )}

        <Content
          activeSection={activeSection}
          activeItem={activeItem}
          searchResults={searchResults}
          onItemSelect={handleItemSelect}
        />
      </div>
    </div>
  );
};

export default Index;
