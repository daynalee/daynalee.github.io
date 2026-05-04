import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CaseStudies from "@/pages/case-studies";
import CaseStudyDetail from "@/pages/case-study-detail";
import About from "@/pages/about";
import Experience from "@/pages/experience";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/case-studies/:slug" component={CaseStudyDetail} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
