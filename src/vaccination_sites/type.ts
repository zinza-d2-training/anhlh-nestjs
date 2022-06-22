export interface DataVaccinationSite {
  id: number;
  street_name: string;
  total_table: number;
  manager: string;
  name: string;
  district?: District;
  ward?: Ward;
  province?: Province;
}
export interface RequestDataVaccinationSite {
  street_name: string;
  total_table: number;
  manager: string;
  name: string;
  ward_id: number;
}
export interface PropertyWardDistrictProvince {
  id: number;
  name: string;
}
export interface District extends PropertyWardDistrictProvince {}
export interface Ward extends PropertyWardDistrictProvince {}
export interface Province extends PropertyWardDistrictProvince {}
