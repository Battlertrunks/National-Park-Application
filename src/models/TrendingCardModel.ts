interface image {
  url: string;
}

export default interface TrendingCardsModel {
  id: string;
  images: image[];
  fullName: string;
  description: string;
}
