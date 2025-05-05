export interface ResumeData {
  education: {
    degree: string;
    school: string;
    years: string;
    location: string;
    areaOfStudy?: string;
  }[];
  experience: {
    title: string;
    company: string;
    years: string;
    location: string;
    responsibilities: string[];
  }[];
  skills: {
    certifications: {
      name: string;
      issuer: string;
      year: string;
      description?: string;
    }[];
    technical: string[];
    awards: {
      name: string;
      year?: string;
      description?: string;
    }[];
    leadership: {
      role: string;
      organization: string;
      description?: string;
    }[];
  };
}

export const resumeData: ResumeData = {
  education: [
    {
      degree: "B.S - Computer Science",
      school: "Harvey Mudd College",
      years: "2019 - 2023",
      location: "Claremont, CA",
      areaOfStudy: "Minor in Cognitive Psychology"
    },
    {
      degree: "M.S - Biomedical Engineering",
      school: "University of Washington",
      years: "2024 - 2025",
      location: "Seattle, WA",
      areaOfStudy: "Focus in Medical Data Science"
    }
  ],
  experience: [
    {
      title: "Founder & CTO",
      company: "Ouiza AI",
      years: "Dec 2024 - Present",
      location: "Seattle, WA",
      responsibilities: [
        "Leading an AI platform that trains medical robots using synthetic data",
        "Developing and implementing synthetic data generation pipelines for medical robotics training"
      ]
    },
    {
      title: "AI Engineer",
      company: "University of Washington",
      years: "Oct 2024 – present",
      location: "Seattle, Washington",
      responsibilities: [
        "Developed and launched a HIPAA-compliant onboarding software for Kati Lui's Regenerative Hand Clinic out of Harborview Medical Center in Washington",
        "Awarded multiple government grants to work alongside the Plastic Surgery team to develop novel Human Pose Estimation models to use in tracking surgical recovery."
      ]
    },
    {
      title: "Founding Engineer",
      company: "Theo Health",
      years: "Nov 2023 – Sep 2024",
      location: "Naples, Italy",
      responsibilities: [
        "Developed and launched a pair of smart compression shorts and an associated app that provides elite athletes with biometric form analysis",
        "Wrote novel Human Pose Analysis software to track athletes form and progress, resulting in a 300k investment from Olympic Gold Medalist Xander Shaufelli"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Tesla",
      years: "May 2022 – April 2023",
      location: "San Francisco, CA",
      responsibilities: [
        "Developed Django software to monitor and report on solar production for SREC credit collection",
        "Wrote inward-facing financial software"
      ]
    },
    {
      title: "Research Associate",
      company: "Bill & Melinda Gates Institute for Disease Modeling",
      years: "Aug 2022 – May 2023",
      location: "Claremont, CA",
      responsibilities: [
        "Researched improvements to existing COVID-19 models to represent historically better redlined communities",
        "Wrote and executed simulations of possible COVID-19 interventions, culminating in a poster session and final paper"
      ]
    }
  ],
  skills: {
    certifications: [
      {
        name: "Nationally Registered EMT",
        issuer: "National Registry of Emergency Medical Technicians",
        year: "Current"
      },
      {
        name: "AIARE 1: Backcountry Avalanche Awareness and Rescue Training",
        issuer: "American Institute for Avalanche Research and Education",
        year: "2023",
        description: "Performed multiple analysis and rescue while backcountry splitboarding across Patagonia (September-October 2023)"
      }
    ],
    technical: [
      "PyTorch",
      "Computer Vision",
      "Medical Image Processing",
      "HIPAA Compliance",
      "React Native",
      "TypeScript",
      "Python",
      "AWS",
      "Docker",
      "MLOps"
    ],
    awards: [
      {
        name: "3x USA Youth Ice Climbing Champion",
        description: "National champion in youth ice climbing competition"
      },
      {
        name: "4th Place - Uluru World Cup",
        description: "Women's U21 category at the international ice climbing competition"
      },
      {
        name: "2x GoCode Colorado Finalist",
        description: "In high school I was a two time finalist in a year long statewide programming competition for professional developers"
      },
      {
        name: "High School Valedictorian",
        description: "Graduated with highest academic honors"
      },
      {
        name: "Hack Davis Finalist",
        description: "University of Davis hackathon finalist"
      },
      {
        name: "SEBA Finalist",
        description: "Social Entrepreneurship Business Association competition finalist"
      },
      {
        name: "Sparkathon Winner",
        description: "Innovation and entrepreneurship competition winner"
      }
    ],
    leadership: [
      {
        role: "Founder & Director",
        organization: "Seattle Dataproject",
        description: "Leading a nonprofit that leverages Seattle public data to develop low-cost, high-yield interventions for community improvement"
      },
      {
        role: "Founder",
        organization: "Claremont Blockchain Club",
        description: "Established and led the blockchain technology club at Claremont Colleges"
      },
      {
        role: "Teacher",
        organization: "Prison Education Program",
        description: "Taught in schools as part of the prison education initiative"
      },
      {
        role: "Team Captain",
        organization: "USA Youth Ice Climbing Team ",
        description: "6 years as a member of the USA Youth Ice Climbing Team"
      }
    ]
  }
}; 