export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  footerParagraphs?: string[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro?: string[];
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "June 17, 2026",
  intro: [
    "At Twilight Technologies, we prioritize your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or engage with our IT services.",
    "By using our website, you signify your acceptance of this policy.",
  ],
  sections: [
    {
      title: "1. Intellectual Property Rights",
      paragraphs: [
        "Unless otherwise stated, Twilight Technologies and/or its licensors own all intellectual property rights for all material on this website. You are granted a limited, non-exclusive, and non-transferable license to view the materials on this website for personal or internal business use. All rights reserved.",
      ],
    },
    {
      title: "2. Information We Collect",
      paragraphs: [
        "We collect information to provide superior IT services and enhance your user experience. We are transparent about why we need this data at the time of collection:",
      ],
      bullets: [
        "Direct Inquiries: If you contact us via email, contact forms, or support channels, we may collect your name, email address, phone number, and any additional details you provide in your message or attachments.",
        "Account Registration: When you register for an account or client portal, we collect essential business information, such as your name, company name, professional email address, and contact telephone number.",
      ],
    },
    {
      title: "3. How We Use Your Information",
      paragraphs: [
        "We leverage collected data to ensure our services are secure, efficient, and tailored to your needs, specifically to:",
      ],
      bullets: [
        "Service Delivery: Operate, maintain, and provide our IT solutions.",
        "Experience Optimization: Analyze usage patterns to improve website performance, functionality, and user experience.",
        "Innovation: Develop new products, services, and features based on client feedback and market trends.",
        "Communication: Provide customer support, send project updates, and share marketing communications or newsletters (where permitted).",
        "Security: Detect and prevent fraudulent activity and protect the integrity of our digital infrastructure.",
      ],
    },
    {
      title: "4. Cookies and Web Beacons",
      paragraphs: [
        "We utilize 'cookies' to enhance your browsing experience. Cookies are small data files that store information regarding your preferences and the pages you visit on our site. This allows us to customize your experience based on your browser type and specific interactions, ensuring our website functions optimally for your device.",
      ],
    },
    {
      title: "5. Updates to This Policy",
      paragraphs: [
        "We reserve the right to update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page occasionally to stay informed about how we are protecting your information.",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Terms and Conditions",
  lastUpdated: "June 17, 2026",
  sections: [
    {
      title: "1. Introduction",
      paragraphs: [
        "Welcome to Twilight Technologies. These Terms and Conditions govern your use of our website. By accessing or using this website, you confirm that you have read, understood, and agreed to be bound by these terms. If you do not agree with any part of these terms, you must discontinue the use of this website immediately.",
        "You must be at least 18 years of age to use this website. By using this platform, you represent that you meet this age requirement.",
      ],
    },
    {
      title: "2. Intellectual Property Rights",
      paragraphs: [
        "All content, design, code, graphics, and intellectual property present on this website are the exclusive property of Twilight Technologies and its licensors, unless otherwise noted.",
        "You are granted a limited, revocable license to access and view the materials solely for personal or internal business purposes. You may not reproduce, distribute, or create derivative works without express written permission.",
      ],
    },
    {
      title: "3. Permissible Use and Restrictions",
      paragraphs: ["Users are strictly prohibited from engaging in the following activities:"],
      bullets: [
        "Publishing, selling, sublicensing, or commercializing any website material.",
        "Publicly performing or broadcasting our content.",
        "Utilizing the website in any manner that causes or may cause damage or impairment to the availability or accessibility of the site.",
        "Engaging in data mining, scraping, harvesting, or any automated data extraction activities.",
        "Using this website for unauthorized advertising or unsolicited marketing.",
      ],
      footerParagraphs: [
        "Access to restricted areas of our website is reserved for authorized clients. If you are provided with credentials (user ID/password), you are responsible for maintaining their confidentiality.",
      ],
    },
    {
      title: "4. User-Generated Content",
      paragraphs: [
        'Any material you upload, submit, or display on our platform ("Your Content") remains your property; however, by submitting it, you grant Twilight Technologies a worldwide, non-exclusive, royalty-free, and sub-licensable license to use, reproduce, and distribute that content to operate our services. You warrant that your content does not infringe upon any third-party rights. We reserve the right to remove any content at our sole discretion.',
      ],
    },
    {
      title: "5. No Warranties and Limitation of Liability",
      paragraphs: [
        'This website and its contents are provided on an "as is" and "as available" basis. Twilight Technologies makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or availability of this site.',
        "In no event shall Twilight Technologies, its directors, or employees be liable for any indirect, consequential, or special damages arising out of your use of this website or the services provided herein.",
      ],
    },
    {
      title: "6. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless Twilight Technologies and its affiliates from and against any claims, damages, liabilities, and expenses (including legal fees) resulting from your violation of these Terms and Conditions.",
      ],
    },
    {
      title: "7. Severability and Variation",
      paragraphs: [
        "If any provision of these terms is found to be unenforceable under applicable law, such provision shall be severed without affecting the validity of the remaining terms. We reserve the right to modify these terms at any time. Continued use of the website following any changes constitutes your acceptance of the updated terms.",
      ],
    },
    {
      title: "8. Governing Law and Jurisdiction",
      paragraphs: [
        "These terms shall be governed by and construed in accordance with the laws of the USA. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Maryland.",
      ],
    },
  ],
};
