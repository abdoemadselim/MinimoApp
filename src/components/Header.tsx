import minimoLogo from "@/assets/minimo-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3">
        <img src={minimoLogo} alt="Minimo" className="w-12 h-12 rounded-lg" />
        <span className="text-xl font-semibold text-foreground">Minimo</span>
      </div>
      <Button variant="outline" className="border-muted-foreground text-muted-foreground hover:bg-muted">
        Get Minimo
      </Button>
    </header>
  );
};

export default Header;