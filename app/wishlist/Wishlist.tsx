import React, { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import styles from "./page.styles";
import PageNavbar from "@/components/pageNavbar/PageNavbar";
import { useRouter } from 'expo-router';

// Define the type for the product within a wishlist item
type ProductType = {
    product_id: number;
    category_id: number;
    product_name: string;
    price: number;
    image: string;
    description: string;
};

// Define the type for the wishlist item
type WishListItemType = {
    wishlist_id: number;
    branch_id: number;
    product_id: number;
    date_added: string;
    product: ProductType;
};

// Type for the wishlist array
type WishListType = WishListItemType[];

const Cart = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [wishList, setWishList] = useState<WishListType>([]);
    const router = useRouter();

    useEffect(() => {
        const GetList = async () => {
            try {
                const response = await fetch("http://192.168.1.12:3000/api/wishlist/1", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setWishList(data);
            } catch (err) {
                console.error(err);
                setErrorMessage("Error fetching the wishlist");
            }
        };
        GetList();
    }, []);

    return (
        <ScrollView>
            <PageNavbar title={"عربة التسوق"} />
            <ScrollView className='flex flex-col gap-[10px] mx-auto mt-4 h-[400px]'>
                {
                    wishList.map((item) => (
                        <View
                            key={item.product.product_id}
                            className='w-[350px] h-[104px] flex relative bg-[#EDEDED] p-4 rounded-3xl '
                        >
                            <Image
                                source={require("../../assets/icons/meatOffer.png")}
                                className='w-[88px] absolute right-[10] top-[8] rounded-full h-[88px]'
                            />
                            <View className='flex flex-col absolute left-[55] top-[15]'>
                                <Text className='text-right' style={styles.newPrice}>
                                    {item.product.price} ج.م
                                </Text>
                                <Text className='text-right text-[12px]' style={styles.offerName}>
                                    {item.product.product_name.length > 30
                                        ? `${item.product.product_name.slice(0, 30)}...`
                                        : item.product.product_name}
                                </Text>
                                <Pressable>
                                    <Text className='text-[12px] p-3 bg-[#CAE9D9] w-[100px] text-center rounded-full'>
                                        حذف
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </ScrollView>
    );
};

export default Cart;
