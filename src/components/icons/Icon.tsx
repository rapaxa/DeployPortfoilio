import IconSprite from '../../assets/images/code-svg.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg   preserveAspectRatio="xMidYMid meet" width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use   preserveAspectRatio="xMidYMid meet" xlinkHref={`${IconSprite}#${props.iconId}`}></use>
        </svg>
    )
}
