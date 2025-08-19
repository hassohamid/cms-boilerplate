"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import ProductPage from "@/components/content-types/ProductPage";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Hero from "@/components/nestable/Hero";
import ProductList from "@/components/nestable/ProductList";
import LatestProductsList from "@/components/nestable/LatestProductsList";
import ImageBanner from "@/components/nestable/ImageBanner";
import ImageWithText from "@/components/nestable/ImageWithText";
import SearchBar from "@/components/nestable/SearchBar";

const components = {
  page: Page,
  product_page: ProductPage,
  teaser: Teaser,
  richtext: RichTextDefault,
  hero: Hero,
  product_list: ProductList,
  latest_products_list: LatestProductsList,
  image_banner: ImageBanner,
  image_with_text: ImageWithText,
  search_bar: SearchBar,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
