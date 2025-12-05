import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { caseStudies } from '@/lib/data';

export default function Cases() {
  return (
    <section id="cases" className="section-padding bg-card">
      <div className="container-max">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Use Cases
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Ein Einblick in unsere Arbeit: von der Prozessoptimierung bis zur
          KI-Implementierung.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className="flex transform flex-col bg-background/50 transition-transform duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  {study.points.map((point) => (
                    <li key={point}>{point}</li>
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
