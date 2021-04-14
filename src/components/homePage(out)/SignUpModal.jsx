function SignUpModal(props) {
  console.log(props);
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="mb-3">
          <label htmlFor="repeatPassword" className="form-label">
            Repeat Password Please
          </label>
          <input type="password" className="form-control" id="repeatPassword" />
        </div>
        <div className="d-flex flex-wrap">
          <div className="col-5">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="col-6" className="col-5">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="col-5">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input type="tel" className="form-control" id="phone" />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-around">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
      <button
        onClick={(e) => props.toggleModal(e)}
        className="btn btn-outline-warning"
      >
        Close
      </button>
    </div>
  );
}

export default SignUpModal;
