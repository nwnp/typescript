{
  /** Intersection Types: And */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId);
    person.work();
  }

  internWork({
    name: "jin",
    score: 4.5,
    employeeId: 123,
    work: () => {
      console.log("work");
    },
  });
}
