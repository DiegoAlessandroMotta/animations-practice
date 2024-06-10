import { useEffect, useState } from "react";

export const ImageViewer = () => {
  const [imgUrl, setImgUrl] = useState<string | null>(null)
  const [classList, setClassList] = useState<string | null>('animate-fade-in')

  useEffect(() => {
    const images = document.querySelectorAll(".image-container");

    images.forEach(($imageContainer) => {
      $imageContainer.addEventListener("click", (event) => {
        const $img = (event.target as HTMLElement)?.closest("img");

        if ($img instanceof HTMLImageElement) {
          const newImgUrl = $img.getAttribute("src");
          setClassList('animate-fade-in')
          setImgUrl(newImgUrl)
        }
      });
    });
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target !== (event.target as HTMLElement)?.closest("img")) {
      setClassList('animate-fade-out')
      setTimeout(() => {
        setImgUrl(null)
      }, 200);

    }
  }

  return (
    imgUrl !== null &&
    <div
      className={`fixed w-dvw h-dvh bg-black/50 backdrop-blur top-0 animate-duration-faster ${classList}`}
      data-id="img-viewer"
      onClick={handleClick}
    >
      <picture className="w-full h-full flex items-center justify-center">
        <img
          className="object-contain max-h-[95dvh] max-w-[95dvw]"
          src={imgUrl}
          alt="Anything" />
      </picture>
    </div>
  )
}