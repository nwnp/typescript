{
  /** Enum
   *
   * 거의 대부분이 Union type으로 대체가 가능함
   */
  // JS
  const MAX_NUM: number = 100;
  const MAX_STUDENTS_PER_CLASS = 10;
  // const MONDAY = 0;
  // const TUESDAY = 1;
  // const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WENDESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;
  console.log(dayOfToday);

  // TS
  enum Days {
    // Monday, // 0
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  console.log(Days.Tuesday);
  let day: Days = Days.Saturday;
  day = 23; // type이 static이 아니기 때문에 권장하지 않음
  console.log(Days.Saturday);

  // Union type으로 바꿔보기
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfWeek: DaysOfWeek = "Wednesday";
}
