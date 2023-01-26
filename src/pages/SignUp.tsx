const SignUp = () => {
  return (
    <div>
      <form>
        <div className="flex">
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>

        <div className="flex">
          <label htmlFor="name">Email</label>
          <input type="text" />
        </div>

        <div className="flex">
          <input type="Submit" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
