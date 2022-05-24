import React from 'react';
import ContentLoader from "react-content-loader"

const Skeleton = (props) => {
    return (
        <ContentLoader
            speed={6}
            width={384}
            height={300}
            viewBox="0 0 384 300"
            backgroundColor="#F4F7FD"
            foregroundColor="#fff"
            {...props}
            className={"mb-3"}
        >
            <rect x="0" y="0" rx="0" ry="0" width="384" height="300"/>
        </ContentLoader>
    );
};

export default Skeleton;