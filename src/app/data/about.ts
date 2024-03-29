interface About {
  introduction: string
  graduate: string
  city: string
  birthday: Date
  mail: string
  xingLink: string
  githubLink: string
  linkedInLink: string
  motivationText: string
}

export const ABOUT: About = {
  introduction: "Seit 2011 bin ich als Software-Entwickler tätig. Anfangs mit dem Schwerpunkt der Frontend-Entwicklung, " +
    "konnte ich in den vergangenen Jahren umfangreiche Kenntnisse als Fullstack-Entwickler sammeln. " +
    "Technologisch liegt mein Schwerpunkt auf JVM-basierten Systemen im Backend und Angular/Typescript im Frontend.",
  graduate: "Dipl. Ing. Informationstechnik (BA)",
  city: "Bad Düben, Sachsen",
  birthday: new Date(1988, 6, 4),
  mail: "kontakt@christoph-helbing.de",
  xingLink: "https://www.xing.com/profile/Christoph_Helbing5",
  githubLink: "https://github.com/christophHelbing",
  linkedInLink: "https://www.linkedin.com/in/christoph-helbing/",
  motivationText: "Als flexibler und wissbegieriger Mensch bin ich stets daran interessiert, meine Kenntnisse und mein Wissensspektrum" +
    " zu erweitern. Daher stehe ich neuen Technologien offen gegenüber. Mit viel Freude und Engagement widme ich mich " +
    "den Problemlösungen neuer komplexer Aufgabenstellungen, um so mein technologisches und fachliches Wissen stetig zu erweitern."
}
