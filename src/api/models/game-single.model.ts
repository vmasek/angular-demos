/* tslint:disable */

export interface GameSingle {
  achievements_count?: number;
  added?: number;
  added_by_status?: object;
  additions_count?: number;
  alternative_names?: string[];
  background_image?: string;
  background_image_additional?: string;
  creators_count?: number;
  description?: string;
  game_series_count?: number;
  id?: number;
  metacritic?: number;
  metacritic_url?: string; // For example "http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt"
  movies_count?: number;
  name?: string;
  name_original?: string;
  parent_achievements_count?: string;
  parents_count?: number;
  playtime?: number; // in hours
  rating: number;
  rating_top?: number;
  ratings?: object;
  ratings_count?: number;
  reactions?: object;
  reddit_count?: number;
  reddit_description?: string;
  reddit_logo?: string;
  reddit_name?: string;
  reddit_url?: string; // For example "https://www.reddit.com/r/uncharted/" or "uncharted"
  released?: string;
  reviews_text_count?: string;
  screenshots_count?: number;
  slug?: string;
  suggestions_count?: number;
  tba?: boolean;
  twitch_count?: string;
  updated?: string;
  website?: string;
  youtube_count?: string;
}
