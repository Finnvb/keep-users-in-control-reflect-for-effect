import { getAllVragenlijsten } from "../../scripts/modules/api.js";

console.log((await getAllVragenlijsten()).data[0]);
