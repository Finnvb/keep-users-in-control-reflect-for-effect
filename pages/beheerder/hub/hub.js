import { getAllVragenlijsten } from "../../../../scripts/modules/api.js";

console.log((await getAllVragenlijsten()).data[0]);

const quizlijst = document.querySelector(".quizlijst");
