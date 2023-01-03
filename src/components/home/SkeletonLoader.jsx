import { Skeleton } from 'antd';

export const SkeletonLoader = () => {
  return (
    <div className='home_containerProducts'>
      <Skeleton.Button active />
      <Skeleton.Button active />
      <Skeleton.Button active />
      <Skeleton.Button active />
      <Skeleton.Button active />
      <Skeleton.Button active />
    </div>
  );
};
