import path from 'path';

export const avatarPathResolve = (companyId) => {
     let avatarPath;
     if (companyId <= 5) avatarPath = path.resolve(__dirname, 'images', `0${companyId}.png`)
     else avatarPath = path.resolve(__dirname, 'images', '06.png');
     
     return avatarPath;
}