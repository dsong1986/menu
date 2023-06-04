

import React from 'react';
import BusinessApp from "../components/BusinessApp";

const BusinessPage = ({ params }: { params: { slug: string } }) => {

    const businessId = params.slug[0];
    const step = params.slug[1];

    return (
        <BusinessApp />
    );

}

export default BusinessPage;

