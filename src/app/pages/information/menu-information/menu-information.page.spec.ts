import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuInformationPage } from './menu-information.page';

describe('MenuInformationPage', () => {
  let component: MenuInformationPage;
  let fixture: ComponentFixture<MenuInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
