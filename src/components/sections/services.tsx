import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/lib/data';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-max">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Unsere Services
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Wir übersetzen komplexe Herausforderungen in klare, datengetriebene
          Lösungen.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex transform flex-col bg-background/50 transition-transform duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-end">
                <ul className="mt-4 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
