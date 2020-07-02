export interface Activity {
  date: string
  title: string
  subtitle: string
  description: string
}

export interface Experience {
  title: string
  activities: Activity[]
}
