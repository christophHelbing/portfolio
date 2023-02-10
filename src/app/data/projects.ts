interface Project {
  name: string
  description: string
  position: string
  technologies: string[]
}

export const PROJECTS: Project[] = [
  {
    name: "ISGA-Portal",
    description: "Pflege und Weiterentwicklung der Verwaltungssoftware für das Gewerbeaufsichtsamt Rheinland Pfalz.",
    position: "Fullstack-Developer",
    technologies: [
      "Java",
      "Kotlin",
      "Angular",
      "Docker"
    ]
  },
  {
    name: "EETS@BAG-WEB",
    description: "Migration der Verwaltungssoftware für das Bundesamt für Güterverkehr in eine Webanwendung",
    position: "Lead-Frontend-Developer",
    technologies: [
      "JavaScript",
      "Typescript",
      "Angular"
    ]
  },
  {
    name: "EETS@BAG",
    description: "Realisierung und Erweiterung der Verwaltungssoftware für das Bundesamt für Güterverkehr im Bereich LKW-Maut für Deutschland.",
    position: "2nd Lead-Developer",
    technologies: [
      "Java"
    ]
  },
  {
    name: "TOLL COLLECT DATENAUSTAUSCHPLATTFORM",
    description: "Erstellung einer Middleware, welche über verschiedene Schnittstellen Daten für EETS@BAG bereitstellt. Erstellung einer Webanwendung zur Überwachung der Middleware.",
    position: "Developer",
    technologies: [
      "Java",
      "Spring",
      "Apache Wicket"
    ]
  },
  {
    name: "SE BLUE CHIP",
    description: "Erstellung einer Schnittstelle zwischen dem Enterprise Architext und Jira, um Toolketten des Strive Projekts besser nutzen zu können.",
    position: "Developer",
    technologies: [
      "Java"
    ]
  },
  {
    name: "Gangfolgesortierung",
    description: "Weiterentwicklung des GFS-Systems für die Erstellung und Überwachung von Sortierplänen im Bereich der Briefzustellung.",
    position: "Developer",
    technologies: [
      "Java",
      "Java Swing",
      "EJB2"
    ]
  },
  {
    name: "Auftragszentrum Lagerung und Nachsendung",
    description: "Entwicklung der AZLN-Anwendung zur Steuerung, Erfassung und Überwachung des Nachsende-Service für DP DHL.",
    position: "Developer, Tester",
    technologies: [
      "Java",
      "JavaScript",
      "Struts",
      "Selenium/Webdriver"
    ]
  },
  {
    name: "Toll Collect Service Middleware",
    description: "Entwicklung eines nachrichtenbasierten Service für die Toll Collect.",
    position: "Developer",
    technologies: [
      "Java",
      "Spring",
      "Apache Wicket"
    ]
  },
  {
    name: "Informationssystem Briefzustellung",
    description: "Projekt zur Steuerung des kompletten täglichen Zustellprozesses der Deutschen Post.",
    position: "Developer",
    technologies: [
      "Java"
    ]
  },
  {
    name: "Packstation Broker Wartung",
    description: "Wartung des Backend Systems für alle Packstationen der Deutschen Post.",
    position: "Developer",
    technologies: [
      "SQL"
    ]
  }
]
