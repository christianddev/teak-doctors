import { MdStar } from "react-icons/md"
export default {
  title: "Featured",
  name: "featured",
  type: "document",
  icon: MdStar,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Featured blogs",
      name: "featuredBlogs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "blog",
            },
          ],
        },
      ],
      validation: (Rule) => [
        Rule?.unique()?.error("Every item should be unique"),
        Rule?.required().error("At least one item is required"),
      ],
    },
    {
      title: "Featured categories",
      name: "featuredCategories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "category",
            },
          ],
        },
      ],
      validation: (Rule) => [
        Rule?.unique()?.error("Every item should be unique"),
        Rule?.required().error("At least one item is required"),
      ],
    },
  ],
}
