type Props = {
    name: string;
    items: string[];
};

const SkillCard = (props: Props) => {
    return (
        <div>
            <div className="w-full">{props.name}</div>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
