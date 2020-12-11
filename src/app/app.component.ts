import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "./user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}

  userActivated: Boolean = false;
  private Subs: Subscription;

  ngOnInit() {
    this.Subs = this.userService.activatedEmmiter.subscribe((didActivated) => {
      this.userActivated = didActivated;
    });
  }

  ngOnDestroy() {
    this.Subs.unsubscribe();
  }
}
