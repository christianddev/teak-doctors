import { MdImage } from "react-icons/md"
export default {
  title: "custom Image",
  name: "customImage",
  type: "image",
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Alt Text",
      name: "altText",
      type: "string",
      validation: (Rule) => Rule.error("Alt text can´t be empty").required(),
      options: {
        isHighlighted: true
      }
    },
  ],
}
