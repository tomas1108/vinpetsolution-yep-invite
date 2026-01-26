"use client"
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { nameConstants } from "@/constants/nameConstants";
import { notFound } from "next/navigation";

const NameDetailPage = ({ params }: { params: Promise<{ name: string }> }) => {
    const { name } = use(params)

    // State
    const [isOpen, setIsOpen] = useState(false)
    const nameData = nameConstants.find(item => item.key === name)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (!nameData) {
        notFound();
    }
    return (
        <div className="flex h-dvh items-center bg-black justify-center relative overflow-hidden">
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-8 py-3 text-lg text-white rounded-full border border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white transition-all duration-300"
            >
                Mở thư mời
            </motion.button>
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

                        <div className="absolute w-[calc(132/430*100%)] h-[calc(34/932*100%)] top-[calc(147/932*100%)] lg:top-[calc(50/820*100%)] lg:w-[calc(200/1536*100%)] lg:h-[calc(56/820*100%)] left-1/2 -translate-x-1/2">
                            <Image
                                src="/images/logo/logovinpet-02.webp"
                                alt="Logo"
                                width={200}
                                height={56}
                                className="aspect-200/56 w-full h-full object-contain"
                            />
                        </div>
                        <div className="absolute w-[calc(321/430*100%)] h-[calc(100/932*100%)] top-[calc(192/932*100%)] lg:w-[calc(621/1536*100%)] lg:h-[calc(193/820*100%)] lg:top-[calc(161/820*100%)] left-1/2 -translate-x-1/2">
                            <Image
                                src="/images/bg/YEP.png"
                                alt="Logo"
                                width={621}
                                height={193}
                                className="aspect-621/193 w-full h-full object-contain"
                            />
                        </div>

                        <div className="absolute lg:top-[calc(365/820*100%)] top-[calc(308/932*100%)] flex flex-col gap-1 items-center justify-center left-1/2 -translate-x-1/2">
                            <p className="lg:text-[calc(18/1536*100vw)] text-[calc(18/430*100vw)] tracking-widest">Trân trọng kính mời</p>
                            <h2 className="text-[calc(20/430*100vw)] lg:text-[calc(30/1536*100vw)] font-bold tracking-wide uppercase">
                                {nameData.value}
                            </h2>
                        </div>


                        {/* Invitation Content */}
                        <div className="absolute top-[calc(395/932*100%)] w-full gap-[calc(12/932*100vh)] lg:gap-4 lg:top-[calc(466/820*100%)] lg:w-[calc(415/1536*100%)] lg:h-[calc(170/820*100%)] left-1/2 -translate-x-1/2 text-center text-white flex flex-col items-center justify-center">
                            <div className="grid grid-cols-3 h-full items-center gap-2 lg:gap-4">
                                <span className="text-[calc(26/430*100vw)] lg:text-[calc(30/1536*100vw)] italic px-6 md:px-6 py-2 border-y-2 border-white">Thứ 7</span>
                                <div className="flex h-full items-center justify-center">
                                    <span className="text-[calc(112/430*100vw)] lg:text-[calc(128/1536*100vw)] font-light leading-[0.7] translate-y-[0.1em]">5</span>
                                </div>
                                <span className="text-[calc(26/430*100vw)] lg:text-[calc(30/1536*100vw)] px-6 md:px-6 py-2 border-y-2 border-white">18:30</span>
                            </div>
                            <span className="text-[calc(26/430*100vw)] lg:text-[calc(30/1536*100vw)]">Tháng 2</span>
                        </div>
                        <div className="lg:text-[calc(18/1536*100vw)] whitespace-nowrap text-[calc(16/430*100vw)] absolute top-[calc(540/932*100%)] lg:top-[calc(655/820*100%)] left-1/2 -translate-x-1/2 text-center text-white">
                            Địa điểm: 424 Nguyễn Thái Sơn, P An Nhơn, TPHCM
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );

}

export default NameDetailPage