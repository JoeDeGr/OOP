class Employee {
    constructor(
        name,
        salary,
        totalOvertime
    ) {
        this.name = name
        this.salary = salary;
        this.totalOvertime = totalOvertime
    }
    overtimeHourlyRate() {
        return this.salary / 2000 * 1.5;
    }
    totalCompensation() {
        return this.salary + (this.totalOvertime * this.overtimeHourlyRate());
    }
}
const Joey_Bagalodon = new Employee("Joey Bagolodon", 55000, 1000)

console.log(Joey_Bagolodon.totalCompensation())