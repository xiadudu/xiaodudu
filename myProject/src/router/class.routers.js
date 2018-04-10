import classIndex from "@/view/class/class.vue";
import classRoom from "@/view/classRoom/classRoom.vue";

export default [{
  path: "/class",
  component: classIndex,
  name: "classIndex",
  children: [{
    path: "room",
    name: "classRoom",
    component: classRoom
  }]
}];
