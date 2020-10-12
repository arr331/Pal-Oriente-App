import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CelebrationPage } from './celebration.page';

describe('CelebrationPage', () => {
  let component: CelebrationPage;
  let fixture: ComponentFixture<CelebrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CelebrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
