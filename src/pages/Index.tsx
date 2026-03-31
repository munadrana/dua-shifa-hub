import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <CardGrid />
      <Footer />
    </div>
  );
};

export default Index;
