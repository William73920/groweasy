"use client";
import React, { useState } from "react";
import styles from "./BannerModal.module.css";
import { data } from "../../../data";

interface BannerModalProps {
  info: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    backgroundTemplate: string;
  };
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BannerModal = ({ info, setIsOpen }: BannerModalProps) => {
  const [formData, setFormData] = useState({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (name === "title") {
      data.adBanners[info.id - 1].title = value;
    }
    if (name === "description") {
      data.adBanners[info.id - 1].description = value;
    }
    if (name === "cta") {
      data.adBanners[info.id - 1].cta = value;
    }
    if (
      name === "image" &&
      e.target instanceof HTMLInputElement &&
      e.target.files
    ) {
      const files = e.target.files;
      const file = files[0];
      const url = URL.createObjectURL(file);
      data.adBanners[info.id - 1].image = url;
    }
  };

  return (
    <div className={styles["banner-modal"]}>
      <div className={styles["banner-modal-content"]}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={info.title}
          name="title"
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          value={info.description}
          name="description"
          onChange={handleChange}
        />

        <label htmlFor="cta">CTA</label>
        <input
          type="text"
          value={info.cta}
          name="cta"
          onChange={handleChange}
        />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" onChange={handleChange} />
        <button onClick={() => setIsOpen(false)}>Save</button>
      </div>
    </div>
  );
};

export default BannerModal;
