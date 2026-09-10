export const projects = [
  {
    slug: 'lookism',
    title: 'Lookism',
    subtitle: 'Human-Robot Interaction',
    year: '2025',
    header:
      'Which has a greater impact on human trust in robots: human-like appearance or human-like internal traits such as humor, voice, and emotional responses?',
    tags: ['Human Robot Interaction', 'JavaScript', 'AI', 'Trust', 'Perception', 'Interface'],
    role: [
      'Interaction Engineer & Designer shaping human-like internal traits in a virtual robot prototype',
      'UX Researcher designing and conducting controlled experiments on human–robot trust in classroom environments',
    ],
    credits: [
      'Maximilian (Max) Henter',
      'Miu Hwang',
      'Shiyu (Sheryl) Sun',
      'Advised by Safinah Ali',
    ],
    motivation: [
        'As robots become more human-like, people begin to respond to them as social entities rather than tools. From early systems like ELIZA to modern LLMs, users often greet, thank, and even confide in AI despite knowing there is no human behind the interface.',
        'This raises a critical design question: what actually drives trust in robots? Is it how they look, or how they behave?',
        'In human-centered domains such as education and support systems, trust is essential. However, increasing realism in appearance can trigger discomfort (the uncanny valley) causing users to disengage. This creates a tension between designing for familiarity and avoiding unease.',
        'This project investigates how different forms of anthropomorphism influence trust, with the goal of informing more responsible and effective human-robot interaction design.',
    ],
    images: [
      'lookismExperimentDesign.jpg',
      'lookismRobotDesign.jpg',
      'lookismControl.jpg',
      'lookismHumanTrait.jpg',
      'lookismHumanAppearance.jpg',
    ],
    approach: [
      {
        heading: 'Comparative Trust Framework',
        text:
          'We designed a controlled experimental framework to isolate how different dimensions of anthropomorphism influence human trust in robots. Specifically, we separated external appearance from internal human-like traits (e.g., voice, humor, emotional responsiveness) to evaluate their independent effects. This allowed us to directly compare which factor plays a more significant role in shaping user trust.'
      },
      {
        heading: 'Anthropomorphic Trait Modeling',
        text:
          'We operationalized internal human-like traits through natural language tone, vocal delivery, and emotional expression. The system simulated conversational behaviors such as humor, empathy, and encouragement using human-like voice modulation and dialogue design. In contrast, appearance-based anthropomorphism was implemented through a realistic animated avatar with facial expressions but intentionally paired with a flat, emotionless voice to isolate visual influence.'
      },
      {
        heading: 'Controlled Multi-Condition Experiment Design',
        text:
          'Participants interacted with three distinct virtual robot assistants: A control condition with no human-like features (text-only, functional interaction); An internal-traits condition emphasizing voice, emotion, and personality; An appearance condition emphasizing human-like visual embodiment. Each robot delivered identical types of recommendations (e.g., travel, food, cultural activities), ensuring that only the mode of interaction varied. Interaction order was randomized to minimize bias.'
      },
      {
        heading: 'Trust Measurement & Data Collection',
        text:
          'Following each interaction, participants completed structured trust evaluations capturing initial impressions, willingness to follow recommendations, and relative trust ranking across agents. Both quantitative (Likert-scale ratings) and qualitative (open-ended responses) data were collected to capture not only levels of trust but also the reasoning behind user perceptions.'
      },
      {
        heading: 'Behavioral Insight Analysis',
        text:
          'We analyzed patterns in user responses to identify how different anthropomorphic cues influence perceived credibility, comfort, and reliability. Special attention was given to variability in responses—particularly the polarized reactions to human-like appearance—to better understand discomfort and the uncanny valley effect.'
      },
      {
        heading: 'Ethical Considerations Integration',
        text:
          'Given the persuasive potential of human-like robots, we incorporated an ethical lens into our approach. We evaluated risks such as overtrust, emotional manipulation, and dependency, ensuring that findings are contextualized within broader societal implications of anthropomorphic AI systems.'
      },
      {
        heading: 'Future Iteration Strategy',
        text:
          'Building on initial findings, future iterations focus on expanding interaction scenarios beyond single-session tasks; incorporating multimodal trust metrics (behavioral + physiological signals); testing across more diverse populations and real-world environments; and exploring how varying levels of autonomy further influence trust dynamics.'
      },
    ],
  },
  {
    slug: 'alzheimers-mri',
    title: 'Alzheimer MRI Disease Classification',
    subtitle: 'Cognitive and Neural Modeling Lab Project',
    year: '2025',
    header: 'How can machine learning support earlier and more accurate detection of Alzheimer’s disease?',
    tags: ['Machine Learning', 'Python', 'AI', "Alzheimer's", 'Convolutional Neural Network', 'EfficientNetB0'],
    role: [
        'Machine Learning Engineer developing and optimizing a CNN-based classification model',
        'Conducted model tuning (architecture depth, dropout, kernel size, epochs) to improve performance and generalization',
    ],
    credits: [
      'Gael Romero Arteaga',
      'Prasamsha (Samsha) Dahal',
      'Nadira Ullah',
      'Nour Demachkie',
      'Advised by Richard Golden',
    ],
    motivation: [
        'Early detection of Alzheimer’s disease is critical for effective intervention, yet diagnosis often relies on time-intensive clinical evaluation and multimodal data.',
        'This project explores how machine learning can assist in identifying and classifying Alzheimer’s stages using only MRI scans, making diagnostic support more accessible and scalable.',
        'By leveraging deep learning, we aim to bridge the gap between neuroscience and computational modeling, enabling faster, data-driven insights into neurodegenerative progression. The ability to accurately distinguish between stages (NonDemented to Moderate) has meaningful implications for treatment planning and patient care.',
    ],
    images: [
      'MRImethods1.jpg',
      'MRImethods2.jpg',
      'MRImethods3.jpg',
      'MRImethods4.jpg',
      'MRIresults1.jpg',
      'MRIresults2.jpg',
      'MRIresults3.jpg',
    ],
    approach: [
      { text: 'We developed a convolutional neural network (CNN) pipeline trained on MRI brain scans to classify Alzheimer’s progression across four stages.'},
      { heading: 'Model Development', text: 'The model was trained using an augmented MRI dataset, with hyperparameter tuning applied to improve efficiency and performance. A 2-fold cross-validation strategy ensured reliability across splits.' },
      { heading: 'Performance & Insights', text: 'The model achieved 79% test accuracy, 85% precision, and 71% recall, demonstrating strong capability in early-stage detection. High precision indicates reduced false positives (valuable in clinical contexts) while lower recall in later stages highlights dataset imbalance challenges.' },
      { heading: 'Comparative Context', text: 'While prior studies achieved higher accuracy (93–95%), they relied on multimodal inputs (MRI, PET, CSF). Our work demonstrates that single-modality MRI models can still yield meaningful diagnostic insight, especially in resource-constrained settings.' },
      { heading: 'Future Directions', text: 'Improving recall through balanced datasets and integrating multimodal inputs could further enhance model sensitivity and real-world applicability.' },
    ],
  },
  {
    slug: 'meal-hopper',
    title: 'Meal Hopper',
    subtitle: 'Interaction Design UX Project',
    year: '2024',
    header: 'How might we simplify grocery shopping through a seamless, real-time digital experience?',
    tags: ['UX Design', 'Figma', 'App', 'Interaction'],
    role: ['Interaction Designer developing end-to-end app prototype and user flows'],
    motivation: [
      'The pandemic fundamentally reshaped how people access food...accelerating reliance on delivery services and digital convenience.',
      'However, existing platforms often fragment the grocery experience, lacking real-time inventory visibility and seamless planning tools.',
      'Meal Hopper was designed to streamline this process—connecting users with local stores while simplifying how they browse, plan, and receive groceries.'
    ],
    images: ['MH1.jpg','MH2.jpg','MH3.jpg','MH4.jpg','MH5.jpg','MH6.jpg','MH7.jpg'],
    approach: [
      { heading: 'User-Centered Requirements', text: 'Defined key features including real-time inventory, personalized lists, and delivery tracking.' },
      { heading: 'Scenario-Based Design', text: 'Developed use cases ranging from weekly family shopping to recurring professional orders.' },
      { heading: 'Design Exploration', text: 'Iterated on interface concepts prioritizing clarity, accessibility, and efficiency.' },
      { heading: 'Prototype Development', text: 'Built a high-fidelity UI showcasing core workflows such as search, cart management, and delivery tracking.' },
      { heading: 'Final Specification', text: 'Established consistent design patterns and system behaviors to support scalable implementation.' },
    ],
  },
  {
    slug: 'comet-bites',
    title: 'Comet Bites',
    subtitle: 'Design Research Methods UX Project',
    year: '2026',
    header: 'Helping students at UT Dallas find free and affordable food in real time',
    tags: ['UX/UI', 'UX Research', 'App', 'Figma', 'A/B Testing', '5 Sec Test'],
    role: [
      'UX Researcher conducting 5-second tests and A/B tests to validate navigation and screen clarity',
      'Interaction Designer shaping user flows, MVP scope, and mid-to-high fidelity wireframes in Figma',
    ],
    credits: [
      'Karlie Ulloa',
      'Nu Nguyen',
      'Advised by Isi Barreiro',
    ],
    motivation: [
      "Food insecurity among college students is rarely just about cost. Through early research, we found that students often don't know where to find affordable or free food nearby, and when resources do exist, information is scattered, outdated, or hard to access.",
      'Beyond visibility, there is a quieter barrier: stigma. Students frequently feel embarrassed using campus food resources or are unsure whether they even qualify for support, which keeps them from seeking help even when it\'s available.',
      'We saw an opportunity to design something fast, discreet, and low-stress: a tool that removes the guesswork of finding food support rather than adding another app to compare and track.',
      'This project set out to answer a practical question: how might we help UTD students locate free or affordable food in real time, without the friction, confusion, or discomfort that currently stands in the way?',
    ],
    images: Array.from({ length: 10 }, (_, index) => `CB${index + 1}.jpg`),
    prototypeUrl: 'https://www.figma.com/proto/dDmZUTQK5K09C6DkTat301/Comet-Bites?node-id=109-873&p=f&t=jfpIVD3T66bIsQlw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=109%3A873&show-proto-sidebar=1',
    approach: [
      {
        heading: 'Problem Definition & Research Synthesis',
        text: 'We grounded the project in research evidence before designing anything. Findings showed students skip meals near the end of the month, feel embarrassed using campus food resources, remain unsure about eligibility and support options, and often resort to comparing prices across multiple apps just to get by. These insights shaped every decision that followed.',
      },
      {
        heading: 'MVP Scoping with Impact & Effort Prioritization',
        text: 'Using an impact and effort matrix, we identified which features delivered the most value with the least complexity. High-impact, low-effort features—like a food pantry locator, live availability map, and traffic-light stock status—were prioritized for the MVP, while features like budget tracking and social/community tools were intentionally excluded to keep the experience focused on the core need: finding food quickly.',
      },
      {
        heading: 'Feature-Driven User Flows',
        text: 'We mapped three core features—Real-Time Availability, an Information Center, and Community Reports—each tied to a specific user goal and rationale. Detailed user flows, such as locating the Comet Cupboard for available food, traced every decision point from opening the app to arriving at a location, ensuring the experience stayed clear and low-friction at each step.',
      },
      {
        heading: 'Mid-to-High Fidelity Wireframing',
        text: 'We iterated through wireframes in Figma, refining screens like the live map, location updates, and community reporting flow. Each version clarified how users select a food availability status (Plenty, Low, Empty) and submit updates, moving the interface from a rough structure to a polished, intuitive flow.',
      },
      {
        heading: '5-Second Testing & A/B Testing',
        text: 'We ran 5-second tests to check whether users could immediately grasp the purpose of key screens, such as the Community Page. Results showed users understood its connection to food and pantry updates, but that action labels needed to be more direct. We paired this with A/B testing to compare design variations, learning that users consistently preferred layouts with real-time context, simple status labels, and clear location information.',
      },
      {
        heading: 'Iteration Based on Testing Insights',
        text: 'Testing directly shaped our final design decisions. We rewrote vague action labels like "Post" into clearer, task-specific wording such as "Report Available Food," and made real-time availability more visually prominent so students could make confident decisions faster.',
      },
      {
        heading: 'Reflection & Future Growth',
        text: 'With more time, we would focus on improving real-time data accuracy, expanding food event reporting, and testing with a larger, more diverse group of UTD students to further validate and refine the experience.',
      },
    ],
  },
  {
    slug: 'seppit',
    title: 'Seppit',
    subtitle: 'Audio Stem Extraction Tool using ML',
    year: '2023',
    header: 'How can we give users full control over audio by separating sound into its core elements?',
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'MUSDB18'],
    role: ['AI/ML Mentee contributing to model experimentation and evaluation'],
    credits: [
      'Evelyn Tran',
      'Jonathan Lee',
      'Lucas Zheng',
      'Maunika Achanta',
      'Varshith Peddi',
      'Mentored by Michael Hellman',
    ],
    motivation: [
      'Audio is inherently complex. Once mixed, individual components like vocals, drums, and bass become difficult to isolate. Yet creators increasingly demand more control over sound for remixing, editing, and creative exploration.',
      'Seppit was built to address this challenge: enabling users to break down audio tracks into individual stems, opening new possibilities for manipulation and recomposition.',
    ],
    images: ['Seppit1.jpg','Seppit2.jpg','Seppit3.jpg','Seppit4.jpg','Seppit5.jpg','Seppit6.jpg','Seppit7.jpg','Seppit8.jpg'],
    approach: [

      { text: 'We approached audio separation by reframing sound as a visual problem.' },
      { heading: 'Spectrogram Representation', text: 'Audio signals were converted into spectrograms, transforming frequency and time into image-like data suitable for deep learning.' },
      { heading: 'Dataset', text: 'We used the MUSDB18 dataset, containing fully separated stems (vocals, drums, bass, other), allowing supervised training' },
      { heading: 'Model Architecture', text: 'A U-Net convolutional architecture was implemented:\n' },
      { list: [ 'Down-sampling layers compress feature representations', 'Up-sampling reconstructs outputs to original dimensions\n'] },
      { heading: '', text: 'Though designed for image segmentation, U-Net proved effective in isolating audio components due to the visual structure of spectrograms.' },
      { heading: 'Evaluation', text: 'Performance was measured using Signal-to-Distortion Ratio (SDR), comparing reconstructed outputs against ground truth stems.' },
      { heading: 'Results', test: 'After ~80,000 training iterations:'}, {list: ['Achieved balanced SDR performance across stems', 'Demonstrated feasibility of CNN-based audio separation despite modality differences' ] },
    ],
  },
]

