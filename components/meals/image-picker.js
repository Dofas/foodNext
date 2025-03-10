"use client";
import classes from './image-picker.module.css';
import {useRef, useState} from "react";
import Image from "next/image";

const ImagePicker = ({label, name}) => {
    const [pickedImage, setPickedImage] = useState()
    const imageInputRef  = useRef(null);

    function handlePickClick() {
        imageInputRef.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image
                        src={pickedImage}
                        alt="The image selected by the user"
                        fill
                    />}
                </div>
                <input
                    ref={imageInputRef}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    className={classes.input}
                    onChange={handleImageChange}
                    required
                />
                <button className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;