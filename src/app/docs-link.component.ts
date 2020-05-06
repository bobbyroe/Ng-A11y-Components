import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-docs-link",
  template: `
    <a
      href="https://material.angular.io/components/button/overview"
      target="_blank"
      class="mat-focus-indicator docs-button mat-button mat-button-base ng-docs-link"
    >
      <span class="mat-button-wrapper">
        <img
          src="../assets/angular-white-transparent.svg"
          alt="Angular"
          class="docs-angular-logo"
        />
        <span> Material</span>
      </span>
    </a>
  `,
  styles: [
    `
      .ng-docs-link {
        position: absolute;
        right: 0px;
        bottom: 10px;
        color: #fff;
      }
      .docs-angular-logo {
        height: 26px;
        vertical-align: middle;
      }
    `,
  ],
})
export class DocsLinkComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
