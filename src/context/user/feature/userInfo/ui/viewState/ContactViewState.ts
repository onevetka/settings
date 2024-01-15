export class ContactViewState {
  label: string;
  value: string;

  constructor({ label, value }: { label: string; value: string }) {
    this.label = label;
    this.value = value;
  }
}
