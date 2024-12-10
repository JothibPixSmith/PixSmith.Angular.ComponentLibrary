import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  const typeString = "text";
  const valueChangedToString = "123";
  const placeholderString = "this is a test.";

  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let element: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.type = typeString;
    component.value = "";
    component.placeholder = placeholderString;
    element = fixture.nativeElement.querySelector("input");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.type).toBe(typeString);
  });

  it('should value change', () => {
    expect(component.value).toBeFalsy();
    element.value = valueChangedToString;
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.value).toBe(valueChangedToString);
    });
  });

  it('should have placeholder value', () => {
    expect(component.placeholder).toBe(placeholderString);
    expect(element.placeholder).toBe(placeholderString);
  });
});
