import {Component} from "@angular/core";
import {BaseComponent} from "../shared/components/base.component";
import {GROUP_ANSWER} from "../core/constants";

interface Menu {
  id: number,
  name: string,
  active: boolean,
  group: GROUP_ANSWER
}

@Component({
  selector: "app-main",
  template: `
    <div id="header">
      <div class="container d-flex align-items-center justify-content-between ">
        <div class="logo">
          <img [ngSrc]="logo" width="60" height="60" alt="logo">
        </div>
        <ul class="nav">
          <li *ngFor="let menu of listMenu" (click)="switchPage(menu.group, menu.id)"
              [class.menu-active]="menu.active">{{menu.name}}</li>
        </ul>
      </div>
    </div>
    <div id="content" class="position-relative">
      <app-layout-question [group]="group"></app-layout-question>
    </div>
  `,
  styleUrls: ["features.component.scss"]
})
export class FeaturesComponent extends BaseComponent {
  group: GROUP_ANSWER = GROUP_ANSWER.Html
  logo: string = "https://firebasestorage.googleapis.com/v0/b/my-data-game.appspot.com/o/pngwing.com.png?alt=media&token=cbc2482b-9fbb-4162-8d41-438730fbcfb6"
  listMenu: Menu[] = [
    {
      id: 1,
      name: "HTML",
      active: true,
      group: GROUP_ANSWER.Html
    },
    {
      id: 2,
      name: "CSS",
      active: false,
      group: GROUP_ANSWER.Css

    },
    {
      id: 3,
      name: "VanillaJS",
      active: false,
      group: GROUP_ANSWER.VanillaJs

    },
    {
      id: 4,
      name: "ReactJS",
      active: false,
      group: GROUP_ANSWER.ReactJs

    },
    {
      id: 5,
      name: "VueJS",
      active: false,
      group: GROUP_ANSWER.VueJs

    },
    {
      id: 6,
      name: "Angular",
      active: false,
      group: GROUP_ANSWER.Angular
    },
    {
      id: 7,
      name: "Git",
      active: false,
      group: GROUP_ANSWER.Git
    },
    {
      id: 8,
      name: "Basic",
      active: false,
      group: GROUP_ANSWER.Basic
    }
  ]

  switchPage(group: GROUP_ANSWER, id: number) {
    this.group = group
    this.listMenu.forEach((m: any) => {
      m.active = m.id === id;
    })
  }
}
