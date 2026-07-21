export interface CertificationData {
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  courses: string[];
}

export const certifications: CertificationData[] = [
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
    date: "September 22, 2024",
    verifyUrl: "https://coursera.org/verify/professional-cert/8H2YTFIBIF6P",
    courses: [
      "Technical Support Fundamentals",
      "The Bits and Bytes of Computer Networking",
      "Operating Systems and You: Becoming a Power User",
      "System Administration and IT Infrastructure Services",
      "IT Security: Defense Against the Digital Dark Arts",
    ],
  },
];
