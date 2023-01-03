export const setExpireTime = () => {
  if (!localStorage.getItem('expire_time')) {
    const time = Math.round(new Date().getTime() / 1000);
    localStorage.setItem('expire_time', JSON.stringify(time));
  }
};

export const availableTime = () => {
  const expireTime = JSON.parse(localStorage.getItem('expire_time'));
  const time = Math.round(new Date().getTime() / 1000);
  // TODO: cambiar el tiempo a 3600
  console.log('time que paso', time - expireTime);
  return time - expireTime <= 60;
};
