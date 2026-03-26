// projectData.js
const projects = [
    {
      id: 1,
      title: 'Mujigae (Rainbow)',
      shortDescription: 'GenAI powered personalized emotion learning system for autism spectrum disorder(ASD) children',
      year: '2024',
      tag: ['AI', 'Learning', 'Interface'],
      pdfLink: null,
      gitLink: 'https://github.com/SBleeyouk/sixsense',
      thumbnail: '/src/thumbnail-01.gif',
      question: 'How can we support individuals with autism spectrum disorder for training emotional communication?',
      motivation: [{
        label: '',
        description: 'Globally, 1 in 37 people is on the autism spectrum disorder(ASD), and in South Korea, the registered population with ASD has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years old, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
      }
      ],
      approach: [
        {
          label: 'Collaborative Framework',
          description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
        },
        {
          label: 'Emotion Word Extraction & Generation',
          description: 'Emotional vocabulary is extracted from teacher-prepared notes or diaries co-written with caregivers. The system generates context-appropriate images and music. We built a custom dataset of emotional vocabulary, situational descriptions, and corresponding music for special education, fine-tuning Meta MusicGen for this purpose.'
        },
        {
          label: 'Real-Time Facial Expression Mapping',
          description: "The system maps the child’s facial expressions to a 3D character’s expressions in real time. Using a hybrid model of ResNet and Vision Transformer (ViT) trained on the RAF-DB dataset, it enables accurate expression recognition. For facial landmark extraction, High-Resolution Networks (HRNets) trained on the HFLW dataset were used. Expression similarity is calculated through the squared sum of differences between teacher character and user landmarks, while gaze tracking monitors focus to adjust training speed and difficulty.",
        },
        {
          label: 'Personalized Curriculum & Feedback',
          description: 'Based on learned data, the system provides a personalized curriculum, tracking progress and offering tailored feedback on emotional training outcomes.'
        },
        {
          label: 'Future Work',
          description: 'In collaboration with special schools and therapy centers, we fine-tune training parameters based on expert diagnostics. The system is further expanded to integrate with personal robots, fostering emotional communication research.'
        }
      ],
      motivationSrc: [
        'https://www.youtube.com/embed/NLXxJixbfCA?si=E3sNHadrIll1lJC5',
        '/src/prj01-ppt-01.png',
        '/src/prj01-ppt-02.png',
        '/src/prj01-ppt-03.png',
      ],
      approachSrc: [
        'https://storage.googleapis.com/saetbyeol-images/prj01-detail-03.png',
        'https://storage.googleapis.com/saetbyeol-images/prj01-detail-04.png',
        'https://storage.googleapis.com/saetbyeol-images/prj01-detail-06.jpg',
        'https://storage.googleapis.com/saetbyeol-images/prj01-detail-07.png',
      ],
      additionalSrc: [
      ],
      roles: ['Team Lead', 'AI Engineer for fine-tuning Language-Music Generation Model (Meta MusicGen)', 'Full-stack web developer integrating gaze and face landmark tracking.', 'Researcher conducting formative studies and system evaluations in a special school'],
      credits:['Jimin Yoon', 'Jeunghyun Kim', 'Sumin Kim', 'Advised by Jeonguk Ha'],
      awards:['National Capstone Design Awards, National Research Foundation&Ministry of Education','IITP President’s Award, GenAI SW Competition, Ministry of Science and ICT', 'Grand Award, Sogang Integrated Technology & Engineering Contest'],
      funded:['National Research Foundation(NRF)'],
    },
    {
      id: 2,
      title: 'Franklin',
      shortDescription: 'Gender Debiased Korean Fairytale Generator',
      year: '2022',
      tag: ['AI', 'Social Justice', 'Interface', 'Research'],
      pdfLink: ['http://journal.dcs.or.kr/xml/37344/37344.pdf'],
      thumbnail: '/src/thumbnail-02.png',
      question: 'Why all fairytale girls want party, while all fairytale boys fight with dragons? ',
      motivation: [{
        label: 'Every child can be the character in a fairytale!',
        description: 'Franklin is an interactive AI-powered service that empowers children to become the protagonists and authors of their own fairy tales. Designed to inspire infinite imagination and dreams, Franklin challenges traditional fairy tale norms that often reinforce gender stereotypes and social prejudices. In Franklin’s world, boys can dance in skirts, girls can defeat dragons, and all children can simply be themselves, free from expectations of how to think or act “manly” or “feminine.”'
      }
      ],
      approach: [
        {
          label: 'Model Fine-Tuning',
          description: 'Franklin employs a curated Korean fairy tale dataset, meticulously cleansed of explicit hate speech, profanity, and unethical content. This ensures that the AI produces stories free from harmful biases.'
        },
        {
          label: 'Ethical Word Embedding',
          description: 'By calculating the gender axis through vector analysis of gendered pairs and neutralizing directional components in indirectly gendered terms, this approach reduced cosine similarity scores between gendered associations by 90%. It enabled the creation of stories with characters defying traditional gender roles, such as a prince in red heels and a grandmother as Santa Claus. '
        },
        {
          label: 'Story Creation Through Transformative Abstraction',
          description: 'With the advent of large generative models, detailed images, texts, and videos can now be produced from simple prompts, shifting the focus of human creativity toward transformative abstraction. In the AI era, creativity is no longer just about the outcome but about how the process itself can spark creative thinking. To maximize this, Franklin’s interactions are designed following playful design principles. Children provide story and character settings, and Franklin generates subsequent sentences. Through interactive play, children can use, modify, or propose specific directions for the story, fostering creativity and engagement while exploring the transformative process of storytelling.',
        },
      ],
      motivationSrc: [
        'https://storage.googleapis.com/saetbyeol-images/prj02-detail-01.png',
        'https://storage.googleapis.com/saetbyeol-images/prj02-detail-02.png',
        'https://storage.googleapis.com/saetbyeol-images/prj02-detail-03.png',
      ],
      approachSrc: [
        'https://storage.googleapis.com/saetbyeol-images/prj02-detail-04.png',
        'https://storage.googleapis.com/saetbyeol-images/prj02-detail-05.png',
      ],
      additionalSrc: [
      ],
      roles: ['Led research on mitigating gender bias in large Korean GPT models', 'Developed debiased word embeddings and data augmentation pipeline', 'Conducted fairness evaluation research', 'Full-Stack Developer', 'Designed interaction and system architecture for an AI co-authoring platform'],
      credits:['Jiin An','Yewon Jang','Advised by Dasaem Jeong'],
      awards:['Excellence Award, HCI Korea Creative Award Capstone Project','Grand Award, Sogang Integrated Technology & Engineering Contest'],
      funded:['Smilegate Membership for AI', 'National Research Foundation(NRF)'],
    },
    {
        id: 3,
        title: 'Fake the Deepfake',
        shortDescription: 'System to assist activists in tracking and investigating deepfake sexual crimes on Telegram',
        year: '2024',
        tag: ['AI', 'Social Justice', 'Interface', 'Research','Individual'],
        pdfLink: null,
        thumbnail: '/src/thumbnail-04.png',
        question: 'How can we support activists in dismantling the deepfake sexual crime cartel, while reducing their PTSD?',
        motivation: [{
          label: '',
          description: 'South Korea has faced severe challenges with digital sexual crime cartels on Telegram, including the 2020 "Nth Room" incident and the 2024 Deepfake Porn Cartel. These cases exploited victims, often minors, for profit while sharing personal information and categorizing them by region and school. Activists, such as Team Fire, have played a critical role in uncovering these crimes, as law enforcement faces significant obstacles due to Telegram’s anonymity and limited resources. However, these undercover efforts expose activists to sexually exploitative content and force them to engage in conversations that degrade victims, leading to severe psychological trauma, with 75% experiencing burnout and PTSD.'
        }
        ],
        approach: [
          {
            label: '',
            description: 'To address these challenges, I developed <Fake the Deepfake>, an automated Telegram persona bot that integrates activists’ undercover tracking strategies. <Fake the Deepfake> engages perpetrators, gathers evidence shared in chat rooms, and collects profile information of participants. By automating key parts of the investigation process, <Fake the Deepfake> supports activists and investigators in tracking digital sexual crime cartels while mitigating their exposure to harmful content and reducing emotional burden. This project is targeting 2026 FAccT.',
          },
        ],
        motivationSrc: [
          '/src/prj04-ppt-01.png'

        ],
        approachSrc: [

        ],
        roles: ['Conducted formative study with activists', 'Designed system and Language-Computer Vision pipeline for automated proof gathering during investigations', 'Developed a CLIP-based video filtering pipeline to reduce PTSD risk'],
        credits:['Ongoing Individual Graduation Capstone Project', 'Advised by Sangyong Kim & Joseph Seering'],
        awards:'',
        funded:['National Research Foundation(NRF)'],
    },
    {
      id: 4,
      title: 'Testimony Continues',
      shortDescription: 'AI+Data Media art gathering civic memories of unrecorded sexual slavery victims for the Japanese imperial army during World War II.',
      year: '2023',
      tag: ['AI', 'Social Justice', 'Media Art'],
      pdfLink: null,
      thumbnail: 'https://storage.googleapis.com/saetbyeol-images/thumbnail-03.gif',
      question: "Can AI preserve and amplify civic society's collective memory of sexual slavery victims for the Japanese imperial army, after the last survivor is gone?",
      motivation: [{
        label: 'The subjects, contents, and conditions of collective memory are determined by society and are inherently subject to changes in the social environment, thus embodying a ‘reconstructive’ nature. As such, collective memory is actively reshaped through our practices of remembrance, and it plays a pivotal role in shaping our identity. (Maurice Halbwachs)\n\n',
        description: 'Our journey began with a critical question: How do future generations remember the tragedy of comfort women after the last survivor is gone? Why is our collective memory confined to a binary view of victims—either as young girls (소녀) or as elderly grandmothers (할머니)? \nWe set out to uncover the stories of forgotten victims, focusing on the time after the war ended. This period reveals diverse experiences: victim who lived abroad, those subjected to further exploitation, and others silenced by patriarchy or political tensions between South and North Korea. These overlooked narratives inspired us to leverage technology to preserve and honor their memoriesBy using AI as a medium for reconstructive civic memory, we aim to bridge past and present, ensuring these stories are remembered, shared, and woven into our collective consciousness.'
      }
      ],
      approach: [
        {
          label: 'Legacy Testimony of a New Generation',
          description: 
            "In 2023, sixty-four women who participated in our exhibition used their voices to narrate the untold stories of four Japanese military sexual slavery victims absent from official records. We call this the legacy testimony of a new generation."
        },
        {
          label:'Memory Capsule',
          description: "Each participant receives a capsule inscribed with a unique number. As individual memories converge, they form a collective light that illuminates the stories of forgotten victims. When participants connect their capsules, the light within ignites, signaling the start of testimony recording.",
        },
        {
          label: '3D Web Storytelling',
          description: 
            "Through a 3D web experience, participants explore the victims' remaining rooms and trace their post-slavery lives. By responding to questions, they are encouraged to reflect on Japanese military sexual slavery beyond international relations, focusing instead on the victims' post-trauma lives and society’s selective memory. This interactive journey prompts deeper understanding and critical engagement with overlooked narratives."
        },
        {
          label: 'AI as Collective Memory',
          description: 
            "The AI model, fine-tuned with official records and news reports on Japanese military sexual slavery, learns in real time from participants' reports recorded through the 3D web. AI organizes and accumulates these inputs into a collective testimony, serving as a bridge between past and future. By expanding the spectrum of victim stories, AI becomes a medium for reconstructing civic memory, ensuring these voices endure and evolve across generations."
        },
        {
          label: '',
          description: 
            "Presented in the international showcase with UCLA, SFSU, and CSUN as a CARE scholarship recipient."
        }
      ],
      motivationSrc: [
      'https://www.youtube.com/embed/XdfdZNwphRo?si=aMBHZoXo9RwCujPW',
      '/src/prj03-ppt-01.png',
      'https://storage.googleapis.com/saetbyeol-images/prj03-detail-02.png',
      'https://storage.googleapis.com/saetbyeol-images/prj03-detail-03.png',
      'https://storage.googleapis.com/saetbyeol-images/prj03-detail-04.png',
      'https://storage.googleapis.com/saetbyeol-images/prj03-detail-05.png',
      'https://storage.googleapis.com/saetbyeol-images/prj03-detail-06.png',
      'https://storage.googleapis.com/saetbyeol-images/prj03-detail-07.png',
      ],
      approachSrc: [
      '/src/prj03-ppt-03.png',
      'https://storage.googleapis.com/saetbyeol-images/prj03-detail-08.png',
      'https://storage.googleapis.com/saetbyeol-images/prj03-detail-09.png',
      'https://www.youtube.com/embed/11ZCdRVnhwg?si=4-DOiRTXuvmgD0rV&amp;start=1446',
      ],
      roles: ['Team Lead', 'Developed AI pipeline to generate collective testimonies using real-time audience data', 'Conducted research on unrecorded victims, testimonies, and collective memory to design 3D web storytelling', 'Planned and managed a multidisciplinary team including an interface design engineer, 3D artist, backend developer, frontend developer, and floor designer'],
      credits:['Chaeyeong Ryu','Kyubeom Shim','Eugene Nam', 'Namjoon Cho','Hyucho Kim', 'Advised by Jusub Kim & Sangyong Kim'],
      awards:['Excellence Award, Art With Impact, Art with Impact Committee'],
      funded:['CARE(Comfort Women Action for Redress and Education)'],
    },
    {
      id: 6,
      title: 'Guardian of Makers',
      shortDescription: 'Safely guide Y10-12 students to learn to try and fail via maker ed after school with Google AI',
      year: '2024',
      tag: ['AI', 'Learning', 'Interface'],
      gitLink: 'https://github.com/SBleeyouk/guardian-of-makers?tab=readme-ov-file',
      thumbnail: '/src/thumbnail-05.gif',
      question: "How can we design systems that encourage young makers to embrace failure and experiment freely?",
      motivation: [
        {
          label: '‘Maker education is more than just making – it’s learning trial and failure, just like real world.’',
          description: ' (Richard Brown, Imperial Making Lab, Apr 2024.) Students learn more deeply when they can apply classroom-gathered knowledge to real-world problems. Asking questions helps students transfer their learning to new kinds of situations, including ones outside of the classroom (Barron & Darling-Hammond, 2008). Fostering the maker mindset through education is a fundamentally human project-- to support the growth and development of another person not just physically, but mentally and emotionally" (Dougherty, 2013).'
        }
      ],
      approach: [

        {
          label: '"Soldering iron is just lying on the desk. You should turn it off while you’re not using it"',
          description: 'Safety intervention notifies student about potential danger based on vision input.'
        },
        {
          label: '"What interesting project can I undertake with the components I have?"',
          description: 'Recommends potential project that’s available or suitable for student based on components they have and their previous projects.'
        },
        {
          label: '"How should I wire this compoenent with my arduino?"',
          description: 'Components information and wiring explains the function of the component and how to wire it according to the component documentation, based on vision.'
        },
      ],
      motivationSrc: [
      'https://player.vimeo.com/video/942240615?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      ],
      approachSrc: [
        'https://storage.googleapis.com/saetbyeol-images/prj05-detail-01.png',
        'https://storage.googleapis.com/saetbyeol-images/prj05-detail-02.png',
        'https://storage.googleapis.com/saetbyeol-images/prj05-detail-03.png',
      ],
      roles:['Led AI and web development using Google Gemini API'],
      credits:['Chanwoo Lee'],
      awards:'',
      funded:['Individual Project for Google AI Hackathon'],
    },
  {
    id: 8,
    title: 'Video Digest: Personalizing Instructional Video Viewing',
    shortDescription: 'KIXLAB undergraduate internship project',
    year: '2024',
    tag: ['AI', 'Interface', 'Learning', 'Research'],
    pdfLink: null,
    thumbnail: '/src/thumbnail-08.png',
    question: 'How can we design personalized learning paths for learners in multi-video transitioning environments?',
    motivation: [{
      label: '',
      description: 'Tutorial videos are a rich resource for learning procedural tasks, but their rigid format and the abundance of similar tutorials make selection and comprehension difficult. Identifying unique information and procedural differences between videos is especially challenging. To overcome this, I developed a pipeline using a large multimodal model and computer vision to (1) organize procedural content from multiple tutorials, (2) detect and compare differences between them, and (3) provide intuitive navigation and on-demand explanations for better understanding.'
    }
    ],
    approach: [
      {
        label: '',
        description: 'This project is targeting 2025 DIS.'
      }
    ],
    motivationSrc: [
    ],
    approachSrc: [
    ],
    roles: [
      'Designed interaction system with Language-Video Model(LVM) to enhance personalized learning experience.',
      'Researched on personalized learning path based on formative study findings and educational theories ("procedural flexibility" and "learning by comparison") and psychological theories ("metacognitive theories")',
      'Designed user studies, assessing system effectiveness and validating its impact',
      'Developed and optimized LVM-based prompt engineering to enhance system performance, ensuring clear information hierarchy and intuitive user interactions with a focus on usability and novelty'
      ],
    credits:['Bekzat Tilekbay','Alex Suryapranata','Saelyne Yang','Advised by Juho Kim'],
    awards:'',
    funded:['Korea Ministry of Science and ICT','National SW STAR Lab Project Grant by IITP'],
  },
  {
    id: 9,
    title: 'Nth Room and National Assembly',
    shortDescription: 'Data analysis of digital sex crime legislation trends in the National Assembly from the 13th to 21st sessions',
    year: '2021',
    tag: ['Social Justice', 'Individual'],
    gitLink: 'https://dacon.io/competitions/official/235679/codeshare/2028',
    thumbnail: '/src/thumbnail-09.png',
    question: 'How have lawmakers’ perceptions of sex crime victims evolved, and how has this been reflected in legislation?',
    motivation: [{
      label: '',
      description: 'Since 2019, the "N번방" crime has been a significant issue in South Korea, prompting analysis on legislative responses to digital sex crimes.'
    }
    ],
    approach: [
      {
        label: '',
        description: 'This project explored changes in bill content from the 13th to 21st National Assembly, surrounding digital sex crimes before and after the Nth room crime. Applied text analysis techniques like Wordcloud visualization, topic modeling, and Word2Vec similarity measures. It assessed shifts in lawmakers perceptions towards victims, especially `women`, `adolescents`, and `children`, to see if perceptions have evolved post-scandal. Although centered on the N번방 case, the findings offer insights into the broader impact of public concern on legislative actions.'
      }
    ],
    motivationSrc: [
    ],
    approachSrc: [
    ],
    roles: [
      'Data Scientist'
      ],
    credits:['Haram Park', 'Advised by Haklae Kim'],
    awards:['Bronze Award, National Assembly Big Data Visualization Competition, Dacon Korea '],
    funded:['Individual Project for Text Mining Course']
  },
  {
    id: 10,
    title: 'Barrier Free Music Composing App',
    shortDescription: 'Arduino + Wekniator based Facial expression capturing music composer',
    year: '2022',
    tag: ['AI', 'Interface', 'Individual'],
    pdfLink: null,
    thumbnail: '/src/thumbnail-10.gif',
    question: 'How can we make music accessible to people with hearing loss?',
    motivation: [{
      label: 'Music for Individuals with Hearing Loss',
      description: 'TPeople with hearing loss experience music through sight and touch, such as performances where lyrics are interpreted in sign language or using woofer vests that convey vibrations. Music is not limited to hearing—it can be enjoyed in diverse ways: hearing, seeing, and touching. However, the idea of individuals with hearing loss composing music remains uncommon. By embracing how they interact with music, we can explore new methods that enable everyone to create their own songs.'
    }
    ],
    approach: [
      {
        label: 'Barrier-Free Music Composing App',
        description: 'This project seeks to break the barriers to music composition by leveraging diverse ways to experience music. It visualizes and reinterprets music in silence, making composition accessible to all.'
      }
    ],
    motivationSrc: [
      '/src/prj10-detail-01.png',
      '/src/prj10-detail-02.png'
    ],
    approachSrc: [
    ],
    roles: [
      'Developed a processing application that integrates Wekinator facial signal inputs and generates outputs for Arduino-controlled vibrators and music.'
      ],
    credits:'',
    awards:'',
    funded:['Individual Project for Creative Algorithm Course'],
  },
  {
    id: 7,
    title: 'the dOXr',
    shortDescription: 'Microsoft Holo-lens based media art exploring modern existentialism',
    year: '2022',
    tag: ['Media Art'],
    pdfLink: null,
    thumbnail: '/src/thumbnail-07.gif',
    question: 'How can XR-augmented reality reveal deeper truths about our lives?',
    motivation: [{
      label: '',
      description: 'Inspired by Myth of Sisyphus, this XR media art explores how XR can expand the philosophy of nihilism while questioning the purpose of function and the value of existence in a capitalist society. In the repetitive cycles of daily life, how can we find meaning? Can XR, as a medium that layers reality with new dimensions, reveal deeper truths about the essence of life?'
    }
    ],
    approach: [
      {
        label: '',
        description: 'Using MS HoloLens, participants must solve missions to escape the "Age of Loss." The experience presents 3D sculptures, objects, and sounds—all devoid of inherent meaning or function. Participants encounter surreal elements like Sisyphus, a cup that cannot hold water, a fish with legs, and a desk incapable of supporting books. These absurd objects challenge the participant’s perception of purpose and invite them to confront existential questions through an immersive XR environment.'
      },
    ],
    motivationSrc: [
      '/src/prj07-detail-00.jpg',
      '/src/prj07-detail-01.jpg',
      '/src/prj07-detail-02.png',
      '/src/prj07-detail-03.png',
      '/src/prj07-detail-04.png',
      '/src/prj07-detail-05.png',
      '/src/prj07-detail-06.png',
    ],
    approachSrc: [
      'https://www.youtube.com/embed/bbBC4r61OWM?si=yAw7XFCclEKlRBo4&amp'
    ],
    roles: ['Team <Efimero> Lead', 'Story & Visual Director, responsible for scene storytelling, user flow, and level design', 'Planned and managed a multidisciplinary team, including a Unity developer, 3D artist, and floor designer'],
    credits:['Taehyun Kim', 'Jisoo Kang', 'Woojung Kim'],
    awards: null,
    funded:['Seoul Artists’ Platform_New&Young'],
  },
  {
    id: 5,
    title: 'Find Me',
    shortDescription: 'GPS-based XR game fostering civic engagement through immersive storytelling of socio-political sites',
    year: '2022',
    tag: ['AI', 'Social Justice', 'Media Art'],
    pdfLink: null,
    thumbnail: '/src/thumbnail-06.png',
    question: 'Why do future humanoid robots mimic stereotypical feminine traits, and how can we reimagine them through a queering perspective?',
    motivation: [{
      label: 'XRpolis ',
      description: 'explores the hidden stories of marginalized groups in urban spaces through an engaging AR game. By layering augmented reality onto real-world locations, XRpolis aims to shed light on the unseen facets of cities, transforming them into immersive narratives. The ultimate goal is to pioneer a game-based AR social platform that lowers the barriers to civic engagement.'
    },
    {
      label:'',
      description:'Traditionally, social participation has required significant effort and understanding, often confined to protests, campaigns, or specialized advocacy. XRpolis, however, brings social issues closer to people’s everyday lives through the accessible and enjoyable medium of AR gaming. By integrating interactive storytelling, the project fosters empathy and raises awareness of pressing societal problems in a fun, relatable way.',
    },
    {
      label:'Our first game location is Seoul City Hall',
      description:'a site that annually hosts the Seoul Queer Parade. This choice honors the symbolic significance of the space while weaving a futuristic narrative that reflects real-world issues. Although set in a distant future, the game’s elements mirror challenges faced today. Through the lens of science fiction, XRpolis questions societal norms, such as the perceived "naturalness" of heterosexual love or the stereotypical portrayal of AI robots as calm and gentle women.',
    },
    {
      label:'',
      description:'By sparking critical thought and dialogue, XRpolis invites players to reflect on these norms, ultimately broadening discussions beyond the game and into the real world. This project reimagines how games can inspire meaningful social conversations and civic action.',
    }
    ],
    approach: [
      {
        label: 'Queering Perspectives on Humanoid Robots',
        description: 'This research employs two strategies to expand the conventional narratives of queerness. First, the story is set in the year 2050, centering on the love between a human woman and an AI represented as a woman. By exploring the relationship between a human and a "female-representing" robot, the narrative highlights that queerness is not solely about human sexual identity but also about how gender is represented in society.'
      },
      {
        label: '',
        description:'Second, a supplementary storyline in the game depicts the cognitive development of an AI humanoid robot. Represented as a woman, the robot replaces human labor yet remains fully subjugated and denied citizenship. The story portrays how this robot becomes aware of the "system of exclusion" in society. Ultimately, through the love between the protagonist, Harriet, and the humanoid robot, the narrative challenges societal structures of exclusion, questioning the systemic responsibility for the marginalization of women and queer individuals.',
      },
      {
        label:'AR Gameplay: <Find Me>',
        description:'Using the Unity engine, the game <Find Me> features six AR scenes, each tied to a specific location around Seoul City Hall. GPS tracking, enabled by AR Location, identifies the player`s position and activates AR interactions specific to that site. Players solve missions at key spots, uncovering hints that guide them to the next location and mission.'
      },
      {
        label:'',
        description:'At each site, the player’s GPS coordinates trigger augmented objects that can be manipulated—such as being picked up or rotated—to reveal clues. These interactive AR elements are central to solving the missions and progressing through the game. By linking real-world locations to immersive storytelling, "Find Me" creates a dynamic and engaging experience for players.'
      }
    ],
    motivationSrc: [
      '/src/prj06-ppt-01.png',
      '/src/prj06-ppt-02.png',
      'https://storage.googleapis.com/saetbyeol-images/prj06-detail-01.png',
      'https://storage.googleapis.com/saetbyeol-images/prj06-detail-03.png',
      'https://storage.googleapis.com/saetbyeol-images/prj06-detail-04.png'
    ],
    approachSrc: [
      'https://www.youtube.com/embed/TVG1O2Yh4fc?si=QWFudHgYuwFzzuex&amp;start=1',
      'https://storage.googleapis.com/saetbyeol-images/prj06-detail-05.png'
    ],
    roles: [
      'Team Lead',
      'Led research and narrative design for a science fiction game exploring the reproduction of gender bias in AI-humanoid robotics, integrating the story with game architecture, user flow, and level design',
      'Directed the design and development of a GPS-based interactive XR game using Unity'
    ],
    credits:['Dabin Yoo', 'Woosuk Shin', 'Changyup Oh', 'Dagun Yoo'],
    awards:['Silver Award, Global Indie Game Development Contest, Korea Game Developer Association'],
    funded:['SYK Grant','National Research Foundation(NRF)'],
  },
  ];

  
  export const getProjectById = (id) => projects.find((project) => project.id === id);
  
  export default projects;
  