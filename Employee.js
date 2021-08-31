class Employee {
    constructor(
        salary,
        totalOvertime
    ) {
        this.salary = salary;
        this.totalOvertime = totalOvertime
    }
}
overtimeHourlyRate() {
    return this.salary / 2000 * 1.5;
}
totalCompensation() {
    return this.salary + (this.totalOvertime * this.overtimeHourlyRate());
}

export default Employee;