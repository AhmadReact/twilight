import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Twilight Technologies",
  description:
    "Learn about Twilight Technologies — a leading service-based company providing custom software solutions since 2015, trusted by clients worldwide.",
};

export default function AboutUsPage() {
  return <AboutPage />;
}
