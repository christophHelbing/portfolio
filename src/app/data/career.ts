interface Career {
  carrerSteps: CareerStep[]
}

interface CareerStep {
  companyName: string
  durationFrom: Date
  durationTo: Date
  jobTitle: string
  jobDesciption: string
}

export const CAREER: Career = {
  carrerSteps: [
    {
      companyName: "CONET ISB GmbH",
      durationFrom: new Date(2021, 9, 1),
      durationTo: new Date(),
      jobTitle: "Fullstack-Software-Entwickler",
      jobDesciption: "Software-Entwicklung im Bereich E-Government."
    },
    {
      companyName: "T-Systems International GmbH",
      durationFrom: new Date(2011, 9, 1),
      durationTo: new Date(2021, 9, 1),
      jobTitle: "Systems Engineer",
      jobDesciption: "Software-Entwicklung in verschiedenen Projekten im Logistikbereich."
    },
    {
      companyName: "T-Systems Multimedia Solutions GmbH",
      durationFrom: new Date(2008, 9, 1),
      durationTo: new Date(2011, 9, 1),
      jobTitle: "BA-Student",
      jobDesciption: "Duales Studium für Informationstechnik an der Berufsakademie in Sachsen."
    }
  ]
}
