{
  /** example */
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, pwd: string): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  /** example */
  function printLoginState(state: LoginState): void {
    if (state.result === "success") console.log(state.result);
    else console.log(state.result);
  }
  // printLoginState();
}
