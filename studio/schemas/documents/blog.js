import { format } from "date-fns"
import { GiNotebook } from "react-icons/gi"

export default {
  title: "Blog post",
  name: "blog",
  type: "document",
  icon: GiNotebook,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Published At",
      name: "publishedAt",
      type: "datetime",
    },
    {
      title: "Cover image",
      name: "coverImage",
      type: "customImage",
    },
  ],
  preview: {
    select: {
      image: "coverImage",
      title: "title",
      publishedAt: "publishedAt",
    },
    prepare({ image, title, publishedAt }) {
      return {
        title,
        media: image,
        subtitle: publishedAt
          ? format(new Date(publishedAt), "p, dd/MM/yyyy")
          : "",
      }
    },
  },
}
