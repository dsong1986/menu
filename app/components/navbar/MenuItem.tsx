'use client'


interface MenuItemProps {
    onClick: ()=>void;
    label: string;
    fontWeight?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    fontWeight
}) => {
    return (
        <div 
        onClick={onClick}
        className={`
        text-l  
        py-2 
        px-4
        curs
        cursor-pointer
        hover:bg-neutral-50
        ${fontWeight? "font-semibold" : "font-normal" }
        `} >
            {label}
        </div>
    )

}

export default MenuItem;