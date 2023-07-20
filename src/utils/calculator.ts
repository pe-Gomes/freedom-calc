export class Calculator {
  sumDateWithYears(
    date: Date,
    years: number,
    months: number,
    days: number,
  ): Date {
    date.setFullYear(date.getFullYear() + years)

    date.setMonth(date.getMonth() + months)

    date.setDate(date.getDate() + days)

    return date
  }
}
