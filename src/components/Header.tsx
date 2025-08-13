import minimoLogo from "@/assets/logo.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-3">
        <img src={minimoLogo} alt="Minimo" className="w-12 h-12 rounded-lg" fetchPriority="high"/>
        <span className="text-xl font-semibold text-foreground">Minimo</span>
      </div>
      <Link to="https://abdoemadselim.gumroad.com/l/bucey">
        <Button variant="outline" className="border-muted-foreground text-muted-foreground">
          Get Minimo
        </Button>
      </Link>
    </header>
  );
};

export default Header;
