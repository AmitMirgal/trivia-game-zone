const { fetchQuizQuestion } = require("../api");

describe("api calls", () => {
  const fakeUserResponse = {
    question: "What is React",
  };
  const apiHandler = {
    fetchQuizQuestion,
  };
  const apiCall = jest
    .spyOn(apiHandler, "fetchQuizQuestion")
    .mockImplementationOnce(() => {
      return fakeUserResponse;
    });

  it("should call api", () => {
    const res = apiHandler.fetchQuizQuestion();

    expect(apiCall).toHaveBeenCalled();
    expect(res).toBe(fakeUserResponse);
  });
});
