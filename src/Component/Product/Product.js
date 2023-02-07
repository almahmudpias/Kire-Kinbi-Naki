import React ,{useState} from 'react';
import './Product.css';
import data from '../Data/data.json'
import ProductCard from '../ProductCard/ProductCard';


const Product = () => {
    console.log(data);
        
        const first20 = data.slice(0, 3);
        const [dataUser, setDataUser] = useState(first20);
        const [details, setDetails] = useState([]);


        const handleAddUser =(user) =>{
            console.log('clicked',user);
            const newUser = [...details,user];
            setDetails(newUser);  
        }

    return (
        <div className='text-center mt-3'>
            <div className='py-4 container'>
                <div className='row justify-content-center'>

                    {
                        dataUser.map(ud => <ProductCard handleAddUser={handleAddUser} userDetails={ud}></ProductCard>)
                    }

                </div>

            </div>

    </div>
        
    );
};

export default Product;