import {Component} from "@angular/core";

interface Menu {
  id: Number,
  name: string,
  active: boolean
}

@Component({
  selector: "app-main",
  templateUrl: "features.component.html",
  styleUrls: ["features.component.scss"]
})
export class FeaturesComponent {

  avatar: string = "https://firebasestorage.googleapis.com/v0/b/my-data-game.appspot.com/o/IMG20191128161057.jpg?alt=media&token=72020974-f083-4c1b-bf41-d82f6afefa31"
  logo: string = "https://firebasestorage.googleapis.com/v0/b/my-data-game.appspot.com/o/logo_q.png?alt=media&token=4e7a7207-a96c-427b-acb9-2d48eddb1706"

  listMenu: Menu[] = [
    {
      id: 1,
      name: "HTML",
      active: false,
    },
    {
      id: 2,
      name: "CSS",
      active: false,
    },
    {
      id: 3,
      name: "VanillaJS",
      active: false,
    },
    {
      id: 4,
      name: "ReactJS",
      active: false,
    },
    {
      id: 4,
      name: "VueJS",
      active: false,
    },
    {
      id: 5,
      name: "Angular2",
      active: false,
    }
  ]

}
