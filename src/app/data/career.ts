interface Career {
  carrerSteps: CareerStep[]
}

interface CareerStep {
  companyName: string
  durationFrom: Date
  durationTo: Date
  jobTitle: string
  jobDesciption: string[]
}

export const CAREER: Career = {
  carrerSteps: [
    {
      companyName: "sevDesk GmbH",
      durationFrom: new Date(2023, 4, 1),
      durationTo: new Date(),
      jobTitle: "Senior Software-Entwickler",
      jobDesciption: [
        "Software-Entwicklung im Bereich Buchhaltung",
        "Weiterentwicklung Buchhaltungsservice vorwiegend im Backend auf Basis von Kotlin",
        "Verbesserung bestehender Softwareentwicklungsprozesse",
        "Unterstützung in der Erstellung fachlicher und technischer Arbeitspakete"
      ]
    },
    {
      companyName: "CONET ISB GmbH",
      durationFrom: new Date(2021, 9, 1),
      durationTo: new Date(2023,4,1),
      jobTitle: "Fullstack-Software-Entwickler",
      jobDesciption: [
        "Software-Entwicklung im Bereich E-Government",
        "Betreuung und Weiterentwicklung bestehender Verwaltungssoftware",
        "Konzeptionierung und Entwicklung von Software basierend auf Java/Kotlin im Backend und Angular/Typescript im Frontend",
        "Mitentwicklung der Erstellung verschiedener Software-Architekturen",
        "Entwurf und Mitentwicklung eventbasierter Software-Architektur",
        "Unterstützung in Angebotsprozessen"
      ]
    },
    {
      companyName: "T-Systems International GmbH",
      durationFrom: new Date(2011, 9, 1),
      durationTo: new Date(2021, 9, 1),
      jobTitle: "Systems Engineer",
      jobDesciption: [
        "Entwicklung verschiedener Software-Komponenten und Schnittstellen für große Kunden im Logistik-und Transportsektor",
        "Design und Konzeptionierung der Architektur verschiedener Webanwendungen mit Angular und Apache Wicket",
        "Planung, Schätzung und Koordinierung von Arbeitspaketen",
        "Unterstützung von Angebotsprozessen",
        "Übernahme der Entwicklungsleitung eines Frontend-Entwicklungsteams"
      ]
    },
    {
      companyName: "T-Systems Multimedia Solutions GmbH",
      durationFrom: new Date(2008, 9, 1),
      durationTo: new Date(2011, 9, 1),
      jobTitle: "BA-Student",
      jobDesciption: [
        "Duales Studium für Informationstechnik an der Berufsakademie in Sachsen",
        "Produktive Projektarbeit als Junior Software Developer",
        "Webentwicklung mit Struts und Backend-Entwicklung mit Java"
      ]
    }
  ]
}
