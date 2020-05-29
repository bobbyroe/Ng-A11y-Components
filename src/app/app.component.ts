import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { LiveAnnouncer } from "@angular/cdk/a11y";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "material-components";
  myControl = new FormControl();
  options: string[] = ["Wun", "Two", "Three", "Four", "Five", "Six"];
  filteredOptions: Observable<string[]>;
  treats: string[] = ["Popsicle", "Cookie", "Gummies", "Ice Cream", "Fish"];
  announcer: LiveAnnouncer;
  selectedTreat: string = "";
  constructor(public dialog: MatDialog, announcer: LiveAnnouncer) {
    this.announcer = announcer;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  onKey(event): void {
    let activeOption = event.currentTarget.getAttribute(
      "aria-activedescendant"
    );
    if (!activeOption) {
      return;
    } else {
      let optionElement = document.body.querySelector(
        `#${activeOption} .mat-option-text`
      );
      let optionText = optionElement ? optionElement.textContent : null;
      if (optionText) {
        this.selectedTreat = optionText;
      }
      this.announcer.announce(this.selectedTreat);
    }
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((o) => o.toLowerCase().includes(filterValue));
  }
}

@Component({
  selector: "dialog-dialog",
  templateUrl: "app.dialog.html",
})
export class DialogComponent {}
