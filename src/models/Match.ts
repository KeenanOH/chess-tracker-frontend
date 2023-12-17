import School from "./School";

export default interface Match {
    _id: string,
    homeSchool: School,
    awaySchool: School,
    date: string
}
