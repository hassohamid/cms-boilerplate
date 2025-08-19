import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export default function ProductPage({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="min-h-screen">
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
