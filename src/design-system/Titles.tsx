import { designSystemStyles } from "@src/styles/designSystemStyles";

interface TitleProps {
    text: string;
}

export const H1Title: React.FC<TitleProps> = ({ 
		text, 
	}) => {

	return (
        <h1>
            {text}
        </h1>
	);
};

export const H2Title: React.FC<TitleProps> = ({ 
		text, 
	}) => {

	return (
        <h2>
            {text}
        </h2>
	);
};


export const Subtitle: React.FC<TitleProps> = ({ 
		text, 
	}) => {

	return (
        <p style={{
            fontSize: designSystemStyles.fontSizeMd,
            color: designSystemStyles.colorTextSecondary,
            marginTop: 0,
            fontWeight: designSystemStyles.fontWeightWarning,
            lineHeight: 1.4
        }}>
            {text}
        </p>
	);
};

