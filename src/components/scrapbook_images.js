import React from 'react';


export default props =>{
    const{src,style}=props.about;
    console.log('scrapbook image props:', props);
    return <img src={src} style={style} className="scrapbook-image"/>
}

