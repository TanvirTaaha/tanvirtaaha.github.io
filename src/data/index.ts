import { PersonalInfo, Education, Publication, Project, Skill, GalleryItem, Stat, NewsItem, ResearchItem, Experience } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'MD. TANVIR HOSSAIN TAAHA',
  title: 'Machine Learning Engineer & Robotics Researcher',
  email: 'tanvir.taaha@gmail.com',
  phone: '+8801764223436',
  address: 'Dhaka, Bangladesh',
  location: 'Dhaka, Bangladesh',
  bio: 'I am a Machine Learning Engineer and Robotics Researcher with a passion for developing innovative solutions using deep learning, computer vision, and robotic manipulation. My research interests include Robotics, Control Theory, Deep Learning, Image Classification and Localization, and Embedded Systems.',
  profileImage: '/images/profile.png',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/TanvirTaaha', icon: '💻' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/tanvir-taaha', icon: '💼' },
    { platform: 'Website', url: 'https://TanvirTaaha.github.io', icon: '🌐' },
    { platform: 'Email', url: 'mailto:tanvir.taaha@gmail.com', icon: '✉️' },
  ],
  stats: [
    { id: '1', value: '5+', label: 'Years of Experience' },
    { id: '2', value: '10+', label: 'Projects Completed' },
    { id: '3', value: '4+', label: 'Rover Competitions' },
  ],
};

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Mechanical Engineering',
    institution: 'Bangladesh University of Engineering and Technology (BUET)',
    location: 'Dhaka, Bangladesh',
    year: '2019 - 2024',
    description: 'CGPA: 3.02/4.00',
  },
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Your Publication Title Here',
    authors: 'Your Name, Co-author Name',
    venue: 'Conference/Journal Name',
    year: 2024,
    pdfUrl: '/publications/paper1.pdf',
    doi: '10.xxxx/xxxxx',
    abstract: 'Brief abstract of your publication...',
  },
  {
    id: '2',
    title: 'Another Publication Title',
    authors: 'Your Name, Another Co-author',
    venue: 'Journal Name',
    year: 2023,
    pdfUrl: '/publications/paper2.pdf',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Field-Oriented Control (FOC) for BLDC Motor',
    description: 'Developed a robust real-time communication interface using CAN bus protocol and implemented high-performance FOC algorithm on STM32 microcontroller for precise BLDC motor commutation.',
    technologies: ['STM32Duino', 'C/C++', 'FOC', 'CAN Bus'],
    githubUrl: 'https://github.com/TanvirTaaha',
  },
  {
    id: '2',
    title: 'Pico PIO-Based Software I2C Expansion',
    description: 'Implemented software I2C communication channels on Raspberry Pi Pico using Programmable I/O (PIO) state machines to expand I2C interfaces beyond hardware limits.',
    technologies: ['Raspberry Pi Pico SDK', 'PIO Assembly', 'I2C'],
    githubUrl: 'https://github.com/TanvirTaaha',
  },
  {
    id: '3',
    title: 'YOLO Annotator - VSCode Extension',
    description: 'VSCode Extension to annotate images directly as Ultralytics YOLO format with auto-detection of directories and fast loading in remote SSH sessions.',
    technologies: ['TypeScript', 'HTML', 'CSS', 'YOLO'],
    githubUrl: 'https://github.com/TanvirTaaha',
  },
  {
    id: '4',
    title: 'Serialx: Cross-Platform C++ Serial Library',
    description: 'Modernized a lightweight, cross-platform C++ serial library inspired by PySerial with reliable serial communication support for microcontrollers on Linux and Windows.',
    technologies: ['C++', 'Serial Communication', 'POSIX', 'Windows API'],
    githubUrl: 'https://github.com/TanvirTaaha',
  },
  {
    id: '5',
    title: 'Deep Learning Based Trash Sorting Robotic Arm',
    description: 'Trained YOLOv5 with custom dataset using transfer learning and developed autonomous control for robotic arm using MoveIt for complete trash sorting automation.',
    technologies: ['ROS', 'MoveIt', 'PyTorch', 'YOLOv5', 'SolidWorks'],
    pdfUrl: '/files/trash-sorting-paper.pdf',
    presentationPdfUrl: '/files/trash-sorting-presentation.pdf',
  },
  {
    id: '6',
    title: 'Shell & Tube Heat Exchanger Design',
    description: 'Designed and manufactured a Shell and Tube Heat Exchanger to lower Engine Oil temperature with optimization using HTRI Xchanger Suite and comprehensive testing.',
    technologies: ['SolidWorks', 'HTRI', 'MATLAB'],
  },
];

