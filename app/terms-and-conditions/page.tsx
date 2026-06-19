import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { termsAndConditions } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms and Conditions | Twilight Technologies",
  description:
    "Read the Terms and Conditions governing your use of the Twilight Technologies website and services.",
};

export default function TermsAndConditionsPage() {
  return <LegalPage document={termsAndConditions} />;
}
