import React from 'react';
import Layout from '../../component/Layout/Layout'

const Brandbike = (props) => {
    return (
        <div>
            <Layout>
                {props.match.params.slug}
            </Layout>
        </div>
    );
};

export default Brandbike;