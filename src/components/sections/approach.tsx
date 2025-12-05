import { approachSteps } from '@/lib/data';

export default function Approach() {
  return (
    <section id="approach" className="section-padding">
      <div className="container-max">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Unser Vorgehen
        </h2>
        <p className="mb-16 text-center text-lg text-muted-foreground">
          Strukturiert, agil und immer auf Ihr Ziel ausgerichtet.
        </p>
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block"
            aria-hidden="true"
          ></div>

          <div className="space-y-12 md:space-y-0">
            {approachSteps.map((item, index) => (
              <div
                key={item.step}
                className="relative md:grid md:grid-cols-2 md:items-center md:gap-x-12"
              >
                {/* Content */}
                <div
                  className={`flex flex-col items-start ${
                    index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                  } ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ${
                    index % 2 === 0 ? '' : 'md:col-start-2'
                  }`}
                >
                  <p className="mb-1 text-sm font-semibold text-primary">
                    Schritt {item.step}
                  </p>
                  <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                  <p
                    className={`text-muted-foreground ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Timeline Dot for desktop */}
                <div
                  className={`hidden md:block ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  } row-start-1`}
                >
                  <div
                    className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background`}
                  ></div>
                </div>

                {/* Timeline line for mobile */}
                <div className="absolute -left-3 top-0 block h-full w-0.5 bg-border md:hidden"></div>
                 {/* Timeline dot for mobile */}
                <div className="absolute -left-5 top-1 block h-4 w-4 rounded-full border-2 border-primary bg-background md:hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
