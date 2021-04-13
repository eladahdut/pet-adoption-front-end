function SignInModal(props) {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword" />
      </div>
      <div class="mb-3">
        <label for="repeatPassword" class="form-label">
          Repeat Password Please
        </label>
        <input type="password" class="form-control" id="repeatPassword" />
      </div>
      <div className="d-flex flex-wrap">
        <div className="col-5">
          <label for="firstName" class="form-label">
            First Name
          </label>
          <input type="text" class="form-control" id="firstName" />
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="col-6" className="col-5">
          <label for="lastName" class="form-label">
            Last Name
          </label>
          <input type="text" class="form-control" id="lastName" />
        </div>
        <div className="col-5">
          <label for="phone" class="form-label">
            Phone
          </label>
          <input type="tel" class="form-control" id="phone" />
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-around">
        <button type="submit" class="btn btn-success">
          Submit
        </button>
        <button
          onClick={(e) => props.toggleModal(e)}
          className="btn btn-outline-warning">
          Close
        </button>
      </div>
    </form>
  );
}

export default SignInModal;
