export const getSocialMediaIcon = (title: string): string => {
  const titleLowerCase = title.toLowerCase();
  switch (titleLowerCase) {
    case 'facebook':
      return `bx bxl-${titleLowerCase}-circle`;
    case 'instagram':
      return `bx bxl-${titleLowerCase}-alt`;
    case 'linkedin':
      return `bx bxl-${titleLowerCase}-square`;
    case 'twitter':
      return `bx bxl-${titleLowerCase}`;
    case 'youtube':
      return `bx bxl-${titleLowerCase}`;
    default:
      return `bx bxl-${titleLowerCase}`;
  }
};

export const formatTitleNetwork = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
