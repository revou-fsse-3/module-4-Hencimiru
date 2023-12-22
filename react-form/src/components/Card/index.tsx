import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    border: boolean;
    children: ReactNode;
}


const Card = ({ border, children, ...props } : Props) => {

    return (
        <div className={`${border && 'w-96 bg-teal-200	 rounded border-emerald-700 border shadow-md'} p-8 ${props.className}`}>
            {children}
        </div>
    )
}

export default Card