"use client"
import { use, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { nameConstants } from "@/constants/nameConstants";
import { notFound } from "next/navigation";

const NameDetailPage = ({ params }: { params: Promise<{ name: string }> }) => {
    const { name } = use(params)

    // State
    const [isOpen, setIsOpen] = useState(false)
    const nameData = nameConstants.find(item => item.key === name)
    const isKorean = name === "parkseryun"

    if (!nameData) {
        notFound();
    }
    return (
        <div className="flex h-dvh items-center bg-black justify-center relative overflow-hidden">

            <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {/* Letter Image with floating animation */}
                <motion.div
                    className="relative cursor-pointer"
                    onClick={() => setIsOpen(true)}
                    animate={{
                        x: [0, 10, -10, 5, -5, 0],
                        y: [0, -15, 5, -10, 8, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image
                        src={"/images/bg/thiepmoi.png"}
                        alt="Letter"
                        width={300}
                        height={200}
                        className="w-[200px] md:w-[300px] h-auto drop-shadow-2xl"
                        priority
                    />
                    <motion.div
                        className="absolute w-[25%] left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2"
                        animate={{
                            scale: isOpen ? 2 : 1,
                        }}
                        transition={{

                            scale: isOpen ? {
                                duration: 0.6,
                                ease: "easeOut",
                            } : {
                                duration: 0.3,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <Image
                            src={"/images/bg/vp.png"}
                            alt="Logo Vinpet"
                            width={200}
                            height={200}
                            className="w-full h-auto drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </motion.div>

                <motion.button
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer px-8 py-3 text-lg text-white rounded-full border border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white transition-all duration-300"
                >
                    {isKorean ? "열기" : "Open"}
                </motion.button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 flex items-center  justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        style={{
                            transformOrigin: 'center center',
                        }}
                        className="relative w-full h-full overflow-hidden"
                    >

                        {/* Desktop Background */}
                        <Image
                            src="/images/bg/bg.png"
                            alt="Popup Background"
                            width={1536}
                            height={820}
                            className="hidden md:block object-cover w-full h-full"
                            priority
                        />
                        {/* Mobile Background */}
                        <Image
                            src="/images/bg/bgPortrait.png"
                            alt="Popup Background Mobile"
                            width={430}
                            height={932}
                            className="block md:hidden object-cover w-full h-full"
                            priority
                        />


                        {/* Star Right */}
                        {/* <div
                            className="absolute translate-x-[40%] -translate-y-[44%] w-[calc(1016/1536*100%)] h-[calc(1264/820*100%)] top-0 right-0"
                        >
                            <Image
                                src="/images/bg/star_right.png"
                                alt="Start Right"
                                width={1016}
                                height={1264}
                                className="aspect-1016/1264 w-full h-full object-cover"
                            />
                        </div> */}

                        {/*Light Right */}
                        {/* <div
                            className="absolute translate-x-[55%] -translate-y-[25%] w-[calc(887/1536*100%)] h-[calc(665/820*100%)] top-0 right-0"
                        >
                            <Image
                                src="/images/bg/light_right.png"
                                alt="Light Right"
                                width={887}
                                height={665}
                                className="aspect-887/665 w-full h-full object-cover"
                            />
                        </div> */}

                        <div className="absolute w-[calc(169/430*100%)] h-[calc(48/932*100%)] top-[calc(126/932*100%)] lg:-translate-y-1/2 lg:top-[calc(66/820*100%)] lg:w-[calc(200/1536*100%)] lg:h-[calc(56/820*100%)] left-1/2 -translate-x-1/2">
                            <Image
                                src="/images/logo/logovinpet-02.webp"
                                alt="Logo"
                                width={200}
                                height={56}
                                className="aspect-200/56 w-full h-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center absolute w-[calc(321/430*100%)] h-[calc(100/932*100%)] top-[calc(190/932*100%)] lg:w-[calc(621/1536*100%)] lg:h-[calc(193/820*100%)] lg:top-[calc(161/820*100%)] left-1/2 -translate-x-1/2">
                            <span className="text-white font-aptima text-[calc(16/430*100vw)] lg:text-[calc(24/1536*100vw)] font-bold tracking-wide uppercase">
                                {isKorean ? "VINPET Technology 유한회사" : "CÔNG TY TNHH CÔNG NGHỆ VINPET"}
                            </span>
                            <Image
                                src="/images/bg/YEP.png"
                                alt="Logo"
                                width={621}
                                height={193}
                                className="aspect-621/193 w-full h-full object-contain"
                            />
                        </div>

                        <div className="absolute lg:top-[calc(375/820*100%)] top-[calc(320/932*100%)] flex flex-col gap-1 items-center justify-center left-1/2 -translate-x-1/2">
                            <p className="whitespace-nowrap uppercase lg:text-[calc(18/1536*100vw)] text-[calc(18/430*100vw)] tracking-widest">
                                {isKorean ? "정중히 초대합니다" : "Trân trọng kính mời"}
                            </p>
                            <h2 className="whitespace-nowrap text-[calc(20/430*100vw)] lg:text-[calc(30/1536*100vw)] font-bold tracking-wide uppercase">
                                {nameData.value}
                            </h2>
                        </div>


                        {/* Invitation Content */}
                        <div className="absolute top-[calc(410/932*100%)] w-full gap-[calc(12/932*100vh)] lg:gap-4 lg:top-[calc(466/820*100%)]  left-1/2 -translate-x-1/2 text-center text-white flex flex-col items-center justify-center">
                            <div className="grid grid-cols-3 h-full items-center gap-2 lg:gap-4">
                                <span className="text-[calc(26/430*100vw)] lg:text-[calc(30/1536*100vw)] px-6 md:px-6 py-2 border-y-2 border-white">
                                    {isKorean ? "목요일" : "Thứ 5"}
                                </span>
                                <div className="flex h-full items-center justify-center">
                                    <span className="text-[calc(112/430*100vw)] lg:text-[calc(128/1536*100vw)] font-light leading-[0.7] translate-y-[0.1em]">5</span>
                                </div>
                                <span className="text-[calc(26/430*100vw)] lg:text-[calc(30/1536*100vw)] px-6 md:px-6 py-2 border-y-2 border-white">18:30</span>
                            </div>
                            <span className="text-[calc(26/430*100vw)] lg:text-[calc(30/1536*100vw)]">
                                {isKorean ? "2월" : "Tháng 2"}
                            </span>
                        </div>
                        <div className="lg:text-[calc(18/1536*100vw)] whitespace-nowrap text-[calc(15/430*100vw)] absolute top-[calc(560/932*100%)] lg:top-[calc(645/820*100%)] left-1/2 -translate-x-1/2 text-center text-white">
                            <p>
                                {isKorean ? "장소: 424 Nguyễn Thái Sơn, P An Nhơn, TPHCM" : "Địa điểm: 424 Nguyễn Thái Sơn, P An Nhơn, TPHCM"}
                                <br className="block lg:hidden" />{" "}{isKorean ? "(사우 린 식당)" : "(Nhà Hàng Sáu Linh)"}
                            </p>
                            <p>
                                {isKorean ? "모시게 되어 영광입니다!" : "Rất hân hạnh được đón tiếp !"}
                            </p>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </div>
    );

}

export default NameDetailPage