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
    }
  ]
