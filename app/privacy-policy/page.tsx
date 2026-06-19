import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacyPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Twilight Technologies",
  description:
    "Learn how Twilight Technologies collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} />;
}
