import React, { useState } from 'react'
import SplitCard from './SplitCard';
import { FiExternalLink } from 'react-icons/fi';

const ProjectItem = ({project}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const img = project?.images?.[0]; 

  const resolveUrl = (p) => {
    if (!p) return "";
    // Absulut URL or data/blob go 
    if (/^(?:[a-z]+:)?\/\//i.test(p) || /^data:|^blob:/.test(p)) return p;
    const base = new URL(import.meta.env.BASE_URL || "/", window.location.origin);
    return new URL(p.replace(/^\/+/, ""), base).toString();
  };

  const handleImageLoad = () => {
    console.log('Succes Image loaded');
    setImageLoading(false);
    setImageError(false);
  } 

  const handleImageError = () => {
    console.log('Error loading images: ', img?.src);
    setImageLoading(false);
    setImageError(true);
  }
  //const textAligment = 'text-right';
  return (
    <div>
      <SplitCard> 
        <SplitCard.Left>
          <div className='h-full grid place-items-center'>
          {img?.src ? (
            <div className="relative border-2 border-white">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-stone-200/50 rounded-md z-10">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-stone-400 border-t-transparent"></div>
                </div>
              )}
              
              {!imageError ? (
                <img
                  src={resolveUrl(img.src)}
                  alt={img.alt || project.title || 'Project image'}
                  className={`block w-full h-auto rounded-md object-cover transition-opacity duration-300 ${
                    imageLoading ? 'opacity-50' : 'opacity-100'
                  }`}
                  loading="lazy"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              ) : (
                <div className="aspect-video w-full grid place-items-center rounded-md bg-red-50 border-2 border-red-200 text-red-600 text-sm">
                  <div className="text-center p-4">
                    <div className="text-2xl mb-2">⚠️</div>
                    <div className="font-medium">Picture not loaded</div>
                    <div className="text-xs mt-1 opacity-70 break-all">{img.src}</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Ni slike na voljo
            <div className="aspect-video w-full grid place-items-center rounded-md bg-stone-300/30 text-stone-600 text-sm">
              <div className="text-center">
                <div className="text-xl mb-1">📷</div>
                <div>No image available</div>
              </div>
            </div>
          )}
          </div>
        </SplitCard.Left>
        <SplitCard.Right >
          <h3 className="text-2xl font-bold mb-1">{project.title}</h3>

          {project.summary && (
            <p className="text-stone-700 mb-3">{project.summary}</p>
          )}

          {project.tech?.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t, i) => (
                <li
                  key={`${t}-${i}`}
                  className="px-2 py-0.5 rounded-full bg-stone-800/10 text-stone-800 text-xs"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          {project.highlights?.length > 0 && (
            <ul className="list-disc pl-5 text-stone-800 mb-3">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          {project.features?.length > 0 && (
            <div className="mb-3">
              <h4 className="font-semibold text-stone-900 mb-1">Features</h4>
              <ul className="list-disc pl-5 text-stone-800">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {project.links?.repository && (
            <a
              href={project.links.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 underline"
            >
              View repository
              <FiExternalLink aria-hidden />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          )}
        </SplitCard.Right>        
      </SplitCard>
      </div>
  )
}

export default ProjectItem