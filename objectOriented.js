//encapsulation, reduce functional paramaters as much as possible.


const employee = {
    salary: 45000,
    totalOvertime: 10,
    overtimeHourlyRate: function () {
        return this.salary / 2000 * 1.5;
    },
    totalCompensation: function () {
        return this.salary + (this.totalOvertime * this.overtimeHourlyRate());
    }
};

employee.totalCompensation();