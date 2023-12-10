type Props = {
    children: React.ReactNode;
};

const SectionContainer = (props: Props) => {
    return (
        <div className="w-full h-full justify-center items-center text-center p-4">
            {props.children}
        </div>
    );
};

export default SectionContainer;
