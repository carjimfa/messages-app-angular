import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFeedComponent } from './messages-feed.component';

describe('MessagesFeedComponent', () => {
  let component: MessagesFeedComponent;
  let fixture: ComponentFixture<MessagesFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
