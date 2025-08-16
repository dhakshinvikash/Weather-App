import React from 'react';
import windIcon from './assets/wind.png';
import humidityIcon from './assets/humidity.png';
import visibilityIcon from './assets/visibility.png';
import sunriseIcon from './assets/sunrise.png';
import sunsetIcon from './assets/sunset.png';

const Icons = ({src, alt, className}) => (
    <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />
)

export const WindIcon = () => <Icons src={windIcon} alt="Wind" className='animate-icon svg-hover '/>;
export const HumidityIcon = () => <Icons src={humidityIcon} alt="Humidity" className='powerful-pulse svg-hover '/>;
export const VisibilityIcon = () => <Icons src={visibilityIcon} alt="Visibility" className='powerful-pulse svg-hover '/>;
export const SunriseIcon = () => <Icons src={sunriseIcon} alt="Sunrise" className='powerful-pulse svg-hover '/>;
export const SunsetIcon = () => <Icons src={sunsetIcon} alt="Sunset" className='powerful-pulse svg-hover '/>;