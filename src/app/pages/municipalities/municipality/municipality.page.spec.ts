import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunicipalityPage } from './municipality.page';

describe('MunicipalityPage', () => {
  let component: MunicipalityPage;
  let fixture: ComponentFixture<MunicipalityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunicipalityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
