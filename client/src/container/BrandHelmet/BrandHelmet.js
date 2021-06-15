import React,{useEffect, useState} from 'react';
import Layout from '../../component/Layout/Layout';
import axios from '../../helpers/axios';

const BrandHelmet = (props) => {
    const [brandLists, setBrandLists] = useState([]);
    const [error, setError] = useState("");

   useEffect(async() => {
          try {
            const res = await axios.get(`/get/helmet/${props.match.params.slug}`);
            setBrandLists(res.data.helmets);
         } catch (err) {
            setError("Something wrong!");
         }
      }, []);
    
    return (
        <div>
            <Layout>
                {brandLists.map((item,index)=>{
                    return(
                        <ul key={index}>
                            <li key={index}>{item.name}</li>
                        </ul>
                    )
                })}
            </Layout>

        </div>
    );
};

export default BrandHelmet;