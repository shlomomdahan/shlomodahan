import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { socials } from "@/constants/socials";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Shlomo Dahan</Heading>
      <div className="w-24 h-1 bg-gray-200 dark:bg-gray-800 rounded-full mt-2 mb-6" />
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software engineer based in Miami, Florida. Currently working
        as a full-stack developer at{" "}
        <a
          href="https://americandream.com"
          className="text-primary hover:text-primary/80 underline underline-offset-4"
        >
          American Dream
        </a>
        .
      </Paragraph>

      <div className="flex space-x-4 mt-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-900 transition-colors"
            aria-label={social.label}
          >
            <social.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </Container>
  );
}
