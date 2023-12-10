import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="57" y="215" rx="0" ry="0" width="2" height="0" />
    <circle cx="144" cy="115" r="111" />
    <circle cx="172" cy="144" r="22" />
    <rect x="17" y="234" rx="8" ry="8" width="251" height="19" />
    <rect x="18" y="279" rx="9" ry="9" width="250" height="68" />
    <rect x="18" y="357" rx="8" ry="8" width="87" height="25" />
    <rect x="121" y="357" rx="20" ry="20" width="150" height="36" />
  </ContentLoader>
);

export default Skeleton;
