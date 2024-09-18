// pages/product/checkout/[name]/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import CardDetail from '@/components/CardDetail';
import Footer from '@/components/Footer';

const Checkout = () => {
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { id, name } = router.query; // Mendapatkan ID dan nama dari URL
    const count = parseInt(router.query.count as string) || 1;


    useEffect(() => {
        if (id) {
            async function fetchProductCheckout() {
                try {
                    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                    setProduct(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching product details:', error);
                    setLoading(false);
                }
            }

            fetchProductCheckout();
        }
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (!product) {
        return <p className="text-center text-red-500">Product not found.</p>;
    }

    const totalPrice = product.price * count;

    return (
        <>
            <Navbar />
            <div className="flex flex-col p-5 gap-5">
                <CardDetail
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    category={product.category}
                    rating={product.rating.rate}
                    count={count}
                    totalPrice={totalPrice} // Pass totalPrice here
                    description={product.description}
                />
                {/* Tambahkan detail lain yang dibutuhkan untuk checkout */}
            </div>
            <Footer/>
        </>
    );
};

export default Checkout;
