interface Skills{
  technicalSkills: Skill[]
  softskills: Skill[]
  certs: Cert[]
}

interface Skill {
  name: string
  icon?: string
  percentage: number
}

interface Cert {
  name: string
  year: string
}

export const SKILLS: Skills = {
  technicalSkills: [
    {
      name: "Java",
      icon: "devicon-java-plain-wordmark",
      percentage: 90
    },
    {
      name: "Kotlin",
      icon: "devicon-kotlin-plain-wordmark",
      percentage: 70
    },
    {
      name: "Spring",
      icon: "devicon-spring-plain",
      percentage: 40
    },
    {
      name: "Selenium",
      icon: "devicon-selenium-original",
      percentage: 40
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain",
      percentage: 80
    },
    {
      name: "Typescript",
      icon: "devicon-typescript-plain",
      percentage: 80
    },
    {
      name: "Angular",
      icon: "devicon-angularjs-plain",
      percentage: 90
    },
    {
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain",
      percentage: 75
    }
    ,
    {
      name: "Python",
      icon: "devicon-python-plain",
      percentage: 40
    },
    {
      name: "Gradle",
      icon: "devicon-gradle-plain",
      percentage: 50
    },
    {
      name: "Docker",
      icon: "devicon-docker-plain-wordmark",
      percentage: 50
    },
    {
      name: "Git",
      icon: "devicon-git-plain",
      percentage: 75
    },
    {
      name: "IntelliJ",
      icon: "devicon-intellij-plain",
      percentage: 85
    },
    {
      name: "Postgres",
      icon: "devicon-postgresql-plain",
      percentage: 65
    },
    {
      name: "Oracle",
      icon: "devicon-oracle-original",
      percentage: 70
    },
    {
      name: "Jira",
      icon: "devicon-jira-plain-wordmark",
      percentage: 90
    },
    {
      name: "Confluence",
      icon: "devicon-confluence-original-wordmark",
      percentage: 90
    }
  ],

  softskills: [
    {
      name: "Kommunikationsfähigkeit",
      percentage: 95
    },
    {
      name: "Teamfähigkeit",
      percentage: 90
    },
    {
      name: "Belastbarkeit",
      percentage: 90
    },
    {
      name: "Kundenorientierung",
      percentage: 80
    }
  ],

  certs: [
    {
      name: "AZ-900 Azure Fundamentals",
      year: "2021"
    },
    {
      name: "iSAQB Certified Professional for Software Architecture",
      year: "2022"
    }
  ]
}
