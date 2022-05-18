import ContentLoader from "react-content-loader"

const Loader = () => {
    return (
        <ContentLoader
            speed={4}
            width={800}
            height={400}
            viewBox="0 0 800 400"
            backgroundColor="#000"
            foregroundColor="#ffffff"
        >
            <rect x="0" y="0" rx="0" ry="0" width="320" height="320"/>
        </ContentLoader>
    );
};

export default Loader;
