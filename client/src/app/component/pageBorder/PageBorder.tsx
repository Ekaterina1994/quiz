import Image from "src/app/component/Image/Image";
import React, {PropsWithChildren, useEffect, useState} from "react";
import BloodMoon from "src/resources/bloodBack.jpg";
import BloodMoon0 from "src/resources/bloodBack0.jpg";
import BloodMoon1 from "src/resources/bloodBack1+.jpg";
import BloodMoon2 from "src/resources/bloodBack2+.jpg";
import BloodMoon3 from "src/resources/bloodBack3+.jpg";
// import BloodMoon4 from 'src/resources/bloodBack4.jpg';
import BloodMoon5 from "src/resources/bloodBack5+.jpg";
import BloodMoon6 from "src/resources/bloodBack6+.jpg";
import BloodMoon7 from "src/resources/bloodBack7+.jpg";
import BloodMoon8 from "src/resources/bloodBack8+.jpg";
import BloodMoon9 from "src/resources/bloodBack9+.jpg";
import BloodMoon10 from "src/resources/bloodBack10+.jpg";
import BloodMoon11 from "src/resources/bloodBack11+.jpg";
import BloodMoon12 from "src/resources/bloodBack12+.jpg";
import BloodMoon13 from "src/resources/bloodBack13+.jpg";
import BloodMoon14 from "src/resources/bloodBack14+.jpg";
import BloodMoon15 from "src/resources/bloodBack15+.jpg";
import Logo from "src/resources/logo.png";
import Logo2 from "src/resources/logo2.png";
import styles from "src/app/component/pageBorder/PageBorder.module.scss";
import {Button} from "src/app/component/button/Button";

// TODO: remove all eslint-disable-next-line in file
/**
 * Page border props
 */
interface PageBorderProps {
  /**
   * If exist then back button appears
   */
  // eslint-disable-next-line react/require-default-props
  backButton?: {
    onClick: () => void;
    text: string;
  }
}

// TODO add comments
interface ImageStyles {
  right: React.CSSProperties;
  left: React.CSSProperties;
  center: React.CSSProperties;
}

const imageStyles: ImageStyles = {
  right: {right: "0"},
  left: {left: "0"},
  center: {
    left: "calc(-50vw + 50%)",
    right: "calc(-50vw + 50%)",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

interface BackgroundImage {
  /**
     * Link to image
     */
  image: any;

  /**
     * specific styles for background image
     */
  styles: React.CSSProperties[];
}

interface BackgroundImages {
  // TODO: remove any
  [key: number]: BackgroundImage;
}

interface BackgroundImageWithSpecificStyle {
  /**
     * Link to image
     */
  image: any;

  /**
    * specific styles for background image
    */
  style: React.CSSProperties;
}

/**
 * List of background images
 */
const images: BackgroundImages = {
  1: {
    image: BloodMoon,
    styles: [imageStyles.left, imageStyles.right],
  },
  2: {
    image: BloodMoon0,
    styles: [imageStyles.left, imageStyles.right],
  },
  3: {
    image: BloodMoon1,
    styles: [imageStyles.left, imageStyles.right, imageStyles.center],
  },
  4: {
    image: BloodMoon2,
    styles: [imageStyles.left, imageStyles.right, imageStyles.center],
  },
  5: {
    image: BloodMoon3,
    styles: [imageStyles.left, imageStyles.right, imageStyles.center],
  },
  6: {
    image: BloodMoon5,
    styles: [imageStyles.center],
  },
  7: {
    image: BloodMoon6,
    styles: [imageStyles.left, imageStyles.right],
  },
  8: {
    image: BloodMoon7,
    styles: [imageStyles.center],
  },
  9: {
    image: BloodMoon8,
    styles: [imageStyles.center],
  },
  10: {
    image: BloodMoon9,
    styles: [imageStyles.center],
  },
  11: {
    image: BloodMoon10,
    styles: [imageStyles.center],
  },
  12: {
    image: BloodMoon11,
    styles: [imageStyles.center],
  },
  13: {
    image: BloodMoon12,
    styles: [imageStyles.center],
  },
  14: {
    image: BloodMoon13,
    styles: [imageStyles.right],
  },
  15: {
    image: BloodMoon14,
    styles: [imageStyles.center],
  },
  16: {
    image: BloodMoon15,
    styles: [imageStyles.left, imageStyles.right, imageStyles.center],
  },
  17: {
    image: Logo,
    styles: [imageStyles.center],
  },
  18: {
    image: Logo2,
    styles: [imageStyles.center],
  },
};

/**
 * @description return random image with random style
 * (style from image description) from images list {@link images}
 * @returns
 */
const getRandomImage = (): BackgroundImageWithSpecificStyle => {
  const imagesList = Object.values(images);
  const randomIndex = Math.floor(Math.random() * imagesList.length);
  const randomImage = imagesList[randomIndex].image;
  const randomStyleIndex = Math.floor(Math.random() * imagesList[randomIndex].styles.length);
  const randomStyle = imagesList[randomIndex].styles[randomStyleIndex];

  return {
    image: randomImage,
    style: randomStyle,
  } as BackgroundImageWithSpecificStyle;
};

/**
 * @description Provides common functionality for pages
 */
export const PageBorder: React.FC<PropsWithChildren<PageBorderProps>> = (props: PropsWithChildren<PageBorderProps>) => {
  const [currentImageStyle, setCurrentImageStyle] = useState<React.CSSProperties>(imageStyles.center);
  const [currentImage, setCurrentImage] = useState(Logo);
  useEffect(() => {
    const {image, style}: BackgroundImageWithSpecificStyle = getRandomImage();
    setCurrentImage(image);
    setCurrentImageStyle(style);
  }, []);

  return (
    <>
      <Image
        src={currentImage}
        className={styles["appear-from-dark"]}
        style={currentImageStyle}
      />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          {props.backButton && (
            <Button
              text={props.backButton?.text}
              onClick={props.backButton?.onClick}
              // style={{width: 200}}
            />
          )}
        </header>
        {props.children}
      </div>
    </>
  );
};
