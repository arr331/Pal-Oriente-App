import { Component, Input, OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-master-menu',
  templateUrl: './master-menu.component.html',
  styleUrls: ['./master-menu.component.scss'],
})
export class MasterMenuComponent implements OnChanges {
  itemList = [];
  @Input() route: any;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private routeRoute: ActivatedRoute,
    private loadingController: LoadingController) {
  }

  async ngOnChanges() {
    this.itemList = [];
    this.routeRoute.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        const items = this.router.getCurrentNavigation().extras.state;
        this.itemList = items ? Object.keys(items).map(item => items[item].state ? items[item]: undefined) : [];
        this.itemList = this.itemList.filter(Boolean);
      }
    });
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 400
    });
    await loading.present();
  }
}
