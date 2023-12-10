"use client";
type Props = {
    children: React.ReactNode;
    name: string;
    id: string;
};

const SectionContainer = (props: Props) => {
    return (
        <div
            className="w-full justify-center items-center text-center p-1 "
            id={props.id}
        >
            <div className="flex flex-col w-full pt-12">
                <h1 className="text-6xl pb-4">{props.name}</h1>
                {props.children}
            </div>
        </div>
    );
};

export default SectionContainer;
