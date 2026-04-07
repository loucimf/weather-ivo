import type { CSSProperties } from "react"
import { designSystemStyles } from "../styles/designSystemStyles"

interface BaseContainerProps {
    children: React.ReactNode
    maxWidth?: string
    maxHeight?: string
    height?: CSSProperties["height"]
    width?: string
    margin?: CSSProperties["margin"]
    gap?: string
    backgroundColor?: string
    padding?: string
    paddingLeft?: string
    paddingTop?: string
    paddingRight?: string
    paddingBottom?: string
    alignment?: CSSProperties["alignItems"]
    justifyContent?: CSSProperties["justifyContent"]
    minWidth?: CSSProperties["minWidth"]
    overflow?: CSSProperties["overflow"]
    title?: string
    className?: string
    name?: string
}

interface VerticalContainerProps extends BaseContainerProps {
    scrollable?: boolean
}

interface HorizontalContainerProps extends BaseContainerProps {
    horizontalPadding?: string
    justifyContent?: CSSProperties["justifyContent"]
    gridTemplateColumns?: CSSProperties["gridTemplateColumns"]
}

export const VerticalContainer: React.FC<VerticalContainerProps> = ({ 
    children, 
    maxWidth = '100%',
    maxHeight = undefined,
    height = undefined,
    width = "100%",
    margin = '0',
    gap = designSystemStyles.gapMd,
    backgroundColor = 'transparent',
    alignment = 'start',
    justifyContent = undefined,
    padding = designSystemStyles.paddingZero,
    paddingLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    scrollable = false,
    className,
    name = null
}) => {

    if (padding !== designSystemStyles.paddingZero) {
        paddingLeft = padding
        paddingRight = padding
        paddingTop = padding
        paddingBottom = padding

        // this way, no weird order bugs occur (conflicting/overwriting paddings)
    }

    return (
        <div className={[ (name != null ? `DSName:${name}` : ''), 'DSVerticalContainer', className].filter(Boolean).join(' ')} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: gap,
            width: width,
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            height: height,
            margin: margin,
            padding: padding,
            paddingLeft: paddingLeft ?? padding,
            paddingRight: paddingRight ?? padding,
            paddingTop: paddingTop ?? padding,
            paddingBottom: paddingBottom ?? padding,
            fontFamily: designSystemStyles.fontFamily,
            backgroundColor: backgroundColor,
            alignItems: alignment,
            justifyContent: justifyContent,
            overflowY: scrollable ? 'auto' : undefined,
            flexGrow: scrollable ? '1' : '0',
            overflowX: scrollable ? 'hidden' : undefined
        }}>
            {children}
        </div>
    );
};

export const HorizontalSpacer: React.FC = () => {
    return (
        <div className="DSHorizontalSpacer" style={{width: '100%'}}/>
    )
}

export const VerticalSpacer: React.FC = () => {
    return (
        <div className="DSVerticalSpacer" style={{height: '100%'}}/>
    )
}

export const HorizontalContainer: React.FC<HorizontalContainerProps> = ({ 
    children, 
    maxHeight = undefined,
    maxWidth = "100%",
    height = undefined,
    width = "100%",
    horizontalPadding = designSystemStyles.paddingZero,
    padding = designSystemStyles.paddingZero,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    backgroundColor = 'transparent',
    alignment = 'center',
    justifyContent = designSystemStyles.justifyContentLeft,
    gap = designSystemStyles.gapMd,
    margin = '0',
    minWidth = undefined,
    overflow = undefined,
    gridTemplateColumns = undefined,
    title = undefined,
    className,
    name
}) => {

    if (padding != designSystemStyles.paddingZero) {
        paddingLeft = padding
        paddingRight = padding
        paddingTop = padding
        paddingBottom = padding
        // this way, no weird order bugs occur (conflicting/overwriting paddings)
    }

    return (
        <div
            className={[(name != null ? `DSName:${name}` : ''), 'DSHorizontalContainer', className].filter(Boolean).join(' ')}
            title={title}
            style={{
                display: gridTemplateColumns ? 'grid' : 'flex',
                flexDirection: 'row',
                gridTemplateColumns: gridTemplateColumns,
                gap: gap,
                height: height,
                maxHeight: maxHeight,
                width: width,
                maxWidth: maxWidth,
                minWidth: minWidth,
                margin: margin,            
                padding: padding,
                paddingLeft: paddingLeft ?? horizontalPadding ?? padding,
                paddingRight: paddingRight ?? horizontalPadding ?? padding,
                paddingTop: paddingTop ?? padding,
                paddingBottom: paddingBottom ?? padding,
                fontFamily: designSystemStyles.fontFamily,
                backgroundColor: backgroundColor,
                alignItems: alignment,
                justifyContent: justifyContent,
                overflow: overflow
            }}
        >
            {children}
        </div>
    );
};

interface CardContainerProps {
    children: React.ReactNode
    maxWidth?: string
    width?: string
    height?: string
    padding?: string
    backgroundColor?: string
    background?: CSSProperties["background"]
    accentColor?: string
    accentPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
    accentFade?: string
    borderRadius?: string
    boxShadow?: string
    gap?: string
    border?: string
}

export const CardContainer: React.FC<CardContainerProps> = ({ 
    children, 
    maxWidth = '100%',
    width = '100%',
    padding = designSystemStyles.paddingSm,
    backgroundColor = designSystemStyles.colorBackgroundWhite,
    background,
    accentColor,
    accentPosition = "top-right",
    accentFade = "60%",
    borderRadius = designSystemStyles.cornerRadiusComponent,
    boxShadow = designSystemStyles.shadowCard,
    height = 'auto',
    border,
    gap = "",
}) => {
    const accentMap = {
        "top-left": "top left",
        "top-right": "top right",
        "bottom-left": "bottom left",
        "bottom-right": "bottom right"
    } as const

    const resolvedBackground =
        background ??
        (accentColor
            ? `radial-gradient(circle at ${accentMap[accentPosition]}, ${accentColor} 0%, transparent ${accentFade}), ${backgroundColor}`
            : backgroundColor)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: width,
            height: height,
            maxWidth: maxWidth,
            padding: padding,
            gap: gap,
            backgroundColor: backgroundColor,
            background: resolvedBackground,
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            border: border,
            fontFamily: designSystemStyles.fontFamily
        }}>
            {children}
        </div>
    )
}
