export const projects = [
  {
    slug: 'nasa-space-explorer',
    title: 'NASA Space Explorer',
    subtitle: 'Science Discovery Through Responsive Design & Web Development',
    year: '2026',
    header: 'How might we turn NASA’s daily space imagery into an approachable discovery experience across devices and connection conditions?',
    tags: ['Interaction Design', 'Responsive Design', 'React', 'JavaScript', 'REST APIs', 'PWA'],
    role: [
      'Designer & Front-End Developer building an interactive NASA image explorer, integrating the Astronomy Picture of the Day API and applying NASA’s brand guidelines across desktop and mobile',
    ],
    images: [
      {
        src: 'images/nasa-space-explorer/nasa-gallery.jpg',
        alt: 'NASA Space Explorer showing date filters and a gallery of space images',
        caption: 'Date-range filters and image cards provide a clear path from selecting a period to discovering NASA content.',
      },
      {
        src: 'images/nasa-space-explorer/nasa-image-details.jpg',
        alt: 'An image detail modal showing NGC 7129 with its date and scientific explanation',
        caption: 'Selecting an image reveals its scientific context while keeping the gallery available in the background.',
      },
      {
        src: 'images/nasa-space-explorer/nasa-install-guidance.jpg',
        alt: 'NASA Space Explorer displaying installation guidance alongside notification controls',
        caption: 'Installation guidance helps visitors understand how to access the app from their device’s Home Screen.',
      },
    ],
    motivation: [
      'NASA’s mission includes sharing the wonder of space with people around the world. This project explores how an interactive app can support that mission by making space imagery easy and fun to discover.',
      'I built an experience where users choose a date range, browse the Astronomy Pictures of the Day, and open an image to learn about the science behind it. NASA’s brand guidelines guided the visual design, giving the app a consistent identity while keeping the imagery at the center of the experience.',
    ],
    videoUrl: '/images/nasa-space-explorer/nasa-pwa-demo.gif',
    videoTitle: 'Installable Mobile App',
    videoAlt: 'Animated GIF of a mobile screen recording showing NASA Space Explorer installed to a device Home Screen, able to work when offline, and configured to send notifications.',
    videoCaption: 'Mobile screen recording showing NASA Space Explorer installed to a device Home Screen, able to work when offline, and configured to send notifications.',
    approach: [
  {
    heading: 'The Business Case & Stakeholder Needs',
    text: 'I framed the app around people curious about space and NASA’s goal of sharing scientific discoveries with a wider audience. Visitors need an easy way to find interesting images and understand what they show. The opportunity is to make NASA’s existing educational content more approachable through an interactive browsing experience.',
    list: [
      'Let visitors choose a period, explore its images, and read the science behind an entry.',
      'Use NASA’s brand guidelines to give the experience a consistent visual identity.',
      'Connect the interface to NASA APIs so the gallery draws from published content without manual image entry.',
    ],
  },
  {
    heading: 'Discovery Flow: From Dates to Images',
    text: 'I organized the experience around choosing a date range, browsing the gallery, and opening an image. Titles and dates give visitors enough context to scan the results. A detail modal brings the larger image and explanation into view while keeping their gallery in the background.',
    list: [
      'Labeled date fields and a clear search button establish where to begin.',
      'Date validation helps visitors correct their selection before requesting images.',
      'Opening and closing image details lets visitors move between quick browsing and deeper reading.',
    ],
  },
  {
    heading: 'Visual Design, Responsive Layout & Accessibility',
    text: 'I used NASA’s logo and brand colors to connect the app to its source, with space imagery as the main focus. A responsive grid adjusts the gallery to the available width, while date controls stack on smaller screens.',
    list: [
      'Image cards support keyboard activation and include accessible names for opening details.',
      'Visible focus indicators and labeled controls help users identify and operate interactive elements.',
      'After finding that mobile date inputs overflowed their container, I adjusted their sizing to keep the fields and search action readable.',
    ],
  },
  {
    heading: 'Web Development & NASA API Integration',
    text: 'I built the app with React, JavaScript, and HTML/CSS, using NASA APIs to retrieve images and descriptions for the selected dates. Loading feedback shows when a request is in progress, and error messages explain when content cannot be retrieved.',
    list: [
      'The gallery handles image entries and provides a separate link for video entries.',
      'When the primary API returned NASA logo placeholders, I added a fallback feed and filtered its entries to the selected date range.',
      'The fallback depends on the entries available from NASA. If usable content is unavailable, the app asks visitors to try another range.',
    ],
  },
  {
    heading: 'PWA Installation & Offline Access',
    text: 'I extended the app into a Progressive Web App so visitors can add it to their Home Screen. A web app manifest defines the installed experience, and a service worker caches app resources and NASA responses. Installation guidance accounts for browsers that require a manual Add to Home Screen flow.',
    list: [
      'An offline indicator communicates connection status and helps set expectations about content availability.',
      'Notification controls request permission and send a test notification when supported.',
      'Mobile testing exposed gaps in offline image loading and installed-app startup. These became additional development tasks to verify before treating offline access as complete.',
    ],
  },
  {
    heading: 'Iteration: Data Reliability & Mobile Behavior',
    text: 'Testing the app across browser and mobile contexts revealed problems beyond the gallery layout. API requests sometimes returned placeholder logos, offline searches exposed technical errors, and the installed app encountered a blank screen when built assets pointed to the wrong deployment path. Each issue affected whether visitors could reach the content at all.',
    list: [
      'Added a fallback data source to recover usable images within the requested dates.',
      'Prepared an offline update that explicitly saves gallery images and restores the last saved gallery, with feedback when saving is incomplete.',
      'Corrected asset paths for deployment under the GitHub Pages subdirectory.',
      'Build and simulated caching checks passed. The offline and Home Screen fixes still need confirmation on a physical phone.',
    ],
  },
  {
    heading: 'What I Would Measure Next',
    text: 'I would run task-based sessions asking visitors to choose dates, open an image, find its explanation, and return to the gallery. I would also test installation and reopening saved content offline to see whether the instructions and status messages match what people expect.',
    list: [
      'Measure successful searches, date-selection errors, and completion of the image-detail task across desktop and mobile.',
      'Check whether visitors understand which content is available offline and what requires a connection.',
      'Ask what they learned from an entry and whether the experience made them want to explore more.',
      'Use image-detail opens and return visits as indicators to investigate educational engagement, alongside participant feedback.',
    ],
  },
],
    links: [
      { label: 'Try It Yourself!', href: 'https://edensouare.github.io/07-nasa-space-explorer/' },
    ],
  },
  {
    slug: 'loreal-beauty-advisor',
    title: 'L’Oréal Beauty Advisor & Routine Builder',
    subtitle: 'Conversational Product Discovery · UX & Web Development',
    year: '2026',
    header: 'How might we help shoppers move from a beauty question to a product selection and a routine they understand?',
    tags: ['Interaction Design', 'Responsive Web Design', 'JavaScript', 'HTML/CSS', 'OpenAI API', 'Cloudflare Workers'],
    role: [
      'Designer & Front-End Developer shaping the discovery flow, brand-inspired interface, product selection, and conversational interactions across two web apps',
      'Integrated the product catalog, browser storage, and OpenAI API through Cloudflare Workers',
    ],
    credits: [
      'Independent coursework and portfolio concept, developed without a client relationship with L’Oréal',
      'L’Oréal branding and product imagery belong to their respective owners. Product data came from the supplied project catalog.',
    ],
    images: [
      {
        src: 'images/loreal/beauty-advisor.webp',
        alt: 'Beauty Advisor desktop interface with topic buttons, four suggested questions, and a chat input beside a RevitaLift product feature',
        caption: 'Beauty Advisor: topic buttons, questions that send on selection, and an open message field offer different ways to begin.',
      },
      {
        src: 'images/loreal/routine-builder.webp',
        alt: 'Routine Builder desktop interface with product search, category filters, CeraVe product cards, a selection panel, and a beauty-advisor chat',
        caption: 'Routine Builder: the catalog, selection panel, and advisor share one workspace so shoppers can see what will inform their routine.',
      },
    ],
    motivation: [
      'A shopper can recognize a beauty goal without knowing which product to choose or how to use it alongside other products. I explored how a branded web experience could make that transition easier, first through a conversational advisor and then through a routine builder grounded in the shopper’s own selection.',
      'For a beauty brand, helping people understand product roles could support more informed consideration and a clearer path to official product information. Purchase confidence and continued engagement are hypotheses for future evaluation. Commercial impact has yet to be measured.',
    ],
    approach: [
      {
        heading: 'The Business Case & Stakeholder Needs',
        text: 'I framed the experience around shoppers who need practical guidance and a brand that needs its product information represented clearly. The shopper’s goal is to understand what fits their needs and how to use it. The brand’s opportunity is to make discovery and consideration more useful, while keeping AI-generated advice distinguishable from official product information.',
        list: [
          'Help shoppers begin with their goal, browse relevant products, and understand the role of each selection.',
          'Give product and brand teams a visible route back to official information through product links and returned source citations.',
          'Give the development flow a defined boundary: the routine uses selected catalog records, and the API credential stays in Cloudflare’s secret settings.',
        ],
      },
      {
        heading: 'Beauty Advisor: Supporting Different Starting Points',
        text: 'The first app supports visitors who arrive with a question but may be unsure how to phrase it. I paired topic buttons with complete suggested questions that send immediately, alongside a field for an original question. Conversational context lets people refine their request without starting over.',
        list: [
          'Suggested questions reduce the effort of composing the first message. Topic buttons offer a broader way to explore.',
          'Distinct, labeled message bubbles keep each question connected to its reply.',
          'The product feature and official product-page link connect the conversation to the brand’s catalog.',
        ],
      },
      {
        heading: 'Routine Builder: Making the Selection Visible',
        text: 'The second app turns the open conversation into a more structured browsing and selection flow. Shoppers search a 35-product catalog and filter by category, open descriptions, and choose the products they want to include. A separate selection panel makes the inputs visible before generation.',
        list: [
          'Selected states and removal controls let shoppers review and revise their choices in either the grid or the selection list.',
          'Expandable descriptions reveal product information on demand without relying on hover.',
          'localStorage restores selected products after a reload. A clear-all control gives shoppers a way to reset.',
          'The generated routine uses a snapshot of the selection. If products change afterward, a message explains that regeneration is needed.',
        ],
      },
      {
        heading: 'Visual Design, Responsive Layout & Accessibility',
        text: 'I used L’Oréal-inspired typography, product imagery, and restrained interface styling to make the advisor feel connected to a beauty-shopping experience. The routine builder adds the assignment’s pink and gold brand accents. CSS grid and responsive controls adapt the catalog and consultation to smaller screens.',
        list: [
          'Product selection buttons expose their pressed state, and labeled form controls support keyboard and assistive-technology use.',
          'A right-to-left layout toggle adjusts the grid, selection area, and chat. It changes layout direction while keeping the interface labels in English.',
        ],
      },
      {
        heading: 'Web Development & Product-Aware AI',
        text: 'I built the interfaces in HTML, CSS, and JavaScript. The routine builder loads products.json and sends only the selected product records, including name, brand, category, and description, with the shopper’s optional goals. Cloudflare Workers handle OpenAI requests, and follow-ups include the conversation history for context.',
        list: [
          'Web search can retrieve current product information, with returned source annotations rendered as clickable citations.',
          'Loading states prevent duplicate submissions. Failed requests retain the previous conversation and give the shopper a retry path.',
          'The apps demonstrate discovery and routine guidance. Checkout, live inventory, and verified product compatibility would require further integration.',
        ],
      },
      {
        heading: 'Iteration: Relevance & Readability',
        text: 'Testing exposed two weaknesses in the conversation. A topic check rejected a valid request to search official brand sites, even after a skincare routine had been generated. I revised the scope instructions to recognize product research and requests for citations. A later response was too long and included a table that the chat could not display well, so I specified concise, plain-text answers and numbered routine steps.',
        list: [
          'I checked product-research requests alongside unrelated SQL questions and attempts to override the topic rules.',
          'These were functional checks and design iterations. I have not yet conducted a formal usability study or measured commercial impact.',
        ],
      },
      {
        heading: 'What I Would Measure Next',
        text: 'I would run task-based sessions asking shoppers to find a product, inspect its description, revise a selection, generate a routine, and ask a follow-up. The next step is to establish whether the flow helps people understand their choices before assessing its value to a brand.',
        list: [
          'Measure task completion, time to a first routine, selection errors, and whether shoppers can explain the recommended order.',
          'Ask shoppers to rate confidence in their selection and distinguish AI guidance from verified product information.',
          'Track generation completion and visits to official product sources, with consent and appropriate analytics. Use these indicators to investigate where the experience helps or loses shoppers.',
        ],
      },
    ],
    links: [
      { label: 'Try the Beauty Advisor', href: 'https://edensouare.github.io/08-prj-loreal-chatbot/' },
      { label: 'Try the Routine Builder', href: 'https://edensouare.github.io/09-prj-loreal-routine-builder/' },
       ],
  },
  {
    slug: 'jerry-can-relay',
    title: 'Jerry Can Relay',
    subtitle: 'Designing a Browser Game for charity: water’s Campus Outreach',
    year: '2026',
    header: 'How might a game students can play between classes give them a reason to learn more about clean water access?',
    tags: ['Interaction Design', 'Game Design', 'Responsive Web Development', 'HTML/CSS', 'JavaScript'],
    role: ['Game Designer & Front-End Developer translating a three-week nonprofit marketing brief into a playable browser prototype'],
    images: [
      {
        src: 'images/jerry-can-relay/relay-walk.jpg',
        alt: 'Hands hold a blue water can as the well comes into view. The display shows 1.9 km remaining and 100% water.',
        caption: 'Players watch the can for tilt and tap to correct it. Distance, time, and water remaining stay visible throughout the walk.',
      },
      {
        src: 'images/jerry-can-relay/relay-start.jpg',
        alt: 'Jerry Can Relay start screen with Easy, Normal, and Hard difficulty options and a Start walk button.',
        caption: 'The opening screen introduces the goal in one sentence, with Easy selected so a first-time player can start immediately.',
      },
    ],
    motivation: [
      'Time spent collecting water can take time away from school and work. For a college student encountering charity: water for the first time, that daily trade-off can be hard to picture.',
      'I built Jerry Can Relay around one question a player can answer in a single round: how much water can you keep in a five-liter can as it tips from side to side?',
    ],
    approach: [
      {
        heading: 'The Business Case & Stakeholder Needs',
        text: 'The accelerator brief asked how charity: water could reach college students through a mobile game and floated campus discounts as a possible incentive. I scoped the prototype around the first engagement decision: would a student finish a short walk and want to know more? A browser game gave students a way to try it from a link, while the home screen gave the nonprofit a direct route to its mission and donation pages.',
      },
      {
        heading: 'Balancing the Jerry Can',
        text: 'I made the jerry can the object students have to watch. When it leans right, tapping the left half of the screen pulls it back. On a keyboard, the arrow keys or A and D make the same correction. Making each half of the play area a target lets players keep their eyes on the can as it moves.',
      },
      {
        heading: 'Showing the Cost of a Spill',
        text: 'The tilt shows what needs attention now. The water gauge shows what an earlier correction cost, and the distance and time readouts tell players how much of the walk remains. At the finish, I translate the remaining percentage back into liters so the score answers the question the player started with.',
      },
      {
        heading: 'Building and Tuning the Game in JavaScript',
        text: 'I built the title, walk, and results screens in HTML and CSS. JavaScript tracks tilt, water, distance, and time as the round progresses. Easy, Normal, and Hard share the same controls. On harder settings the can starts spilling heavily at a smaller angle, so returning players can take on a tighter balancing challenge without learning a new interaction.',
      },
      {
        heading: 'From a Finished Round to Mission Awareness',
        text: 'The result screen pairs the player’s outcome with a fact about water access. In a campus pilot, I would track round completion and visits to the mission page separately, then ask students what they remember about water collection. That would help charity: water judge whether the game holds attention and whether its message carries beyond the score.',
      },
    ],
    links: [
      { label: 'Play Jerry Can Relay', href: 'https://edensouare.github.io/05-charity-water-game-prototype/' },
    ],
  },
  {
    slug: 'intel-sustainability',
    title: 'Intel Sustainability',
    subtitle: 'A Sustainability Timeline & Team-Based Summit Check-In',
    year: '2026',
    header: 'How might we make Intel’s sustainability milestones easier to explore and show employees how each check-in counts toward their team’s turnout?',
    tags: ['Interaction Design', 'Accessibility', 'Responsive Web Design', 'JavaScript', 'Flexbox', 'Bootstrap', 'Web Storage API'],
    role: [
    'UX Designer & Front-End Developer who designed and built Intel’s interactive sustainability timeline and a summit check-in prototype that tracks attendance by team',
    ],
    images: [
      {
        src: 'images/intel-sustainability/timeline.jpg',
        alt: 'Intel sustainability timeline with the 2022 net-zero milestone expanded',
        caption: 'The card pairs the announcement year with the 2040 target. Revealing the description gives readers more context without leaving the timeline.',
      },
      {
        src: 'images/intel-sustainability/summit.jpg',
        alt: 'Summit check-in interface confirming a sample attendee joined Team Water Wise',
        caption: 'A personalized greeting confirms the team selection, and the same check-in advances the shared attendance goal.',
      },
    ],
    motivation: [
      'The Intel brief gave me two audiences with different reasons to care about sustainability. A visitor might want to know when Intel set its net-zero goal. An employee arriving at the summit wants to check in and see how their team is doing. I built a timeline for the first question and a check-in app for the second.',
    ],
    approach: [
      {
        heading: 'The Business Case & Stakeholder Needs',
        text: 'For the communications team, the opportunity was to make individual commitments easy to find and give interested readers a way to follow future updates. For summit organizers, the immediate need was a reliable count at the check-in desk. I used those needs to decide what each audience should see first: dated milestones for readers and a short form for attendees.',
      },
      {
        heading: 'Sustainability Timeline (September 2026)',
        text: 'I gave each of the nine milestones a year, a short title and an image so readers could scan from Intel’s founding in 1968 to the 2024 Sustainability Summit. Someone looking for the net-zero commitment can spot the 2022 card, then reveal its explanation. The year marks the announcement and the title identifies 2040 as the target.',
        list: [
          'Used Flexbox to adapt the timeline across screen sizes and made card descriptions available by hover, keyboard focus and touch.',
          'Grouped RISE Strategy, Commitment, and Water & Waste in a responsive Bootstrap section. An accordion lets readers explore one topic at a time.',
        ],
      },
      {
        heading: 'Adapting the Timeline for a Global Audience',
        text: 'A follow-up brief asked how the same page would work for someone reading in Arabic. I used JavaScript to detect changes in page language or direction and switch to the matching Bootstrap stylesheet. That keeps layout direction aligned with translated content.',
        list: [
          'Collapsible navigation reports its expanded state to assistive technology, so a keyboard or screen reader user can tell whether the links are available.',
          'The newsletter prototype uses a labeled email field with format validation. Submitting a valid address displays a demo notice.',
        ],
      },
      {
        heading: 'Summit Check-In & Team Competition (October 2026)',
        text: 'I used a simple game mechanic: each check-in adds one to a team’s turnout and moves everyone toward a shared goal of 50 attendees. Employees enter their name, choose Water Wise, Net Zero or Renewables, and receive a personal greeting. The organizer can see the new roster entry and updated counts immediately.',
        list: [
          'JavaScript normalizes capitalization and spacing before checking for a repeated name, so submitting the same name twice does not award a second point.',
          'At the goal, the app announces the team or teams with the highest turnout. Check-in stays open after the 50th arrival.',
          'Browser local storage restores the roster and counts after a refresh on the same device. This supports a single check-in station.',
        ],
      },
      {
        heading: 'How I Would Evaluate the Designs',
        text: 'For the timeline, I would ask readers to find the net-zero target using a keyboard, a phone and a right-to-left layout, then record whether they found the correct year without help. At the summit desk, I would time a first check-in and ask attendees which team received their point. Together, those tasks would show whether people can find the commitment and understand the feedback.',
      },
    ],
    links: [
      { label: 'Intel® Sustainability Interactive Timeline', href: 'https://edensouare.github.io/02-prj-intel-sustainability/' },
      { label: 'Intel® Sustainability Summit Event Check-In App', href: 'https://edensouare.github.io/05-prj-intel-event-check-in/' },
    ],
  },
  {
  slug: 'access-as-ownership',
  title: 'Access as Ownership',
  subtitle: 'CoBank x Early Talent Competitions: Reimagine the Customer Experience (1st Place)',
  year: '2026',
  header: 'How might we ensure every CoBank customer-owner, regardless of age or ability, can navigate cobank.com well enough to exercise their rights as an owner, not just find information as a customer?',
  tags: ['UX Research', 'Accessibility', 'Web Audit', 'Lighthouse', 'Business Case', 'Pitch'],
  role: [
    'UX Researcher conducting a Lighthouse accessibility audit of cobank.com and grounding pain points in U.S. Census data',
    'Strategist and Designer scoping a site-wide accessibility fix, modeling the user journey, and building the business case and success metrics',
  ],
  motivation: [
    "CoBank is a cooperative, not just a bank: its customers are its owners, who vote in board elections and receive governance disclosures through cobank.com. For a cooperative, website access is not a convenience, it is the way owners exercise their rights.",
    'An accessibility audit of cobank.com revealed two fixable gaps in shared, site-wide components: a header navigation that renders twice, forcing screen-reader and keyboard users to tab through the same links twice, and icon-only footer links with no accessible name. This matters because rural residents report disabilities at a higher rate than urban residents (14.7% vs. 12.6%) and are more likely to be 65 or older (19.9% vs. 16.0%), a profile that matches CoBank\'s customer-owner base.',
    'I saw an opportunity to design a low-effort, high-impact fix: a scoped change to CoBank\'s shared header and footer, paired with ongoing testing with rural users with disabilities, rather than a full site redesign.',
  ],
  images: [
    'cobank_souare_utdallas.png',
    'cobank_souare_utdallas (1).png',
    'cobank_souare_utdallas (2).png',
    'cobank_souare_utdallas (3).png',
    'cobank_souare_utdallas (4).png',
    'cobank_souare_utdallas (5).png',
    'cobank_souare_utdallas (6).png',
    'cobank_souare_utdallas (7).png',
  ],
  approach: [
  {
    heading: 'Cooperative-Centered Problem Framing',
    text:
      'I began with what makes CoBank different from a typical bank: its customers are its owners, who vote in board elections and receive governance disclosures through cobank.com. That reframed the challenge from improving a website to protecting an owner\'s ability to exercise their rights. My guiding question became: how might we ensure every customer-owner, regardless of age or ability, can navigate cobank.com well enough to act as an owner, not just find information as a customer?'
  },
  {
    heading: 'Data-Grounded Need Identification',
    text:
      'I grounded the problem in U.S. Census data showing that 14.7% of rural residents report a disability, compared with 12.6% of urban residents, and that 19.9% of rural residents are 65 or older, compared with 16.0% urban. Because CoBank\'s customer-owner base skews older and rural, the people most likely to face accessibility barriers are the people the cooperative exists to serve.'
  },
  {
    heading: 'Accessibility Audit',
    text:
      'I ran a Lighthouse accessibility audit on cobank.com and found two concrete, fixable issues. First, the header navigation renders twice (a hidden second menu is still readable by screen readers), forcing screen-reader and keyboard users to tab through the same links twice before reaching any content. Second, icon-only footer links, such as social media icons, have no accessible name, so assistive technology announces nothing useful. Both live in shared components used site-wide, not just on the homepage.'
  },
  {
    heading: '"Accessible by Default" Solution Design',
    text:
      'Rather than propose a full redesign, I scoped a targeted fix to the shared header and footer components with three parts: naming every icon-only link so screen readers announce what it is (e.g., "CoBank on LinkedIn"), removing the duplicate navigation from assistive technology so users tab through it once, and correcting list markup so grouped content like menus and card grids reads as organized lists instead of flat text. Because these are shared components, one fix updates every page.'
  },
  {
    heading: 'User Journey Modeling',
    text:
      'To show what the fix changes in practice, I mapped the experience of Carol, a 68-year-old West Texas rancher with low vision and a CoBank customer-owner reviewing candidates before the annual board election. Today she hears the same six navigation links twice, reaches unlabeled footer icons, and loses her place. After the fix, she tabs through the navigation once and moves directly to Governance, then Board Elections, to review candidates and vote. The journey shows the barrier is a loss of participation, not a minor annoyance.'
  },
  {
    heading: 'Outcome-Based Success Metrics',
    text:
      'I defined success by what customer-owners can do, not by an improved audit score. Component-level checks (zero duplicate tab-stops in the shared navigation, and 100% of icon-only interactive elements carrying an accessible name) are objective and verifiable at launch. Task completion, measured through usability testing with assistive-technology users navigating from the homepage to Governance, and qualitative feedback from a rural disability advocacy partner like APRIL add real-world validation. The long-term metric is whether board-election participation among assistive-technology users comes to match that of other owners.'
  },
  {
    heading: 'Business Case Development',
    text:
      'I built a case for the stakeholders who would fund the work. Federal ADA website-accessibility lawsuits reached 3,117 in 2025, up 27% from 2024, including in financial services. The fix is a small engineering lift with site-wide payoff, protects relationships with CoBank\'s older, rural, higher-disability customer-owners, and gives CoBank a visible, hard-to-copy way to back its mission of supporting rural America.'
  },
  {
    heading: 'Future Iteration Strategy',
    text:
      'Looking ahead, I propose piloting the fixes across the shared header and footer components, then pairing each rollout with ongoing usability testing involving real rural users with disabilities through advocacy partners like APRIL. This keeps accessibility an ongoing commitment rather than a one-time fix, and ensures improvements are tested with the people they are meant to help.'
  },
  ],
  },

  {
    slug: 'comet-bites',
    title: 'Comet Bites',
    subtitle: 'Design Research Methods UX Project',
    year: '2026',
    header: 'How might we help UTD students locate free or affordable food in real time?',
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
      "About a quarter of students at UT Dallas face food insecurity, and it's not solely a financial issue. Through early research, we found that students often don't know where to find affordable or free food nearby, and when resources do exist, information is scattered, outdated, or hard to access.",
      'Beyond visibility, there is a quieter barrier: stigma. Students frequently feel embarrassed using campus food resources or are unsure whether they even qualify for support, which keeps them from seeking help even when it\'s available.',
      'We saw an opportunity to design something fast, discreet, and low-stress: a tool that removes the guesswork of finding food rather than adding another app to compare and track.',
    ],
    images: Array.from({ length: 10 }, (_, index) => `CB${index + 1}.jpg`),
    videoUrl: '/cometbites video.mp4',
    approach: [
      {
        heading: 'Problem Definition & Research Synthesis',
        text: 'We grounded the project in research evidence before designing anything. Findings showed students skip meals near the end of the month, feel embarrassed using campus food resources, remain unsure about eligibility and support options, and often resort to comparing prices across multiple apps just to get by. These insights shaped every decision that followed.',
      },
      {
        heading: 'MVP Scoping with Impact & Effort Prioritization',
        text: 'Using an impact and effort matrix, we identified which features delivered the most value with the least complexity. High-impact, low-effort features like a food pantry locator, live availability map, and traffic light stock status were prioritized for the MVP, while features like budget tracking and social/community tools were intentionally excluded to keep the experience focused on the core need: finding food quickly.',
      },
      {
        heading: 'Feature-Driven User Flows',
        text: 'We mapped three core features: Real-Time Availability, an Information Center, and Community Reports; each tied to a specific user goal and rationale. Detailed user flows, such as locating the Comet Cupboard for available food, traced every decision point from opening the app to arriving at a location, ensuring the experience stayed clear and low-friction at each step.',
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
  {
    heading: 'Clinical Staging Framework',
    text:
      'We designed a deep learning pipeline to classify the severity of Alzheimer\'s disease directly from brain MRI scans. Rather than a simple healthy-versus-diseased split, the task was framed as a four-stage classification (Non-Demented, Very Mild, Mild, and Moderate Demented), so the output could help clinicians categorize a patient\'s stage and plan appropriate treatment. Using MRI alone keeps the approach non-invasive and practical where more advanced imaging is unavailable.'
  },
  {
    heading: 'Dataset & Input Modeling',
    text:
      'We trained on the Augmented Alzheimer\'s MRI Dataset from Kaggle, imported via kagglehub, which contains real patient brain scans expanded through augmentation to improve model performance. MRI pixel values served as the sole predictors, and each image was labeled with one of the four dementia stages. Because the dataset is multi-class, the model can grade severity rather than only detect its presence.'
  },
  {
    heading: 'Transfer Learning Architecture',
    text:
      'We built the classifier on EfficientNetB0, a convolutional neural network pre-trained on ImageNet, giving the model a strong foundation for image feature extraction. EfficientNetB0 uses MBConv blocks with variable kernel sizes and strides through compound scaling, which improves computational efficiency over fixed architectures like VGG19. This let us adapt a proven image-classification backbone to MRI staging instead of training from scratch.'
  },
  {
    heading: 'Regularization & Hyperparameter Tuning',
    text:
      'To balance model complexity against overfitting, we reduced the hidden layer from 256 to 128 units and applied a 30% dropout rate, randomly deactivating neurons during training. Training ran for up to 20 epochs with EarlyStopping (patience of 3), which halted training once performance plateaued and saved compute time.'
  },
  {
    heading: '2-Fold Cross-Validation Strategy',
    text:
      'To verify reliability beyond a single data split, we evaluated the model with 2-fold cross-validation, training on one fold and testing on the other, then swapping. Test accuracy was 78% on the first fold and 80% on the second, averaging 79%. This close agreement suggests the model is consistent and generalizes rather than depending on one particular split.'
  },
  {
    heading: 'Performance Evaluation & Insights',
    text:
      'The model reached 79% test accuracy, 85% precision, and 71% recall, compared with 84%, 89%, and 76% on training data. High precision means fewer false positives, which matters in clinical contexts, while lower recall reflects a greater risk of missed cases, particularly in later stages where class imbalance limits performance. The model reliably identifies early-stage Alzheimer\'s, which is critical for timely intervention, but struggles to separate subtle stages such as Mild from Moderate Demented.'
  },
  {
    heading: 'Comparative Context',
    text:
      'Prior multimodal studies (MRI, PET, and CSF biomarkers) reported higher accuracy of 93–95%, but on simpler tasks such as distinguishing Alzheimer\'s patients from healthy controls. Our model tackled a harder four-class problem with a single imaging modality. Its 71% recall also closely aligns with the 74.58% recall reported for predicting MCI conversion in earlier work, showing that MRI-only CNNs can offer meaningful diagnostic insight when resources limit multimodal data.'
  },
  {
    heading: 'Future Iteration Strategy',
    text:
      'Building on these findings, future work focuses on improving recall through more balanced datasets; integrating multimodal inputs for more nuanced stage detection; improving separation between adjacent stages like Mild and Moderate; and conducting clinical validation to assess real-world applicability.'
  },
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
  {
    heading: 'Audio-as-Image Framework',
    text:
      'We approached stem separation by reframing sound as a visual problem. Instead of processing raw waveforms, we represented audio as spectrograms, which show the constituent frequencies of a track over time. This turned the task of isolating instruments from a mixed track into an image-to-image translation problem, where a model learns to map a mixture to the individual stems (drums, bass, vocals, and other) it contains.'
  },
  {
    heading: 'Supervised Dataset Design',
    text:
      'We trained on MUSDB18, a collection of 150 full-length tracks across various genres, split into 100 songs for training and 50 for testing. Every song ships with its mixture and separated stems (drums, bass, vocals, and other), providing the ground truth needed for supervised learning. Because the stems are already isolated, the model can learn directly from examples of what each instrument should look like once pulled out of the mix.'
  },
  {
    heading: 'Spectrogram Preprocessing Pipeline',
    text:
      'Tracks arrive as .STEM files, which we decomposed into individual .wav files for faster audio decoding. For each song, we located every stem\'s .wav file, loaded the audio into memory, and built spectrograms using the short-time Fourier transform. This pipeline converts frequency and time into image-like data suitable for convolutional deep learning.'
  },
  {
    heading: 'Spectrogram Data Augmentation',
    text:
      'To increase training variety, we augmented the spectrograms with four methods: time warping (changing spectrogram length), pitch shifting (changing its height), frequency masking (blocking a strip of the frequency axis), and time masking (blocking a strip of the time axis). These transformations expose the model to altered versions of the same music, encouraging it to learn robust patterns of each instrument rather than memorizing specific songs.'
  },
  {
    heading: 'U-Net Architecture',
    text:
      'We implemented a U-Net, a fully convolutional network defined by an encoding path followed by a decoding path. Down-sampling layers compress the spectrogram into compact feature representations, and up-sampling layers reconstruct the output back to the original dimensions. Our network stacks convolutional layers with LeakyReLU activations and batch normalization, with max-pooling for down-sampling. Although U-Net was originally developed for biomedical image segmentation, its ability to preserve fine spatial detail suits spectrograms, where each instrument leaves a distinct visual structure.'
  },
  {
    heading: 'SDR-Based Evaluation',
    text:
      'We evaluated separation quality using the Source-to-Distortion Ratio (SDR), which compares the energy of the target source against the combined interference, noise, and artifacts in the output. A positive SDR means the output contains more source than distortion, while a negative SDR means distortion dominates, giving us a clear, interpretable measure against the ground-truth stems.'
  },
  {
    heading: 'Training Results & Insights',
    text:
      'The model completed 80,000 training iterations in roughly 12 hours and reached a validation SDR of +0.03, meaning the separated output contained roughly equal amounts of desired signal and unwanted distortion. This shows that a CNN built for images can learn to separate audio from spectrograms, even though the modality differs. The near-zero SDR also marks clear room for improvement in separation quality.'
  },
  {
    heading: 'Applications & Impact',
    text:
      'Reliable stem separation would let DJs isolate song elements for remixes, help producers break down tracks and neatly sample audio elements, and support karaoke, music learning, and independent creative projects. Giving users control over individual components of a finished song is what makes the approach valuable beyond the model itself.'
  },
],
  },
]

export const research = [
  {
    slug: 'text-classification',
    title: 'Text Classification of Research Articles',
    subtitle: 'Sungkyunkwan University AAA Lab Internship',
    year: '2025-Current',
    header: 'How can machine learning help researchers find and screen studies on AI overreliance?',
    tags: ['Machine Learning', 'Natural Language Processing', 'Text Classification', 'API Integration', 'Python'],
    role: [
      'HCI Intern & Machine Learning Engineer developing classification pipeline, 2025',
      'Remote Undergraduate Research Intern, 2026',
    ],
    credits: ['Advised by Joo-Wha Hong and Hyo-Jeong Kim'],
    motivation: [
        'Literature reviews are essential but time-consuming...especially in rapidly evolving fields like AI trust and overreliance.',
        'This project aims to automate and streamline the screening process, enabling researchers to focus on analysis rather than manual filtering.',
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
      'Extended the abstract screening workflow by integrating the TypeSafe and Anthropic APIs in Python.',
      'Tested both integrations on a 19 article pilot test using the lab’s seven exclusion criteria and eight inclusion criteria for studies on AI overreliance.',
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
