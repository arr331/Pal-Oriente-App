import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunicipalityMenuPage } from './municipality-menu.page';

describe('MunicipalityMenuPage', () => {
  let component: MunicipalityMenuPage;
  let fixture: ComponentFixture<MunicipalityMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunicipalityMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
