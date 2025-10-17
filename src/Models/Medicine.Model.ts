export default class MedicineModel {
  private x = 50;
  get X() {
    return this.x;
  }
  set X(val) {
    if (val) this.x = val;
  }
}
