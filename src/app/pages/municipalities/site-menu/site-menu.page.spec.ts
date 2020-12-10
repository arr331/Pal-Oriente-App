import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SiteMenuPage } from './site-menu.page';

describe('SiteMenuPage', () => {
  let component: SiteMenuPage;
  let fixture: ComponentFixture<SiteMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SiteMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
