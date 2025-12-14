import { PersonalLanding } from "@/components/ui/personal-landing";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";

export default function Home() {
    return (
        <div className="space-y-0">
            <PersonalLanding />
            <About />
            <Projects />
        </div>
    );
}
