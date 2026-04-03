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
