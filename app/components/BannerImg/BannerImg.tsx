"use client";
import React, { useState } from "react";
import styles from "./BannerImg.module.css";

interface BannerImgProps {
  info: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    backgroundTemplate: string;
  };
  onEdit: (info: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    backgroundTemplate: string;
  }) => void;
}

const BannerImg = ({ info, onEdit }: BannerImgProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className={styles["banner-container"]}
      style={{ backgroundImage: `url(${info.backgroundTemplate})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles["banner-data"]}>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        <button>{info.cta}</button>
      </div>
      <div className={styles["banner-img"]}>
        <img src={info.image} alt={info.title} />
      </div>

      {hovered && <div className={styles["banner-overlay"]} />}

      {hovered && (
        <button
          onClick={() => onEdit(info)}
          className={styles["banner-button"]}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default BannerImg;
