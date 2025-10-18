"use client";
import dynamic from "next/dynamic";

const PhaserGameWithoutSSR = dynamic(() => import("@/games/fruitHunter"), {
    ssr: false,
});

const mainStyle = {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const Page = () => {
    return (
        <div style={mainStyle}>
            <PhaserGameWithoutSSR />
        </div>
    );
};

export default Page;
