import { Skeleton } from 'antd';

export const SkeletonLoaderDetail = () => {
  return (
    <>
      <div className='detailProduct_img-container'>
        <Skeleton.Image active />
      </div>
      <div className='detailProduct_information'>
        <Skeleton.Button active />
      </div>
      
    </>
  );
};
