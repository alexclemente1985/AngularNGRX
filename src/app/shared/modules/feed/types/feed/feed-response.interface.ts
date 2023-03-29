import { IArticle } from "../article/article.interface";

export interface IFeedResponse{
  articles: IArticle[];
  articlesCount: number;
}
