import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      isPopupOpen: true,
      popupPosition: { x: 0, y: 0 },
      blogs: [
        {
          id: "1",
          author: "Mona Singh",
          title: "My Blog",
          content: `Were continuing to add more features for our VueJS applications. After the story with vue layouts Id like to dive deeper into automation and create an automatic router for the app. My friend Philipp met the next problem with vue router: he has hundreds of routes in his application and the router file contains hundreds of lines of code. I think the reader also see this problem if there are more than a few pages in the application. It will be a good idea to allow the router to create routes automatically once the developer add new pages in the application.`,
        },
        {
          id: "2",
          author: "Dipti Singh",
          title: "My Second Blog",
          content: `I must confess that I find HTML and CSS too much complicated, especially when it comes to the fine-tuning of the elements of the page. There are too many rules, counter-intuitive and colliding with each other. Sometimes we need to use tricks (!) to achieve simple things. The definition of an element may be spread in many places: HTML, CSS (inline, embedded, and external file), and JavaScript. It is very easy to get lost in the cascade system. And there is the browser & device problem because what works fine for some browsers may behave badly for another browser, and even on the same browser on a different device.`,
        },
        {
          id: "3",
          author: "Kimti Singh",
          title: "My Third Blog",
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
