export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#cases', label: 'Cases' },
  { href: '#about', label: 'About' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Kontakt' },
];

export const services = [
  {
    title: 'Data Science & Analytics',
    description:
      'Wir verwandeln Ihre Daten in messbaren Geschäftserfolg, von der explorativen Analyse bis zum Aufbau skalierbarer Datenprodukte.',
    points: [
      'Use-Case-Workshops & Datenstrategie',
      'Explorative Datenanalysen & Visualisierung',
      'Entwicklung von Machine-Learning-Modellen',
      'Aufbau von Reporting-Dashboards',
    ],
  },
  {
    title: 'Softwareentwicklung',
    description:
      'Wir entwickeln robuste und passgenaue Softwarelösungen, die Ihre datengetriebenen Prozesse optimal unterstützen und automatisieren.',
    points: [
      'Backend-Entwicklung (Python, Node.js)',
      'Daten-Pipelines und ETL-Prozesse',
      'Cloud-Architektur und MLOps',
      'Entwicklung von internen Tools und APIs',
    ],
  },
  {
    title: 'KI-Consulting',
    description:
      'Wir begleiten Sie bei der strategischen Integration von künstlicher Intelligenz in Ihre Geschäftsmodelle und Produkte.',
    points: [
      'Identifikation von KI-Potenzialen',
      'Entwicklung von KI-Prototypen & MVPs',
      'Go-to-Market-Strategien für KI-Produkte',
      'Generative AI & LLM-Integration',
    ],
  },
];

export const teamMembers = [
  {
    name: 'Martin Johannes Brucker',
    role: 'Co-Founder · Data Science & Applied AI',
    description:
      'Data-Science-Masterstudent mit Schwerpunkt Analyse & Visualisierung. Er war bereits in Projekten zur Digitalisierung von Abläufen im Gesundheits- und öffentlichen Sektor eingesetzt.',
    skills: [
      'Data Science & Analytics',
      'Prototyping',
      'Datenvisualisierung',
      'Prozessdigitalisierung',
    ],
    imageId: 'team-martin-brucker',
  },
  {
    name: 'Frederik Brinkmann',
    role: 'Co-Founder · Business & AI Strategy',
    description:
      'Junior Business-Development-Specialist mit Schwerpunkt AI Solutions. Er baut Brücken zwischen Technologie, Produkten und Geschäftsmodell.',
    skills: [
      'AI Business Cases',
      'Go-to-Market-Strategie',
      'Stakeholder-Kommunikation',
      'FinTech & Regulierung',
    ],
    imageId: 'team-frederik-brinkmann',
  },
];

export const caseStudies = [
  {
    title: 'Digitale Prozessplattform im Gesundheitswesen',
    description:
      'Entwicklung einer zentralen Plattform zur Digitalisierung und Automatisierung klinischer Abläufe für ein mittelständisches Medizintechnik-Unternehmen.',
    points: [
      'Analyse und Modellierung von Prozessen',
      'Backend-Entwicklung und Datenbankdesign',
      'Implementierung eines Dashboards für Echtzeit-Monitoring',
    ],
  },
  {
    title: 'KI-gestützte Dokumentenanalyse im Finanzbereich',
    description:
      'Konzeption und Prototyping einer KI-Lösung zur automatisierten Extraktion und Klassifizierung von Informationen aus Finanzdokumenten für eine Versicherung.',
    points: [
      ' Einsatz von Natural Language Processing (NLP)',
      'Training eines Klassifikationsmodells',
      'Integration in bestehende Workflows via API',
    ],
  },
  {
    title: 'Predictive Analytics für operative Planung',
    description:
      'Aufbau einer Predictive-Analytics-Lösung zur Vorhersage von Auftragseingängen und zur Optimierung der Ressourcenplanung für einen Logistikdienstleister.',
    points: [
      'Entwicklung von Zeitreihen-Prognosemodellen',
      'Aufbau einer skalierbaren Daten-Pipeline in der Cloud',
      'Visualisierung der Prognosen in einem interaktiven Dashboard',
    ],
  },
];

export const approachSteps = [
  {
    step: 1,
    title: 'Verstehen',
    description:
      'In gemeinsamen Workshops analysieren wir Ihre Ausgangslage, definieren Ziele und identifizieren Potenziale.',
  },
  {
    step: 2,
    title: 'Konzipieren',
    description:
      'Wir entwerfen konkrete Use Cases, modellieren Datenflüsse und erstellen eine technische Roadmap für die Umsetzung.',
  },
  {
    step: 3,
    title: 'Umsetzen',
    description:
      'In agilen Sprints entwickeln wir Daten-Pipelines, trainieren Modelle und bauen die notwendigen Applikationen.',
  },
  {
    step: 4,
    title: 'Skalieren',
    description:
      'Wir sorgen für ein stabiles Deployment, überwachen die Performance und schulen Ihre Teams für den nachhaltigen Erfolg.',
  },
];
