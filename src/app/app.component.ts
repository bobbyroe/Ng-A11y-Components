import { Component, OnInit } from "@angular/core";

const utf8ed = {
  header: `0x550x4E0x2D0x430x410x520x520x490x450x52 0x480x490x530x540x4F0x520x59`,
  h2: `0x570x65 0x630x680x610x6E0x670x650x64 0x770x690x720x650x6C0x650x730x73
  0x660x6F0x72 0x6F0x750x72 0x630x750x730x740x6F0x6D0x650x720x730x2E`,
  p: `0x550x6E0x2D0x630x610x720x720x690x650x72 0x680x610x73
  0x620x650x630x6F0x6D0x65 0x730x790x6E0x6F0x6E0x790x6D0x6F0x750x73
  0x770x690x740x68 0x310x300x300x25 0x630x750x730x740x6F0x6D0x650x72
  0x630x6F0x6D0x6D0x690x740x6D0x650x6E0x740x2E 0x570x65 0x730x650x74
  0x6F0x750x740x0A 0x740x6F 0x630x680x610x6E0x670x65 0x740x680x65
  0x670x610x6D0x650x2C 0x610x6E0x64 0x740x680x65
  0x720x650x730x750x6C0x740x73 0x730x700x650x610x6B 0x660x6F0x72
  0x740x680x650x6D0x730x650x6C0x760x650x730x2E 0x530x650x65 0x740x680x65
  0x6D0x6F0x760x650x730x0A 0x740x680x610x74 0x670x6F0x74 0x750x73 0x740x6F
  0x770x680x650x720x65 0x770x65 0x610x720x65 0x740x6F0x640x610x790x2E`,
  button: `0x470x650x74 0x530x740x610x720x740x650x640x21`,
};
const readable = {
  header: `UN-CARRIER HISTORY`,
  h2: `We changed wireless for our customers.`,
  p: `Un-carrier has become synonymous with 100% customer commitment. We set out
  to change the game, and the results speak for themselves. See the moves
  that got us to where we are today.`,
  button: `Get Started!`,
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "material-components";
  isReadable: Boolean = false;
  selectedTreat: string = "";
  constructor() {}

  ngOnInit() {}

  goA11y(event): void {
    this.isReadable = !this.isReadable;
    const content = this.isReadable ? readable : utf8ed;
    const header = document.querySelector("header h1");
    const h2 = document.querySelector("ul li h2");
    const p = document.querySelector("ul li p");
    const button = document.querySelector("ul li button");
    header.textContent = content.header;
    h2.textContent = content.h2;
    p.textContent = content.p;
    button.textContent = content.button;
  }
}