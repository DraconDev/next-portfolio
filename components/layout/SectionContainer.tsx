"use client";
type Props = {
    children: React.ReactNode;
    name: string;
};

const SectionContainer = (props: Props) => {
    return (
        <div className="w-full justify-center items-center text-center p-4">
            <div className="flex flex-col w-full ">
                <h1 className="text-6xl pb-4">{props.name}</h1>
                {props.children}
            </div>
        </div>
    );
};

export default SectionContainer;
