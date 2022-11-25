//Import Images
import js1 from "./assets/js1.jpg"
import js2 from "./assets/js2.jpg"
import react1 from "./assets/react1.jpg"
import react2 from "./assets/react2.jpg"
import reactnative1 from "./assets/reactnative1.jpg"
import reactnative2 from "./assets/reactnative2.jpg"

export const CourseState = () => {
  return [
    {
      title: "Interaktiv JavaScript 2022",
      mainImg: js1,
      secondaryImg: js2,
      url: "/courses/javascript",
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "React Courses Best 2021",
      mainImg: react1,
      url: "/courses/react",
      secondaryImg: react2,
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "ReactNative Course Top 10 ",
      mainImg: reactnative1,
      url: "/courses/reactnative",
      secondaryImg: reactnative2,
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
