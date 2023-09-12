import {Component} from "@angular/core";
import {BaseComponent} from "../shared/components/base.component";
interface Menu {
  id: Number,
  name: string,
  routerLink: string,
  active: boolean
}

@Component({
  selector: "app-main",
  templateUrl: "features.component.html",
  styleUrls: ["features.component.scss"]
})
export class FeaturesComponent extends BaseComponent{

  avatar: string = "https://firebasestorage.googleapis.com/v0/b/my-data-game.appspot.com/o/78322333_2359335727648960_620076828094103552_n.jpg?alt=media&token=59437669-7de9-4e29-b000-43f103c4538d"
  logo: string = "https://firebasestorage.googleapis.com/v0/b/my-data-game.appspot.com/o/pngwing.com.png?alt=media&token=cbc2482b-9fbb-4162-8d41-438730fbcfb6"

  listMenu: Menu[] = [
    {
      id: 1,
      name: "HTML",
      routerLink: "q-html",
      active: false,
    },
    {
      id: 2,
      name: "CSS", routerLink: "q-css",

      active: false,
    },
    {
      id: 3,
      name: "VanillaJS", routerLink: "q-vanilla",

      active: false,
    },
    {
      id: 4,
      name: "ReactJS", routerLink: "q-react",

      active: false,
    },
    {
      id: 4,
      name: "VueJS", routerLink: "q-vue",

      active: false,
    },
    {
      id: 5,
      name: "Angular2", routerLink: "q-angular",
      active: false,
    }
  ]

  switchPage(link : string) {
    this.router.navigate([`dashboard/${link}`]).then();
  }
}
