export const profile = {
  name: "Madhav Pradeep",
  roll: "ME24B038",
  tagline: "Mechatronics Engineer & Full-Stack Developer",
  subtitle:
    "Sophomore at IIT Madras in Mechanical Engineering, working across Web Dev, Agentic AI, and Deep Tech. Building autonomous vehicles, quantitative models, and production software.",
  location: "Chennai, India",
  email: "madhavpradeep2207@gmail.com",
  github: "https://github.com/mad-hav-22-07",
  linkedin: "https://www.linkedin.com/in/madhav-pradeep-445442314/",
  resumeUrl: `${import.meta.env.BASE_URL}Madhav_Pradeep_Resume.pdf`,
};

export const heroStats = [
  { value: "8.8", label: "CGPA at IIT Madras" },
  { value: "5th", label: "IGVC 2026 Design Challenge" },
  { value: "20k+", label: "Students reached via Tensors" },
];

export const education = [
  {
    program: "B.Tech in Mechanical Engineering",
    institution: "IIT Madras",
    metric: "8.8 CGPA",
    year: "2028",
  },
  {
    program: "Class XII (HSE Kerala)",
    institution: "Kuriakose Elias English Medium School",
    metric: "99%",
    year: "2024",
  },
  {
    program: "Class X (CBSE)",
    institution: "Sree Narayana Public School",
    metric: "94%",
    year: "2022",
  },
];

export const academicHighlights = [
  "AIR 2276 in JEE Advanced 2024 and AIR 1957 with 99.88 percentile in JEE Main 2024, among 12 lakh candidates nationwide",
  "AIR 5 in CUSAT CAT 2024, AIR 45 in NEST 2024, and State-level Top 1% in NSEC & NSEP 2023",
  "Cleared the Indian Olympiad Qualifier in Mathematics (IOQM) in 2021 & 2023, ranking top 35 in Kerala, selected to write INMO",
];

