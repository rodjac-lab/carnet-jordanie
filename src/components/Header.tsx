import { memo } from "react";
import { Menu, X, BookOpen, Utensils, Map, BookOpenCheck } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Album", to: "/gallery", icon: Map },
  { name: "Gastronomie", to: "/food", icon: Utensils },
  { name: "Lectures", to: "/recommendations", icon: BookOpenCheck },
] as const;

const HeaderComponent = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="font-playfair font-semibold text-xl text-foreground">Jordanie</span>
          </Link>
        </div>

        <details className="group relative flex lg:hidden">
          <summary
            aria-controls="mobile-navigation"
            className="-m-2.5 inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md p-2.5 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Menu className="h-6 w-6 group-open:hidden" aria-hidden="true" />
            <X className="hidden h-6 w-6 group-open:block" aria-hidden="true" />
          </summary>

          <div
            id="mobile-navigation"
            className="fixed left-4 right-4 top-20 z-[100] rounded-lg border border-border bg-background p-4 shadow-2xl"
            aria-label="Navigation principale"
          >
            <div className="space-y-1">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="flex items-center gap-3 rounded-md px-3 py-3 text-base font-inter font-medium leading-7 text-foreground hover:bg-muted"
                  >
                    <IconComponent className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </details>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center gap-2 px-4 py-2 text-sm font-inter font-medium leading-6 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 group"
              >
                <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

    </header>
  );
};

// Memoize Header to prevent unnecessary re-renders
export const Header = memo(HeaderComponent);
