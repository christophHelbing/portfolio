interface Skills{
  skills: Skill[]
}

interface Skill {
  name: string
  icon: string
  percentage: number
}

export const Skills: Skills = {
  skills: [
    {
      name: "Java",
      icon: "java",
      percentage: 90
    }
  ]
}
