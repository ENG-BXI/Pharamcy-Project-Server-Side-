import MedicineModel from '../Models/Medicine.Model';

class Medicine {
  medicineModel: MedicineModel;
  constructor() {
    this.medicineModel = new MedicineModel(); 
  }

  AllMedicines() {
    const x = this.medicineModel.X + 50;
    return x;
  }
  MedicineById(id: string) {}
}
