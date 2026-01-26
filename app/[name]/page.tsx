"use client"
import { use, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { nameConstants } from "@/constants/nameConstants";
import { notFound } from "next/navigation";

const NameDetailPage = ({ params }: { params: Promise<{ name: string }> }) => {
    const { name } = use(params)
    const [isOpen, setIsOpen] = useState(false)
    const nameData = nameConstants.find(item => item.key === name)

    if (!nameData) {
        notFound();
    }
    return (
        <div className="flex h-dvh items-center bg-black justify-center relative overflow-hidden">
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer relative px-8 py-4 text-lg font-semibold text-white rounded-full 
                    bg-linear-to-r from-purple-600 via-pink-500 to-orange-400
                    shadow-[0_0_20px_rgba(168,85,247,0.5)]
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
                    transition-shadow duration-300
                    before:absolute before:inset-0 before:rounded-full before:bg-linear-to-r 
                    before:from-purple-600 before:via-pink-500 before:to-orange-400 
                    before:blur-lg before:opacity-50 before:-z-10"
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

                        <Image
                            src="/images/bg/bg.png"
                            alt="Popup Background"
                            width={1536}
                            height={820}
                            className="object-cover w-full h-full aspect-1536/820"
                            priority
                        />

                        <div className="absolute top-[calc(50/820*100%)] w-[calc(200/1536*100%)] h-[calc(56/820*100%)] left-1/2 -translate-x-1/2">
                            <Image
                                src="/images/logo/logovinpet-02.webp"
                                alt="Logo"
                                width={200}
                                height={56}
                                className="aspect-200/56 w-full h-full object-contain"
                            />
                        </div>
                        <div className="absolute w-[calc(621/1536*100%)] h-[calc(193/820*100%)] top-[calc(161/820*100%)] left-1/2 -translate-x-1/2">
                            <Image
                                src="/images/bg/YEP.png"
                                alt="Logo"
                                width={621}
                                height={193}
                                className="aspect-621/193 w-full h-full object-contain"
                            />
                        </div>

                        <div className="absolute top-[calc(365/820*100%)] flex flex-col gap-1 items-center justify-center left-1/2 -translate-x-1/2">
                            <p className="text-[calc(18/1536*100vw)] tracking-widest">Trân trọng kính mời</p>
                            <h2 className="text-2xl md:text-[calc(30/1536*100vw)] font-bold tracking-wide uppercase">
                                {nameData.value}
                            </h2>
                        </div>


                        {/* Invitation Content */}
                        <div className="absolute top-[calc(466/820*100%)] w-[calc(415/1536*100%)] h-[calc(170/820*100%)] left-1/2 -translate-x-1/2 text-center text-white flex flex-col items-center justify-center">
                            <div className="grid grid-cols-3 h-full items-center gap-4">
                                <span className="text-2xl md:text-[calc(30/1536*100vw)] italic px-6 md:px-6 py-2 border-y-2 border-white">Thứ 7</span>
                                <div className="flex h-full items-center justify-center">
                                    <span className="text-6xl md:text-[calc(128/1536*100vw)] font-light leading-[0.7] translate-y-[0.1em]">5</span>
                                </div>
                                <span className="text-2xl md:text-[calc(30/1536*100vw)] px-6 md:px-6 py-2 border-y-2 border-white">18:30</span>
                            </div>
                            <span className="text-2xl md:text-[calc(30/1536*100vw)]">Tháng 2</span>
                        </div>
                        <div className="text-[calc(18/1536*100vw)] absolute top-[calc(655/820*100%)] left-1/2 -translate-x-1/2 text-center text-white">
                            Địa điểm: 424 Nguyễn Thái Sơn, P An Nhơn, TPHCM
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );

}

export default NameDetailPage