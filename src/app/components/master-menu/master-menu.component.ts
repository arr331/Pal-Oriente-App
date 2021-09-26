import { Component, Input, OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-master-menu',
  templateUrl: './master-menu.component.html',
  styleUrls: ['./master-menu.component.scss'],
})
export class MasterMenuComponent implements OnChanges {
  itemList: any[];
  @Input() route: any;
  @Input() name: any;
  @Input() change: boolean;

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private storage: Storage
    ) {
  }

  async ngOnChanges() {
    console.log('Si cambie ', this.name);
    
    this.itemList = null;
    this.storage.get(`${this.name}List`).then(items => {
      this.itemList = [];
        this.itemList = items ? Object.keys(items).map(item => items[item].state ? items[item] : undefined) : [];
        this.itemList = this.itemList.filter(Boolean);
      }
    );
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 300
    });
    await loading.present();
  }

  async goTo(item) {
    await this.storage.set(this.name, item);
    this.router.navigate([`tabs/${this.route}`]);
  }
}
