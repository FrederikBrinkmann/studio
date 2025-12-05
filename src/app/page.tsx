import About from '@/components/sections/about';
import Approach from '@/components/sections/approach';
import Cases from '@/components/sections/cases';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Footer from '@/components/layout/footer';

export default function Home() {
  const sections = [
    { component: <Hero />, id: 'hero' },
    { component: <Services />, id: 'services' },
    { component: <Cases />, id: 'cases' },
    { component: <About />, id: 'about' },
    { component: <Approach />, id: 'approach' },
    { component: <Contact />, id: 'contact' },
  ];

  return (
    <main>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {section.component}
        </div>
      ))}
      <Footer />
    </main>
  );
}
