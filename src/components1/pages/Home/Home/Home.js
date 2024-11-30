import React, { useState } from "react";
import HeaderSection from '../Header.js/header';
import TileCards from "../TileCards/TileCards";
import ShowMore from '../ShowMore/showMore';
import CarDataProvider from "../../../carDataProvider"; // Import the CarDataProvider

function Home() {
    const [visibleCount, setVisibleCount] = useState(3);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1300px', marginLeft: '50px' }}>
            <HeaderSection />
            <CarDataProvider>
                {(cars) => (
                    <>
                        <TileCards tiles={cars.slice(0, visibleCount)} />
                        <ShowMore onClick={handleShowMore} />
                    </>
                )}
            </CarDataProvider>
        </div>
    );
}

export default Home;