export const cvUrl = '/cv/CV-Tanvir Hossain Taaha.pdf';

export const skills: Skill[] = [
  { id: '1', name: 'Deep Learning & Computer Vision', level: 90 },
  { id: '2', name: 'Robotics & ROS', level: 88 },
  { id: '3', name: 'Machine Learning', level: 85 },
  { id: '4', name: 'Python Programming', level: 90 },
  { id: '5', name: 'C/C++ & Embedded Systems', level: 85 },
  { id: '6', name: 'Control Theory', level: 80 },
];

export const research: ResearchItem[] = [
  {
    id: '1',
    title: 'Automated Waste Sorting using Deep Learning and Robotic Manipulation: A Comprehensive Approach',
    venue: 'Presented at ICMIME\'24',
    technologies: ['ROS', 'MoveIt', 'Gazebo', 'PyTorch', 'YOLO'],
    description: 'Using computer vision, object localization to classify various waste objects for recycling.\nROS & MoveIt based autonomous pick and place to the correct bin with robotic arm, thoroughly tested in Gazebo.\nSuccessfully categorizing waste objects and successfully sorting them with the prototype.',
    imageUrl: '/images/research-thumbnail.jpg',
  },
];

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Paper Accepted at ICMIME\'24',
    description: 'Our research on "Automated Waste Sorting using Deep Learning and Robotic Manipulation" has been accepted and presented at ICMIME\'24 conference.',
    date: '2024-01-15',
    category: 'Publication',
  },
  {
    id: '2',
    title: 'Started as Machine Learning Engineer at ACI PLC',
    description: 'Joined ACI PLC as Machine Learning Engineer, working on real-time video inference systems and IoT devices with AI backend.',
    date: '2024-12-01',
    category: 'Career',
  },
  {
    id: '3',
    title: 'European Rover Challenge 2023 - 13th Position Worldwide',
    description: 'Secured 13th position worldwide in European Rover Challenge Remote Formula 2023 as Software Team Lead of Team Interplanetar.',
    date: '2023-09-01',
    category: 'Achievement',
  },
  {
    id: '4',
    title: 'Anatolian Rover Challenge 2024 - 2nd Place',
    description: 'Secured 2nd place in the final round of Anatolian Rover Challenge 2024 held at İstanbul Technical University as Software Team Lead.',
    date: '2024-07-01',
    category: 'Achievement',
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Machine Learning Engineer',
    company: 'ACI PLC',
    location: 'Tejgaon, Dhaka',
    period: 'Dec 2024 – Present',
    description: [
      'Developed a monitoring system with real time video inference, developed architecture which is highly optimized and scalable with minimum resources.',
      'Developed IoT devices with AI backend, developed the whole messaging pipeline using MQTT.',
      'Implemented a custom data labeling pipeline using Dockerized Label Studio with ML backend for pre-annotation supporting images, audio and text for training and testing for the whole team.',
      'Administered and troubleshot development and production Linux servers, ensuring system security and operational robustness.',
    ],
  },
  {
    id: '2',
    title: 'Junior Software Engineer (Part-time)',
    company: 'Bydo Academy',
    location: 'Lalbagh, Dhaka',
    period: 'Dec 2020 – Oct 2024',
    description: [
      'Worked on several android apps for clients featuring live audio-video chat, public posts, telemedicine and various govt. projects.',
      'Gained experience in team work, agile development strategies, managing large codebase, designing complex UI and handling database.',
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  { id: '1', imageUrl: '/gallery/image1.jpg', filename: 'image1.jpg', title: 'Mars Rover Competition', category: 'Events' },
  { id: '2', imageUrl: '/gallery/image2.jpg', filename: 'image2.jpg', title: 'Robotic Arm Project', category: 'Research' },
  { id: '3', imageUrl: '/gallery/image3.jpg', filename: 'image3.jpg', title: 'ICMIME Presentation', category: 'Academic' },
  { id: '4', imageUrl: '/gallery/image4.jpg', filename: 'image4.jpg', title: 'Team Interplanetar', category: 'Team' },
  { id: '5', imageUrl: '/gallery/image5.jpg', filename: 'image5.jpg', title: 'Waste Sorting System', category: 'Research' },
  { id: '6', imageUrl: '/gallery/image6.jpg', filename: 'image6.jpg', title: 'Workshop Session', category: 'Events' },
];