export const experience = [
  {
    role: "Software Lead",
    org: "Team Abhiyaan",
    period: "Apr '25 – Present",
    highlight: true,
    points: [
      "Implemented a SegFormer vision transformer for real-time lane detection, optimizing TensorRT inference at 30+ FPS",
      "Configured the Nav2 stack and calibrated stereo cameras for visual odometry, building URDF TFs for lane following",
      "Processed 3D LiDAR point clouds via intensity-based clustering to detect reflective lane markings on the racetrack",
    ],
  },
  {
    role: "Director",
    org: "Tensors NGO",
    period: "Mar '26 – Present",
    highlight: true,
    points: [
      "Co-direct Tensors, a nonprofit founded by IIT Madras students that funds social-impact work through educational programs, running four teams: PR, Events/Testing, TenSCI, and Design",
      "Shipped Decov, a donor-recipient mapping app built with Calicut Medical College Hospital for blood, plasma, oxygen, and food donations, plus a nationwide ideathon with the Indian Medical Association",
      "Scaled Tensors-Edu (JEE mocks, JoSAA counselling, JEE mentorship) to 20,000+ students across 14 states, and ran 8+ in-person workshops for 60+ children at SOS Village",
    ],
  },
  {
    role: "Student Mentor",
    org: "Avanti Fellows",
    period: "Sep '24 – Jul '25",
    highlight: true,
    points: [
      "Mentored 20+ underprivileged students preparing for the JEE with free 1:1 academic guidance and exam strategy",
      "Curated mock exams and analyzed performance metrics to tailor prep roadmaps and boost scores",
      "Ran this alongside Tensors' own JEE mentorship work, carrying lessons on outreach between both programs",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "Drexon Industries",
    period: "Apr '26 – Present",
    points: [
      "Architected a geospatial backend (PostgreSQL/PostGIS, Redis) with RBAC, a track correlator, and AI/ML anomaly detection",
      "Engineered 6 real-time protocol adapters (ASTERIX, MAVLink, NMEA, SNMP, ZMQ) with AES-256-GCM secured Redis pub/sub",
      "Architected the React.js frontend and WebSocket/REST APIs serving analytics, track history, and alerts across 7 skins",
    ],
  },
  {
    role: "AI-ML Engineer",
    org: "Novaforge AI",
    period: "Jan '26 – Apr '26",
    points: [
      "Boosted client web traffic by 10% by deploying 5 data-driven AI/ML UX/UI personalization and SEO ranking features",
      "Engineered an LLM-powered RAG system over 10K+ ship documentation for context-aware semantic query responses",
      "Architected a FAISS-indexed vector retrieval pipeline processing 5K+ complex marine manuals and technical datasets",
    ],
  },
  {
    role: "Contingent Member",
    org: "Inter IIT Tech Meet",
    period: "Oct '25 – Dec '25",
    points: [
      "Engineered a low-latency ROS2–Teensy 4.1 UART communication interface for an autonomous warehouse rover stack",
      "Designed and implemented modular electrical PCB/wiring architectures for autonomous warehouse navigation",
      "Integrated responsive 433MHz wireless emergency-stop (RF transceiver) modules ensuring fail-safe rover operation",
    ],
  },
];

export const featured = {
  title: "Varaha: Autonomous Ground Vehicle",
  org: "Team Abhiyaan, IIT Madras",
  event: "IGVC 2026 · Oakland University, Michigan",
  role: "Software Lead",
  description:
    "Varaha is Team Abhiyaan's autonomous ground vehicle, built to navigate laned outdoor courses without human input. It competed in the 2026 Intelligent Ground Vehicle Competition against 33 international teams, placing 5th in the Design Challenge and 7th in AutoNav, and pitched the vehicle's architecture to a panel of 11 industrial judges.",
  points: [
    "Secured 5th place internationally in the Design Challenge and 7th in AutoNav among 33 teams at IGVC 2026",
    "Implemented a SegFormer vision transformer for real-time lane detection, optimizing TensorRT inference at 30+ FPS",
    "Configured the Nav2 stack and calibrated stereo cameras for visual odometry, building URDF transforms for lane following",
    "Processed 3D LiDAR point clouds via intensity-based clustering to detect reflective lane markings on the racetrack",
    "Engineered a long-range (200m+) wireless E-Stop system (LoRa, NRF, ESP32) with custom logic-IC failsafe circuitry",
    "Introduced a cybersecurity scheme securing the LoRa failsafe links via AES-256-GCM encryption against RF spoofing",
  ],
  reportUrl: "https://igvc.secs.oakland.edu/design/2026/9.pdf",
  links: [
    { label: "Lane Detection", url: "https://github.com/mad-hav-22-07/Lane-Detection" },
    { label: "Vision Transformer", url: "https://github.com/mad-hav-22-07/Vision-Transformer" },
  ],
};

export const projects = [
  {
    title: "Order Flow Imbalance",
    tag: "Quant Research",
    description:
      "Modeled order-flow imbalance on NASDAQ order-book events, proving a linear price impact at 4.1% out-of-sample R². Backtested 384 out-of-sample trades at touch prices (67% hit rate), and caught a spurious 9.6% R² microprice signal as circular leakage against a genuine mid-price signal.",
    stack: ["Python", "Pandas", "NumPy", "LOBSTER data"],
    url: "https://github.com/mad-hav-22-07/ofi-price-impact",
  },
  {
    title: "Truss Analysis",
    tag: "Course Project · AM2200",
    description:
      "A 2D truss FEA solver with per-member strength-of-materials analysis: stress, factor of safety, Euler buckling, and slenderness ratio, exposed through a Streamlit + Plotly app to visualize the solver in action.",
    stack: ["Python", "NumPy", "Streamlit", "Plotly"],
    url: "https://github.com/mad-hav-22-07/Truss_Analysis",
  },
  {
    title: "Inverted Pendulum Race Car",
    tag: "Course Project · ME2400",
    description:
      "An inverted pendulum on a cart, balanced by a reaction wheel and driven by PWM, using a dual-core ESP32 for 2.4GHz WiFi remote operation. Calibrated a BNO055 IMU to cut data drift by 15.5%, simulating an LQR + PID fallback in Pygame before hardware trials.",
    stack: ["ESP32", "C++", "PID/LQR", "Pygame"],
    url: "https://github.com/mad-hav-22-07/MIC_Project",
  },
  {
    title: "RL Gym Models",
    tag: "Reward Rush · 2nd Place",
    description:
      "Trained and benchmarked 6 reinforcement learning algorithms (DQN, SAC, A2C, SARSA, MC) across OpenAI Gym environments, clinching runner-up at IBot's Reward Rush RL competition out of 50+ teams across IIT Madras.",
    stack: ["Python", "PyTorch", "OpenAI Gym"],
    url: "https://github.com/mad-hav-22-07/RL_Gymnasium_Models",
  },
  {
    title: "Autonomous Vehicle Elec Stack",
    tag: "Inter IIT Tech Meet",
    description:
      "A ROS2 electronics stack bridging navigation software and embedded motor controllers for a 4-wheel mecanum drive robot: inverse/forward kinematics, a serial handshake protocol, and IMU integration over Teensy 4.1.",
    stack: ["ROS2", "Teensy 4.1", "ESP32"],
    url: "https://github.com/mad-hav-22-07/Autonomous_Vehicle_Elec_Stack",
  },
  {
    title: "Digital OMR Reader",
    tag: "Self Project",
    description:
      "An optical mark recognition system that generates print-ready OMR sheets with ReportLab and grades scanned sheets with OpenCV, including synthetic filled-sheet generation for testing without a physical scanner.",
    stack: ["Python", "OpenCV", "ReportLab"],
    url: "https://github.com/mad-hav-22-07/Digital_OMR_Reader",
  },
];

export const achievements = [
  {
    title: "IGVC 2026 · Team Abhiyaan",
    meta: "5th in Design Report, 7th in AutoNav · 33 teams",
    description:
      "Pitched the vehicle architecture to a panel of 11 industrial judges; engineered a 200m+ range wireless E-Stop system secured with AES-256-GCM encryption against RF spoofing.",
  },
  {
    title: "QRT Quant Challenge",
    meta: "Top 10 at IIT Madras",
    description:
      "Advanced to the elite Phase 2 round after mastering Markowitz MPT, Equal Volatility, and Bellman portfolio optimization frameworks; engineered multi-indicator strategies reaching IS Sharpe 2.5, OS Sharpe 1.2+.",
  },
  {
    title: "Nemetschek x IITM AI Hackathon",
    meta: "2nd Runner-Up · ₹1L prize",
    description:
      "Built an HRNet-W32 deep learning model (0.93 mIoU) with a neurosymbolic pipeline converting 2D floorplans into IFC-compliant 3D BIM models, automating weeks of manual effort.",
  },
  {
    title: "Reward Rush · RL Competition",
    meta: "2nd Place · ₹1.5k prize",
    description:
      "Trained and benchmarked 6 RL algorithms across OpenAI Gym environments, placing runner-up out of 50+ teams across IIT Madras.",
  },
];

export const leadership = [
  {
    role: "Contingent Captain",
    org: "IITM Tech Contingent",
    period: "Mar '26 – Present",
    description:
      "Selected for the 3-member Electronics & Robotics core team, spearheading institute-wide technical contingent strategy and drafting recruitment assignments across ROS2, YOLO, SLAM, and path planning.",
  },
  {
    role: "Events Manager",
    org: "Techsoc",
    period: "Jul '25 – Mar '26",
    description:
      "Led the Freshie Roadmap for 700+ first-years and managed 10+ inter-club events across the IIT Madras technical ecosystem.",
  },
  {
    role: "Class Representative",
    org: "Mechanical Engineering, IIT Madras",
    period: "Aug '24 – Present",
    description:
      "Elected by the batch to represent Mechanical Engineering, organizing merchandise sales and keeping student-faculty communication running smoothly.",
  },
];

export const skills = {
  Languages: ["Python", "C/C++", "JavaScript", "Node.js"],
  Robotics: ["ROS2", "Nav2", "Gazebo", "RViz", "Altium Designer"],
  Web: ["React", "PostgreSQL", "MongoDB", "Redis", "FastAPI", "Docker"],
  "ML / Data": ["PyTorch", "Scikit-Learn", "OpenCV", "Pandas", "NumPy"],
  Tools: ["Git", "Bash", "Figma", "Fusion 360", "LaTeX"],
};
