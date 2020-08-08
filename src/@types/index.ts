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

export interface FormValues {
  name: string
  email: string
  company: string
  country: string
  message: string
}
