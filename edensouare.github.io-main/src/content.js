export const projects = [
  {
    slug: 'lookism',
    title: 'Lookism',
    subtitle: 'Human-Robot Interaction',
    summary: 'Exploring social perception and bias in HRI through interactive prototypes.',
  },
  {
    slug: 'alzheimers-mri',
    title: 'Alzheimer MRI Disease Classification',
    subtitle: 'Cognitive and Neural Modeling',
    summary: 'ML-based classification of MRI data to support early detection research.',
  },
  {
    slug: 'meal-hopper',
    title: 'Meal Hopper',
    subtitle: 'Interaction Design: Human–Machine Interaction',
    summary: 'Designing a delightful food discovery experience with user-centered principles.',
  },
]

export const research = [
  {
    slug: 'text-classification',
    title: 'Text Classification of Research Articles',
    subtitle: 'Sungkyunkwan University AAA Lab Internship',
    summary: 'Applied NLP pipelines to organize and analyze academic texts at scale.',
  },
  {
    slug: 'conversational-agents',
    title: 'Developmentally Tailored Conversational Agents for Adolescents',
    subtitle: 'Experimental Research Project in Cognitive Science',
    summary: 'Investigating age-appropriate dialogue strategies for supportive AI agents.',
  },
  {
    slug: 'xcel-solutions',
    title: 'XCEL Solutions',
    subtitle: 'Quantitative UX Research',
    summary: 'Measuring user behavior and identifying key drivers of conversion.',
  },
]

export function getEntryBySlug(slug) {
  return projects.find(p => p.slug === slug) || research.find(r => r.slug === slug)
}
