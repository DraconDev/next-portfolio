import SectionContainer from "../layout/SectionContainer";
import WorkCard from "./WorkCard";

type Props = {};

const Work = (props: Props) => {
    return (
        <SectionContainer name="Work">
            <div className="flex flex-col">
                <WorkCard />
            </div>
        </SectionContainer>
    );
};

export default Work;
