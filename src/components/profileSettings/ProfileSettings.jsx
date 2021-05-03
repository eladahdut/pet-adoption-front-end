import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { getUserById } from "../../lib/api";

function ProfileSettings() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const userId = auth.userId;

  useEffect(() => {
    const userId = auth.userId;

    async function getUser() {
      const data = await getUserById(auth.userId, auth.token);
      console.log(data);
    }
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const data = await login(email, password);
      // auth.saveToken(data.userToken);
      // auth.saveUserId(data.userId);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="container bg-light rounded w-50">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="changeEmail" className="form-label">
            Change email address
          </label>
          <input
            required
            type="email"
            className="form-control"
            aria-describedby="changeEmail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="changePassword" className="form-label">
            Change password
          </label>
          <input type="password" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changeFirstName" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changeLastName" className="form-label">
            Change last name
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="changePhone" className="form-label">
            Change phone number
          </label>
          <input type="number" className="form-control" />
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="..."></textarea>
          <label htmlFor="floatingTextarea">Add short bio</label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
