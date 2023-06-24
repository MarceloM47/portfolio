interface ProjectProps {
    src: string;
    alt: string;
    url: string;
}

function Project({src, alt, url}: ProjectProps){
  return (
    <div className="project">
        <a href={url} target="_blank"><img src={src} alt={alt} /></a>
    </div>
  )
}

export default Project