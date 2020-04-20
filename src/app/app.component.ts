import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";

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

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
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
