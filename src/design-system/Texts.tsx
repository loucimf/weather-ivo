import { designSystemStyles } from "@src/styles/designSystemStyles"
import ReactMarkdown from "react-markdown"

interface TextProps {
    text: string
    alignment?: 'start' | 'center' | 'end' | 'left' | 'right'
    markdown?: boolean
    color?: string
    className?: string
    title?: string
    truncate?: boolean
}

type TextSize = 'sm' | 'md' | 'lg'

interface SizedSpanTextProps {
    text: string
    size?: TextSize
    alignment?: 'start' | 'center' | 'end' | 'left' | 'right'
    color?: string
    className?: string
}

const textSizeMap: Record<TextSize, string> = {
    sm: designSystemStyles.fontSizeSm,
    md: designSystemStyles.fontSizeMd,
    lg: designSystemStyles.fontSizeLg,
}

export const Text: React.FC<TextProps> = ({ 
    text,
    alignment = 'start',
    markdown = false,
    color,
    className,
    title,
    truncate = false
}) => {
    const fallbackTitle = truncate
        ? text.replace(/\*\*/g, "").replace(/__/g, "").replace(/`/g, "")
        : undefined
    const resolvedTitle = title ?? fallbackTitle

    if (markdown) {
        return (
            <ReactMarkdown
                components={{
                    p: ({ children }) => 
                    <p
                        className={['DSText', className].filter(Boolean).join(' ')}
                        title={resolvedTitle}
                        style={{
                            fontSize: designSystemStyles.fontSizeSm,
                            color: color ?? designSystemStyles.colorTitleText,
                            margin: 0,
                            fontWeight: designSystemStyles.fontWeightText,
                            lineHeight: 1.7,
                            textAlign: alignment,
                            overflow: truncate ? "hidden" : undefined,
                            textOverflow: truncate ? "ellipsis" : undefined,
                            whiteSpace: truncate ? "nowrap" : undefined
                        }}
                    >
                        {children}
                    </p>,
                    strong: ({ children }) => <strong>{children}</strong>,
                    em: ({ children }) => <em>{children}</em>,
                    a: ({ children, href }) => (
                        <a 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: designSystemStyles.colorMainAction }}
                        >
                            {children}
                        </a>
                    ),
                }}
            >
                {text}
            </ReactMarkdown>
        )
    }

    return (
        <p
            className={['DSText', className].filter(Boolean).join(' ')}
            title={resolvedTitle}
            style={{
                fontSize: designSystemStyles.fontSizeSm,
                color: color ?? designSystemStyles.colorTitleText,
                margin: 0,
                fontWeight: designSystemStyles.fontWeightText,
                lineHeight: 1.7,
                textAlign: alignment,
                overflow: truncate ? "hidden" : undefined,
                textOverflow: truncate ? "ellipsis" : undefined,
                whiteSpace: truncate ? "nowrap" : undefined
            }}
        >
            {text}
        </p>
    )
}

export const SmallText: React.FC<TextProps> = ({ 
    text,
    alignment = 'start',
    markdown = false,
    className
}) => {
    if (markdown) {
        return (
            <ReactMarkdown
                components={{
                    p: ({ children }) => 
                    <p className={['DSSmallText', className].filter(Boolean).join(' ')} style={{ 
                        fontSize: designSystemStyles.fontSizeXsm,
                        color: designSystemStyles.colorText,
                        margin: 0,
                        fontWeight: designSystemStyles.fontWeightText,
                        lineHeight: 1.7,
                        textAlign: alignment,
                    }}>
                        {children}
                    </p>,
                    strong: ({ children }) => <strong>{children}</strong>,
                    em: ({ children }) => <em>{children}</em>,
                    a: ({ children, href }) => (
                        <a 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: designSystemStyles.colorMainAction }}
                        >
                            {children}
                        </a>
                    ),
                }}
            >
                {text}
            </ReactMarkdown>
        )
    }

    return (
        <span className={['DSSmallText', className].filter(Boolean).join(' ')} style={{
            fontSize: designSystemStyles.fontSizeXsm,
            color: designSystemStyles.colorText,
            fontWeight: designSystemStyles.fontWeightText,
            lineHeight: 1.4,
            textAlign: alignment,
        }}>
            {text}
        </span>
    )
}

export const ErrorText: React.FC<TextProps> = ({ 
    text,
    alignment = 'start',
    className
}) => {
    return (
        <span 
            className={['DSErrorText', className].filter(Boolean).join(' ')}
            style={{
                color: designSystemStyles.colorError,
                fontSize: designSystemStyles.fontSizeXsm,
                fontWeight: designSystemStyles.fontWeightText,
                lineHeight: 1.7,
                textAlign: alignment,
            }}
        >
            {text}
        </span>
    )
}

export const RegularText: React.FC<SizedSpanTextProps> = ({
    text,
    size = 'md',
    alignment = 'start',
    color,
    className
}) => {
    return (
        <span
            className={['DSRegularText', className].filter(Boolean).join(' ')}
            style={{
                fontSize: textSizeMap[size],
                fontWeight: designSystemStyles.fontWeightText,
                color: color ?? designSystemStyles.colorText,
                textAlign: alignment,
            }}
        >
            {text}
        </span>
    )
}

export const BoldText: React.FC<SizedSpanTextProps> = ({
    text,
    size = 'md',
    alignment = 'start',
    color,
    className
}) => {
    return (
        <span
            className={['DSBoldText', className].filter(Boolean).join(' ')}
            style={{
                fontSize: textSizeMap[size],
                fontWeight: designSystemStyles.fontWeightTitle,
                color: color ?? designSystemStyles.colorTitleText,
                textAlign: alignment,
            }}
        >
            {text}
        </span>
    )
}