export const research = [
  {
    slug: 'text-classification',
    title: 'Text Classification of Research Articles',
    subtitle: 'Sungkyunkwan University AAA Lab Internship',
    year: '2025-Current',
    header: 'How can machine learning streamline literature review in AI trust research?',
    tags: ['ML', 'Natural Language Processing', 'Text Classification', 'Python'],
    role: [
      'HCI Intern & Machine Learning Engineer developing classification pipeline',
    ],
    credits: ['Advised by Joo-Wha Hong and Hyo-Jeong Kim'],
    motivation: [
        'Literature reviews are essential but time-consuming...especially in rapidly evolving fields like AI trust and overreliance.',
        'This project aims to automate and streamline the screening process, enabling researchers to focus on analysis rather than manual filtering.'
    ],
    links: [
      { label: 'Research Internship Activity Report 2025', href: 'https://docs.google.com/document/d/1-aYKIvkNsrTSjclvHeCwmB61P5EOKFhDM5sBm7O0f28/edit?usp=sharing' }
    ],
    approach: [
      {
        heading: 'Pipeline Development', text: 'Built an end-to-end ML pipeline: preprocessing → TF-IDF → classification.' },
        {heading: 'Modeling', text: 'Evaluated multiple models; optimized Random Forest using grid search.' },
        {heading: 'Results', list: ['Identified 1,387 relevant articles', 'Generated structured datasets for analysis'] },
      {
        heading: 'Impact',
        list: [
          'Reduced manual screening workload',
          'Documented pipeline enables reproducibility',
        ]
      },
    ],
    ongoing: [
      'Prototyped GPT-4o integration to enhance article screening efficiency:',
      'Developed API-based abstract analysis workflow',
      'Currently conducting pilot tests...'
    ],
  },
  {
    slug: 'conversational-agents',
    title: 'Developmentally Tailored Conversational Agents for Adolescents',
    subtitle: 'Experimental Research Project in Cognitive Science',
    year: '2025',
    header: 'How should AI communication adapt to different stages of adolescent development?',
    tags: ['Chat-bots', 'HCI', 'AI', 'R'],
    role: ['HCI Researcher studying adolescent interaction with conversational agents'],
    credits: ['Advised by Annelise Pesch'],
    motivation: [
      'Adolescents interact with AI differently than adults, shaped by developmental changes in cognition, identity, and emotional needs.',
      'As conversational agents increasingly provide support, designing them without considering age-specific differences risks misalignment and reduced effectiveness.',
      'This research investigates how communication style, credibility, and emotional tone should adapt across developmental stages.'
    ],
    images: ['Research Poster.jpg'],
    links: [
      { label: 'Research Paper', href: 'https://docs.google.com/document/d/1-uk72wUPSOmMh_oQozi3_pKNSLfIyroS/edit?usp=sharing&ouid=116134093223350808188&rtpof=true&sd=true' }
    ],
  },
  {
    slug: 'xcel-solutions',
    title: 'XCEL Solutions',
    subtitle: 'Quantitative UX Research',
    year: '2025',
    header:
      'How can we reduce friction in finding academic information through data-driven UX design?',
    tags: ['Quant UX', 'UX Research', 'A/B Testing', 'AI', 'ML', 'Python'],
    role: ['User experience researcher conducting experimental studies and usability evaluations'],
    credits: [
      'Samuel Teshome',
      'Angelin Nguyen',
      'Gael Romero Arteaga',
      'Advised by Leonardo W Estevez',
    ],
    motivation: ['Finding academic program information should be intuitive, but many university websites create friction, slowing decision-making and reducing engagement.', 'This project focuses on optimizing how users navigate the UTD website to locate graduate program requirements, with the broader goal of improving accessibility and increasing enrollment.'],
    images: ['XCEL1.jpg','XCEL2.jpg','XCEL3.jpg','XCEL4.jpg'],
    approach: [
      { heading: 'Research Design', text: 'Conducted A/B testing comparing desktop and mobile interfaces.' },
      { heading: 'Metrics', text: 'Measured task success, completion time, and user familiarity.' },
      { heading: 'Participants', text: 'Diverse student group across majors and experience levels.' },
      { heading: 'Key Findings', list: [ 'Mobile interfaces and dropdown navigation significantly reduced task time', 'Structured filtering improved efficiency and satisfaction' ] },
      { heading: 'Outcome', text: 'Validated that interaction design choices directly impact user performance and institutional goals.' },
    ],
  },
]

export function getEntryBySlug(slug) {
  return projects.find(p => p.slug === slug) || research.find(r => r.slug === slug)
}
