
import { useState } from 'react';
import { Search, Menu, Sun, Moon, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchDocumentation } from '@/data/documentation';

interface HeaderProps {
  onMenuToggle: () => void;
  onSearchResults: (results: any[]) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

const Header = ({ onMenuToggle, onSearchResults, isDark, onThemeToggle }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const results = searchDocumentation(query);
    onSearchResults(results);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-xl hidden sm:block">Laravel</span>
            </div>
            <span className="text-muted-foreground hidden sm:block">10.x</span>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeToggle}
            className="h-9 w-9"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Github className="h-4 w-4" />
          </Button>
          
          <div className="hidden sm:block">
            <Button variant="outline" size="sm">
              Laravel.com
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
