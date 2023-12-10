type Props = {
    name: string;
    items: string[];
};

const SkillCard = (props: Props) => {
    return (
        <div className="min-w-[270px]  bg-secondary rounded-lg  flex flex-col border-2 border-secondary ">
            <div className="text-2xl flex justify-center items-center border-b-2 border-accent p-2">
                {props.name}
            </div>
            <div className=" flex flex-col ">
                {props.items.map((item, index) => (
                    <div
                        className={`p-2  ${index % 2 === 0 ? "" : ""} `}
                        key={index}
                    >
                        <div className="">{item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
