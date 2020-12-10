import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CelebrationMenuPage } from './celebration-menu.page';

describe('CelebrationMenuPage', () => {
  let component: CelebrationMenuPage;
  let fixture: ComponentFixture<CelebrationMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrationMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CelebrationMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
