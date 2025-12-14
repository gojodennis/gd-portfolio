import { PersonalLanding } from "@/components/ui/personal-landing";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
    return (
        <div className="space-y-0">
            <PersonalLanding />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}
