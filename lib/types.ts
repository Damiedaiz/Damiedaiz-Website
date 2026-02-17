export type BlogPostMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  slug: string;
};

export type LeadFormState = {
  success: boolean;
  message: string;
};
