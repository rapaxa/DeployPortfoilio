export const theme = {
    fonts: {
        title: {
            family: "'Poppins', sans-serif",
            size: "3rem", // 48px -> 3rem
            weight: "700",
            height: "3.25rem", // 52px -> 3.25rem
            align: "center",
            spacing: "-0.025rem", // -0.4px -> -0.025rem
            color: "#42446E"
        },
        description: {
            family: "'Poppins', sans-serif",
            size: "1.125rem", // 18px -> 1.125rem
            height: "1.625rem", // 26px -> 1.625rem
            weight: "400",
            color: "#666666"
        }
    },
    gradient: {
        nameGradient: 'linear-gradient(13deg, rgba(19, 176, 245, 1), rgba(231, 15, 170, 1) )',
        photoGradient: 'linear-gradient(180deg, #e70faa 20%, #00c0fd 90%)',
        squareGradient: 'linear-gradient(-180deg, #16161621 10%, #FFFFFF 40%) 1'
    },
    media: {
        mobile: "screen and (max-width:768px)", // 768px -> 48rem
        tablet: "screen and (min-width: 768) and (max-width: 1023rem)", // 768px -> 48rem, 1023px -> 64.4375rem
    }
};
