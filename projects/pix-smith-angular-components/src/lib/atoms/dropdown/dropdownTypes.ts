export interface DropdownItem {
  text?:string;
  value:string;
  action?:(selectedItem:DropdownItem) => void;
}
