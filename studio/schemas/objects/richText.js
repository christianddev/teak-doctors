import { MdWork } from "react-icons/md"

export default {
  title: "Rich Text",
  name: "richText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // styles: [
      //   {
      //     title: "H1",
      //     value: "h1",
      //   },
      //   {
      //     title: "Normal",
      //     value: "normal",
      //   },
      // ],
      // lists: [
      //   {
      //     title: "Bullet List",
      //     value: "bullet",
      //   },
      //   {
      //     title: "Numbered list",
      //     value: "number",
      //   },
      // ],
      // marks: {
      //   decorators: [
      //     {
      //       title: "Strong",
      //       value: "strong",
      //     },
      //     {
      //       title: "Emphasis",
      //       value: "em",
      //     },
      //   ],
      //   annotations: [
      //     {
      //       title: "URL",
      //       name: "link",
      //       icon: MdWork,
      //       type: "object",
      //       fields: [
      //         {
      //           title: "URL",
      //           name: "href",
      //           type: "url",
      //         },
      //       ],
      //     },
      //   ],
      // },
    },
    {
      type: "customImage",
    },
    {
      type: "customCode",
    },
  ],
}
