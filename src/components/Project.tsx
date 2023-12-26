interface ProjectProps {
  src: string;
  alt: string;
  url: string;
  mobile: boolean;
}

function Project({ src, alt, url, mobile }: ProjectProps) {
  return (
      <div className={`project ${mobile ? 'project-mobile' : ''}`}>
          <a href={url} target="_blank"><img src={src} alt={alt} /></a>
      </div>
  );
}

export default Project;
