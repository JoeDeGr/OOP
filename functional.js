let salary = 45000;
let totalOvertime = 10;
let overtimeHourlyRate = salary / 2000 * 1.5;

function compensation(salary, totalOvertime, overtimeHourlyRate) {
    return salary + (totalOvertime * overtimeHourlyRate)
}