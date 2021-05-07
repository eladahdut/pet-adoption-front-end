import { useState } from "react";
import { signup } from "../../lib/api";
import { useAuth } from "../../context/auth";
import { useHistory } from "react-router-dom";

function SignUpModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [validPass, setValidPass] = useState(true);
  const auth = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && repeatPassword && firstName && lastName && phone) {
      try {
        signup(
          firstName,
          lastName,
          phone,
          email,
          password,
          repeatPassword
        ).then((data) => {
          if (data) {
            auth.saveToken(data.userToken).then(() => {
              auth.saveUserId(data.userId);
            });
            auth.saveAdoptedPet(data.adoptedPets);
            auth.saveFosteredPet(data.fosterdPets);
            auth.saveLikedPet(data.likedPets);
            auth.saveUserType(data.userType);
            auth.saveUserName(data.userName);
            history.push("/");
          }
        });
      } catch (error) {
        console.log(error);
        alert({ Message: error });
      }
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="inputPassword"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="repeatPassword" className="form-label">
            Repeat Password Please
          </label>
          <input
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
            type="password"
            className={`form-control ${validPass ? "" : "is-invalid"}`}
            id="repeatPassword"
          />
          {!validPass ? (
            <div
              id="validationServerUsernameFeedback"
              className="invalid-feedback">
              Passwords do not match.
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="d-flex flex-wrap">
          <div className="col-5">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              className="form-control"
              id="firstName"
            />
          </div>
          &nbsp;&nbsp;&nbsp;
          <div className="col-6" className="col-5">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              className="form-control"
              id="lastName"
            />
          </div>
          <div className="col-5">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="tel"
              className="form-control"
              id="phone"
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-around">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
      <hr />
      <button onClick={props.toggleModal} className="btn btn-outline-warning">
        Close
      </button>
    </div>
  );
}

export default SignUpModal;
