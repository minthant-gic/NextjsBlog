import React from 'react';

const BaseLayout = ({children}) => {
    return (
        <main className="max-w-[300px] mx-auto px-4 py-8">
            {children}
        </main>
    );
};

export default BaseLayout;