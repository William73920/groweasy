"use client";
import Image from "next/image";
import styles from "./page.module.css";
import BannerImg from "./components/BannerImg/BannerImg";
import { data } from "../data.js";
import { useState } from "react";
import BannerModal from "./components/BannerModal/BannerModal";

export default function Home() {
  const [modalisOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const setHandleEdit = (info: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    backgroundTemplate: string;
  }) => {
    setModalInfo(info);
    setIsModalOpen(true);
  };

  console.log(modalInfo);
  return (
    <main className={styles.main} style={{ position: "relative" }}>
      {data.adBanners.map((item) => (
        <BannerImg key={item.id} info={item} onEdit={setHandleEdit} />
      ))}

      {modalisOpen && (
        <BannerModal info={modalInfo as any} setIsOpen={setIsModalOpen} />
      )}
    </main>
  );
}
