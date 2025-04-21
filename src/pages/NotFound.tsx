import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout hideNavbar={false}>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4 max-w-lg">
          <h1 className="text-8xl font-playfair text-umami mb-6">404</h1>
          <p className="text-2xl font-cormorant text-muted-foreground mb-8">We couldn't find the page you were looking for.</p>
          <p className="text-muted-foreground font-montserrat mb-8">
            The page may have been moved, renamed, or no longer exists. Please check the URL or navigate to another section of our site.
          </p>
          
          <Button asChild className="bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
